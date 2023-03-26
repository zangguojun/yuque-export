import { Configuration, ILifeCycle, IMidwayContainer } from '@midwayjs/core';
import { join, resolve } from 'path';
import * as faas from '@midwayjs/faas';
import * as dotenv from 'dotenv';
import * as lodash from 'lodash';
import * as flatCache from 'flat-cache';

dotenv.config();

@Configuration({
  imports: [faas],
  importConfigs: [join(__dirname, 'config')],
  conflictCheck: true,
})
export class ContainerLifeCycle implements ILifeCycle {
  async onReady(applicationContext: IMidwayContainer) {
    applicationContext.registerObject('lodash', lodash);
    const cache = flatCache.load(
      'yuque',
      resolve(join(__dirname, '..', '.yuque'))
    );
    applicationContext.registerObject('cache', cache);
  }
}
