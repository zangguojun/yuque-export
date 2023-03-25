import { MidwayConfig } from '@midwayjs/core';

export default {
  // if use http/API Gateway, please set keys here.
  // keys: '1678615417815_9050',
  yuqueSecretKey: process.env.YUQUE_SECRET_KEY,
} as MidwayConfig;
