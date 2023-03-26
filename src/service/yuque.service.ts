import {
  Inject,
  Config,
  Provide,
  Init,
  Scope,
  ScopeEnum,
} from '@midwayjs/decorator';
import { Context } from '@midwayjs/faas';
import * as SDK from '@yuque/sdk';
import IYuqueService, {
  User,
  GroupListParams,
  RepoListParams,
  DocListParams,
  DocDetailParams,
  DocDetailResult,
  RepoDetailResult,
  DocParamsMap,
} from '../interface/yuque.interface';
const config = require('../../yuque.config.js');

@Provide()
@Scope(ScopeEnum.Singleton)
export class yuqueService implements IYuqueService {
  @Inject()
  ctx: Context;

  @Inject('lodash')
  lodash;

  @Inject('cache')
  cache;

  @Config('yuqueSecretKey')
  secretKey;

  client: any;
  user: any;

  getDocKey(namespace, slug) {
    return `${namespace}|${slug}`;
  }

  @Init()
  async initMethod() {
    this.client = new SDK({ token: this.secretKey });
    await this.initCacheFromConfig();
  }

  async getUser(): Promise<User> {
    return this.client.users.get();
  }

  async getGroupList(params: GroupListParams): Promise<object[]> {
    return this.client.groups.list(params);
  }

  async getRepoList(params: RepoListParams): Promise<RepoDetailResult[]> {
    return this.client.repos.list(params);
  }

  async getDocList(params: DocListParams): Promise<DocDetailResult[]> {
    return this.client.docs.list(params);
  }

  async getDocDetail(params: DocDetailParams): Promise<DocDetailResult> {
    return this.client.docs.get(params);
  }

  async initCacheFromConfig() {
    this.user = await this.getUser();
    const curRepoList = await this.getRepoList({ user: this.user.login });
    const docParamsMap: DocParamsMap = new Map();
    const { repos: configRepoList } = config;
    for (const configRepo of configRepoList) {
      const curRepo = curRepoList.find(
        curRepo => curRepo.name === configRepo.name
      );
      if (!configRepo.name || !curRepo) return;
      const { namespace } = curRepo;
      const docList = await this.getDocList({ namespace });
      const slugList = [];
      for (const doc of docList) {
        const { title, slug } = doc;
        let isSave = true;
        if (
          Array.isArray(configRepo.includes) &&
          configRepo.includes.length !== 0
        ) {
          const isIncludes = configRepo.includes.some(it => {
            const { key, value } = it;
            if (this.lodash.isString(it) && title === it) return true;
            if (this.lodash.isObject(it)) {
              switch (key) {
                case 'StartsWith':
                  return title.startsWith(value);
                case 'EndsWith':
                  return title.endsWith(value);
                case 'RE':
                  return title.match(value)?.[0] === title;
                default:
                  return false;
              }
            }
            return false;
          });
          if (!isIncludes) isSave = false;
        }
        if (
          Array.isArray(configRepo.excludes) &&
          configRepo.excludes.length !== 0
        ) {
          const isExclude = !configRepo.excludes.some(it => {
            const { key, value } = it;
            if (this.lodash.isString(it) && title === it) return true;
            if (this.lodash.isObject(it)) {
              switch (key) {
                case 'StartsWith':
                  return title.startsWith(value);
                case 'EndsWith':
                  return title.endsWith(value);
                case 'RE':
                  return title.match(value)?.[0] === title;
                default:
                  return false;
              }
            }
            return false;
          });
          if (!isExclude) isSave = false;
        }
        if (isSave) slugList.push(slug);
      }
      docParamsMap.set(namespace, {
        repo: curRepo,
        slugList,
      });
    }

    await this.cache.setKey('map', docParamsMap);
    for (const { repo, slugList } of docParamsMap.values()) {
      const { namespace } = repo;
      for (const slug of slugList) {
        const docDetail = await this.getDocDetail({ namespace, slug });
        await this.cache.setKey(this.getDocKey(namespace, slug), docDetail);
      }
    }
    await this.cache.save();
  }

  async getDocDetailByRules(): Promise<DocDetailResult[]> {
    const curRepoList = await this.getRepoList({ user: this.user.login });
    const showList = [];
    const docParamsMap: DocParamsMap = await this.cache.getKey('map');
    for (const { repo: cacheRepo, slugList } of docParamsMap.values()) {
      const curRepo = curRepoList.find(
        curRepo => curRepo.name === cacheRepo.name
      );
      if (cacheRepo.content_updated_at === curRepo.content_updated_at) {
        for (const slug of slugList) {
          showList.push(
            await this.cache.getKey(this.getDocKey(cacheRepo.namespace, slug))
          );
        }
      } else {
        const curDocList = await this.getDocList({
          namespace: cacheRepo.namespace,
        });
        for (const slug of slugList) {
          const cacheDoc = await this.cache.getKey(
            this.getDocKey(cacheRepo.namespace, slug)
          );
          const curDoc = curDocList.find(
            curDoc => curDoc.slug === cacheDoc.slug
          );
          if (cacheDoc.content_updated_at === curDoc.content_updated_at) {
            showList.push(cacheDoc);
          } else {
            const docDetail = await this.getDocDetail({
              namespace: cacheRepo.namespace,
              slug,
            });
            await this.cache.setKey(
              this.getDocKey(cacheRepo.namespace, slug),
              docDetail
            );
          }
        }
      }
    }
    await this.cache.save();
    return showList;
  }
}
