import { createApp, close } from '@midwayjs/mock';
import * as ServerlessApp from '@midwayjs/serverless-app';
import { yuqueService } from "../../src/service/yuque.service";
import { User } from "../../src/interface/yuque.interface";

describe('test/yueque.test.ts', () => {

  let app: ServerlessApp.Application, service: yuqueService, user: User, repos, docs;

  beforeAll(async () => {
    app = await createApp<ServerlessApp.Framework>();
    service = await app.getApplicationContext().getAsync<yuqueService>(yuqueService);
  });

  afterAll(async () => {
    await close(app);
  });

  it('should getUser & confirm id', async () => {
    user = await service.getUser()
    expect(user.type).toEqual('User');
  });

  it('should getGroupList by user & confirm length', async () => {
    const result = await service.getGroupList({ login: user?.login })
    expect(result.length).toBeGreaterThanOrEqual(0);
  });

  it('should getRepoList by user & confirm length', async () => {
    repos = await service.getRepoList({
      user: user?.login,
      data: { type: 'all' }
    })
    console.log("🚀~ 34  repos", repos);
    expect(repos.length).toBeGreaterThanOrEqual(1);
  });

  it('should getDocList by user & confirm length', async () => {
    docs = await service.getDocList({ namespace: repos[0]?.namespace })
    console.log("🚀~ 40  docs", docs);
    expect(docs.length).toBeGreaterThanOrEqual(1);
  });

  it('should getDocList by user & confirm length', async () => {
    const params = {
      namespace: repos[0]?.namespace, slug: docs[1]?.slug
    }
    const lakeResult = await service.getDocDetail(params)
    expect(lakeResult.id).not.toBeNull();
    expect(lakeResult.body_draft).toEqual('');
    console.log("🚀~ 51  lakeResult", lakeResult);
    const result = await service.getDocDetail({ ...params, data: { raw: 1  } })
    expect(result.id).not.toBeNull();
    expect(result.body_draft).not.toEqual('');
  });

});
