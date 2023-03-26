export type User = {
  id: number;
  login: string;
  [key: string]: any;
};

export type GroupListParams = {
  [key in 'id' | 'login']?: User[key];
};

export type RepoListParams = {
  user?: string;
  group?: string;
  data?: { type?: 'all' | 'Book' | 'Design'; limit?: number };
};

export type RepoDetailResult = {
  namespace: string;
  content_updated_at: string;
  updated_at: string;
  [key: string]: any;
};

export type DocListParams = {
  namespace: string;
};

export type DocDetailResult = {
  id: number;
  slug: string;
  content_updated_at: string;
  updated_at: string;
  [key: string]: any;
};

export type DocDetailParams = {
  namespace: string;
  slug: string;
  data?: { raw?: 1 };
};

export type Type = 'all' | 'design' | 'book';

export type DocRuleType = 'StartsWith' | 'EndsWith' | 'RE';

export type DocRule =
  | string
  | {
      key: DocRuleType;
      value: any;
    };

export type RepoRule = {
  name: string;
  includes: DocRule[];
};

export type DetailByRulesParams = {
  repo: Type | RepoRule[];
};

export type DocParamsMap = Map<
  string,
  { repo: RepoDetailResult; slugList: string[] }
>;

export default interface IYuqueService {
  getUser(): Promise<User>;
  getGroupList(params: GroupListParams): Promise<object[]>;
  getRepoList(params: RepoListParams): Promise<RepoDetailResult[]>;
  getDocList(params: DocListParams): Promise<DocDetailResult[]>;
  getDocDetail(params: DocDetailParams): Promise<DocDetailResult>;
  getDocDetailByRules(): Promise<DocDetailResult[]>;
}
