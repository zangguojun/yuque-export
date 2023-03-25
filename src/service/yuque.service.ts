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
} from '../interface/yuque.interface';
const config = require('../../yuque.config.js');

@Provide()
@Scope(ScopeEnum.Singleton)
export class yuqueService implements IYuqueService {
  @Inject()
  ctx: Context;

  @Inject('lodash')
  lodash;

  @Config('yuqueSecretKey')
  secretKey;

  client: any;
  user: any;

  @Init()
  async initMethod() {
    this.client = new SDK({ token: this.secretKey });
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

  async getDocDetailByRules(): Promise<DocDetailResult[]> {
    const userInfo = await this.getUser();
    const repoList = await this.getRepoList({ user: userInfo.login });
    const { repos } = config;
    const docParamsList = [];
    for (const repo of repos) {
      const cur = repoList.find(r => r.name === repo.name);
      if (!repo.name || !cur) return;
      const { namespace } = cur;
      const docList = await this.getDocList({ namespace });
      for (const doc of docList) {
        const { title, slug } = doc;
        let isSave = true;
        if (Array.isArray(repo.includes) && repo.includes.length !== 0) {
          const isIncludes = repo.includes.some(it => {
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
        if (Array.isArray(repo.excludes) && repo.excludes.length !== 0) {
          const isExclude = !repo.excludes.some(it => {
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
        isSave && docParamsList.push({ namespace, slug });
      }
    }

    const docDetailList = [];
    for (const docParams of docParamsList) {
      const docDetail = await this.getDocDetail(docParams);
      docDetailList.push(docDetail);
    }
    return docDetailList;
  }
}
