import { Configuration, ILifeCycle, IMidwayContainer } from '@midwayjs/core';
import * as faas from '@midwayjs/faas';
import { join } from 'path';
import * as dotenv from 'dotenv';
import * as lodash from 'lodash';

dotenv.config();

@Configuration({
  imports: [faas],
  importConfigs: [join(__dirname, 'config')],
  conflictCheck: true,
})
export class ContainerLifeCycle implements ILifeCycle {
  async onReady(applicationContext: IMidwayContainer) {
    applicationContext.registerObject('lodash', lodash);
  }
}
