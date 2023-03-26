## 如何使用？
#### 1、创建.env，填入yuque密钥
+ 将根目录.env.template文件重命名为.env
+ 填入YUQUE_SECRET_KEY，详情见 [官方文档](https://www.yuque.com/yuque/developer/api#785a3731)

#### 2、选择希望提取的文档
+ 在yuque.config.js中填入希望提取文档的规则
+ 如希望提取某一文档的全部文档，可如下填写
```js
module.exports = {
  repos: [
    {
      name: '知识库1',
    },
    {
      name: '知识库2',
    },
  ],
};
```

#### 3、部署
+ 安装依赖：`` npm i ``or `` pnpm i ``or `` yarn ``
+ 本地部署：``npm run dev``
+ 云部署：``npm run deploy`
  > 如遇到问题详见下文档
  + 发布到[阿里云](https://www.midwayjs.org/docs/serverless/aliyun_faas#%E5%8F%91%E5%B8%83%E5%88%B0%E9%98%BF%E9%87%8C%E4%BA%91)
    + ![](https://fastly.jsdelivr.net/gh/zangguojun/tuchuang@main/16798127817991679812781016.png)
  + 发布到[腾讯云](https://www.midwayjs.org/docs/serverless/tencent_faas#%E5%8F%91%E5%B8%83%E5%88%B0%E8%85%BE%E8%AE%AF%E4%BA%91-scf)

## TODO
-[ ] 使用文件缓存
