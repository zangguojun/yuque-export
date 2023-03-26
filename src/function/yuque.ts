import {
  Provide,
  Inject,
  ServerlessTrigger,
  ServerlessTriggerType,
} from '@midwayjs/core';
import { Context } from '@midwayjs/faas';
import IYuqueService from '../interface/yuque.interface';

@Provide()
export class YuqueHTTPService {
  @Inject()
  ctx: Context;

  @Inject('yuqueService')
  yuque: IYuqueService;

  @ServerlessTrigger(ServerlessTriggerType.HTTP, {
    path: '/',
    method: 'get',
  })
  async handleRule() {
    return this.yuque.getDocDetailByRules();
  }
}
