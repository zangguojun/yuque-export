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

  async getDocDetailCache(
    params: RepoDetailResult[]
  ): Promise<DocDetailResult[]> {
    return this.client.docs.get();
  }

  async getDocDetailByRules(
    params: DocDetailParams
  ): Promise<DocDetailResult[]> {
    const userInfo = await this.getUser();
    const repoList = await this.getRepoList({ user: userInfo.login });
    const { repos } = config;
    const docSlugList = [];
    for (const repo of repos) {
      if (!repo.name || repoList.every(it => it.name !== repo.name)) return;
      const docList = await this.getDocList({ namespace: repo.name });
      for (const doc of docList) {
        const { name: docName, slug } = doc;
        let isSave = true;
        if (Array.isArray(repo.includes)) {
          isSave = repo.includes.some(it => {
            if (this.lodash.isString(it) && docName === it) return true;
            if (this.lodash.isObject(it) && docName?.[it.key](it)) return true;
            return false;
          });
        }
        if (Array.isArray(repo.excludes)) {
          isSave = !repo.includes.every(it => {
            if (this.lodash.isString(it) && docName === it) return false;
            if (this.lodash.isObject(it) && docName?.[it.key](it)) return false;
            return true;
          });
        }
        isSave && docSlugList.push(slug);
      }
    }

    const docDetailList = [];
    for (const docSlug of docSlugList) {
      const docDetail = await this.getDocList({ namespace: docSlug });
      docDetailList.push(docDetail);
    }
    return docDetailList;
  }
}
