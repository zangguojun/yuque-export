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

#### 4、调用
部署完毕后，获取api的url，得到的数据结构如下
```json5
[
  {
    "id": 81164360,
    "slug": "cmdwus",
    "title": "layout.tsx",
    "book_id": 506088,
    "book": {
      "id": 506088,
      "type": "Book",
      "slug": "kb",
      "name": "Study",
      "user_id": 535026,
      "description": "可用于学习笔记、周报、项目文档等场景",
      "creator_id": 0,
      "public": 0,
      "items_count": 16,
      "likes_count": 0,
      "watches_count": 0,
      "content_updated_at": "2023-02-05T15:36:01.612Z",
      "updated_at": "2023-02-05T15:36:02.000Z",
      "created_at": "2019-10-15T14:55:13.000Z",
      "namespace": "zangguojun/kb",
      "user": {
        "id": 535026,
        "type": "User",
        "login": "zangguojun",
        "name": "初懵",
        "description": null,
        "avatar_url": "https://cdn.nlark.com/yuque/0/2019/jpeg/anonymous/1571150628897-9562ffeb-851a-4a47-8a40-be6f7263e703.jpeg",
        "books_count": 12,
        "public_books_count": 0,
        "followers_count": 0,
        "following_count": 0,
        "created_at": "2019-10-15T14:54:52.000Z",
        "updated_at": "2023-03-12T09:29:21.000Z",
        "_serializer": "v2.user"
      },
      "_serializer": "v2.book"
    },
    "user_id": 535026,
    "creator": {
      "id": 535026,
      "type": "User",
      "login": "zangguojun",
      "name": "初懵",
      "description": null,
      "avatar_url": "https://cdn.nlark.com/yuque/0/2019/jpeg/anonymous/1571150628897-9562ffeb-851a-4a47-8a40-be6f7263e703.jpeg",
      "books_count": 12,
      "public_books_count": 0,
      "followers_count": 0,
      "following_count": 0,
      "created_at": "2019-10-15T14:54:52.000Z",
      "updated_at": "2023-03-12T09:29:21.000Z",
      "_serializer": "v2.user"
    },
    "format": "lake",
    "body": "",
    "body_draft": "",
    "body_html": "",
    "body_lake": "",
    "body_draft_lake": "",
    "public": 0,
    "status": 0,
    "view_status": 0,
    "read_status": 0,
    "likes_count": 0,
    "comments_count": 0,
    "content_updated_at": "2022-06-22T09:50:38.000Z",
    "deleted_at": null,
    "created_at": "2022-06-22T09:50:30.000Z",
    "updated_at": "2022-06-22T09:50:38.000Z",
    "published_at": null,
    "first_published_at": null,
    "word_count": 0,
    "cover": null,
    "description": null,
    "custom_description": null,
    "hits": 0,
    "_serializer": "v2.doc_detail"
  },
  {
    "id": 81103645,
    "slug": "smg5cc",
    "title": "options.tsx",
    "book_id": 506088,
    "book": {
      "id": 506088,
      "type": "Book",
      "slug": "kb",
      "name": "Study",
      "user_id": 535026,
      "description": "可用于学习笔记、周报、项目文档等场景",
      "creator_id": 0,
      "public": 0,
      "items_count": 16,
      "likes_count": 0,
      "watches_count": 0,
      "content_updated_at": "2023-02-05T15:36:01.612Z",
      "updated_at": "2023-02-05T15:36:02.000Z",
      "created_at": "2019-10-15T14:55:13.000Z",
      "namespace": "zangguojun/kb",
      "user": {
        "id": 535026,
        "type": "User",
        "login": "zangguojun",
        "name": "初懵",
        "description": null,
        "avatar_url": "https://cdn.nlark.com/yuque/0/2019/jpeg/anonymous/1571150628897-9562ffeb-851a-4a47-8a40-be6f7263e703.jpeg",
        "books_count": 12,
        "public_books_count": 0,
        "followers_count": 0,
        "following_count": 0,
        "created_at": "2019-10-15T14:54:52.000Z",
        "updated_at": "2023-03-12T09:29:21.000Z",
        "_serializer": "v2.user"
      },
      "_serializer": "v2.book"
    },
    "user_id": 535026,
    "creator": {
      "id": 535026,
      "type": "User",
      "login": "zangguojun",
      "name": "初懵",
      "description": null,
      "avatar_url": "https://cdn.nlark.com/yuque/0/2019/jpeg/anonymous/1571150628897-9562ffeb-851a-4a47-8a40-be6f7263e703.jpeg",
      "books_count": 12,
      "public_books_count": 0,
      "followers_count": 0,
      "following_count": 0,
      "created_at": "2019-10-15T14:54:52.000Z",
      "updated_at": "2023-03-12T09:29:21.000Z",
      "_serializer": "v2.user"
    },
    "format": "lake",
    "body": "",
    "body_draft": "",
    "body_html": "",
    "body_lake": "",
    "body_draft_lake": "",
    "public": 0,
    "status": 0,
    "view_status": 0,
    "read_status": 0,
    "likes_count": 0,
    "comments_count": 0,
    "content_updated_at": "2022-06-22T02:32:39.000Z",
    "deleted_at": null,
    "created_at": "2022-06-22T02:32:11.000Z",
    "updated_at": "2022-06-22T02:32:39.000Z",
    "published_at": null,
    "first_published_at": null,
    "word_count": 0,
    "cover": null,
    "description": null,
    "custom_description": null,
    "hits": 0,
    "_serializer": "v2.doc_detail"
  },
  {
    "id": 109802317,
    "slug": "lld0ybvaflrg7rel",
    "title": "dotenv-expand",
    "book_id": 35587432,
    "book": {
      "id": 35587432,
      "type": "Book",
      "slug": "ovl9xw",
      "name": "JavaScript源码学习",
      "user_id": 535026,
      "description": "测试",
      "creator_id": 535026,
      "public": 0,
      "items_count": 7,
      "likes_count": 0,
      "watches_count": 0,
      "content_updated_at": "2023-03-26T14:03:31.559Z",
      "updated_at": "2023-03-26T14:03:32.000Z",
      "created_at": "2022-12-18T16:34:21.000Z",
      "namespace": "zangguojun/ovl9xw",
      "user": {
        "id": 535026,
        "type": "User",
        "login": "zangguojun",
        "name": "初懵",
        "description": null,
        "avatar_url": "https://cdn.nlark.com/yuque/0/2019/jpeg/anonymous/1571150628897-9562ffeb-851a-4a47-8a40-be6f7263e703.jpeg",
        "books_count": 12,
        "public_books_count": 0,
        "followers_count": 0,
        "following_count": 0,
        "created_at": "2019-10-15T14:54:52.000Z",
        "updated_at": "2023-03-12T09:29:21.000Z",
        "_serializer": "v2.user"
      },
      "_serializer": "v2.book"
    },
    "user_id": 535026,
    "creator": {
      "id": 535026,
      "type": "User",
      "login": "zangguojun",
      "name": "初懵",
      "description": null,
      "avatar_url": "https://cdn.nlark.com/yuque/0/2019/jpeg/anonymous/1571150628897-9562ffeb-851a-4a47-8a40-be6f7263e703.jpeg",
      "books_count": 12,
      "public_books_count": 0,
      "followers_count": 0,
      "following_count": 0,
      "created_at": "2019-10-15T14:54:52.000Z",
      "updated_at": "2023-03-12T09:29:21.000Z",
      "_serializer": "v2.user"
    },
    "format": "lake",
    "body": "> 相关链接：\n> - \n\n<a name=\"jftde\"></a>\n### 学到了！\n> **dotenv-expand优先级**(从20行可以看出)**：**\n> `process.env`\u0000 > `defaultValue` > `config.parsed[configKey]`\u0000\n\n```javascript\n// 这是一个递归\nfunction _interpolate (envValue, environment, config) {\n  // 找最后一个$\n  const lastUnescapedDollarSignIndex = _searchLast(envValue, /(?!(?<=\\\\))\\$/g)\n  // 没有$就 return\n  if (lastUnescapedDollarSignIndex === -1) return envValue\n\n  // 从$开始截取直到最后\n  const rightMostGroup = envValue.slice(lastUnescapedDollarSignIndex)\n  // 正则匹配:$KEY、${KEY}、${KEY:-default} \n  // 不会匹配:\\$KEY\n  const matchGroup = /((?!(?<=\\\\))\\${?([\\w]+)(?::-([^}\\\\]*))?}?)/\n  const match = rightMostGroup.match(matchGroup)\n\n  if (match != null) {\n    const [, group, variableName, defaultValue] = match\n    // 递归\n    return _interpolate(\n      // 替换值（这里replace从最后开始更容易理解一些，但是实际效果相同）\n      envValue.replace(\n        group,\n        environment[variableName] ||\n          defaultValue ||\n          config.parsed[variableName] ||\n          ''\n      ),\n      environment,\n      config\n    )\n  }\n\n  return envValue\n}\n```\n",
    "body_draft": "",
    "body_html": "<!doctype html><div class=\"lake-content\" typography=\"classic\"><div class=\"ne-quote\"><p id=\"u220d5c70\" class=\"ne-p\"><span class=\"ne-text\">相关链接：</span></p><ul class=\"ne-ul\"><li id=\"u631be72b\"><span id=\"OJ3XF\" class=\"ne-bookmark-inline\"><a href=\"https://lxchuan12.gitee.io/dotenv/\" target=\"_blank\">https://lxchuan12.gitee.io/dotenv/</a></span></li></ul></div><h3 id=\"jftde\"><span class=\"ne-text\">学到了！</span></h3><div data-type=\"color5\" class=\"ne-alert\"><p id=\"udf7dcc84\" class=\"ne-p\"><strong><span class=\"ne-text\">dotenv-expand优先级</span></strong><span class=\"ne-text\">(从20行可以看出)</span><strong><span class=\"ne-text\">：</span></strong></p><p id=\"u850cdf1b\" class=\"ne-p\"><code class=\"ne-code\"><span class=\"ne-text\">process.env</span></code><span class=\"ne-text\">\u0000 &gt; </span><code class=\"ne-code\"><span class=\"ne-text\">defaultValue</span></code><span class=\"ne-text\"> &gt; </span><code class=\"ne-code\"><span class=\"ne-text\">config.parsed[configKey]</span></code><span class=\"ne-text\">\u0000</span></p></div><pre data-language=\"javascript\" id=\"xEarv\" class=\"ne-codeblock language-javascript\">// 这是一个递归\nfunction _interpolate (envValue, environment, config) {\n  // 找最后一个$\n  const lastUnescapedDollarSignIndex = _searchLast(envValue, /(?!(?&lt;=\\\\))\\$/g)\n  // 没有$就 return\n  if (lastUnescapedDollarSignIndex === -1) return envValue\n\n  // 从$开始截取直到最后\n  const rightMostGroup = envValue.slice(lastUnescapedDollarSignIndex)\n  // 正则匹配:$KEY、${KEY}、${KEY:-default} \n  // 不会匹配:\\$KEY\n  const matchGroup = /((?!(?&lt;=\\\\))\\${?([\\w]+)(?::-([^}\\\\]*))?}?)/\n  const match = rightMostGroup.match(matchGroup)\n\n  if (match != null) {\n    const [, group, variableName, defaultValue] = match\n    // 递归\n    return _interpolate(\n      // 替换值（这里replace从最后开始更容易理解一些，但是实际效果相同）\n      envValue.replace(\n        group,\n        environment[variableName] ||\n          defaultValue ||\n          config.parsed[variableName] ||\n          ''\n      ),\n      environment,\n      config\n    )\n  }\n\n  return envValue\n}</pre></div>",
    "body_lake": "<!doctype lake><meta name=\"doc-version\" content=\"1\" /><meta name=\"typography\" content=\"classic\" /><meta name=\"viewport\" content=\"adapt\" /><meta name=\"paragraphSpacing\" content=\"relax\" /><blockquote data-lake-id=\"u514ca572\" id=\"u514ca572\"><p data-lake-id=\"u220d5c70\" id=\"u220d5c70\"><span data-lake-id=\"u89b18ac8\" id=\"u89b18ac8\">相关链接：</span></p><ul list=\"ua89f6113\"><li fid=\"u9d6925a9\" data-lake-id=\"u631be72b\" id=\"u631be72b\"><card type=\"inline\" name=\"bookmarkInline\" value=\"data:%7B%22mode%22%3A%22title%22%2C%22src%22%3A%22https%3A%2F%2Flxchuan12.gitee.io%2Fdotenv%2F%22%2C%22text%22%3A%22https%3A%2F%2Flxchuan12.gitee.io%2Fdotenv%2F%22%2C%22detail%22%3A%7B%22icon%22%3A%22https%3A%2F%2Flxchuan12.gitee.io%2Ffavicon.ico%22%2C%22image%22%3A%22https%3A%2F%2Flxchuan12.gitee.io%2Fassets%2Fimg%2Fruochuan12-qrcode.188635d2.png%22%2C%22title%22%3A%22%E9%9D%A2%E8%AF%95%E5%AE%98%EF%BC%9A%E9%A1%B9%E7%9B%AE%E4%B8%AD%E5%B8%B8%E7%94%A8%E7%9A%84%20.env%20%E6%96%87%E4%BB%B6%E5%8E%9F%E7%90%86%E6%98%AF%E4%BB%80%E4%B9%88%EF%BC%9F%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%EF%BC%9F%20%7C%20%E8%8B%A5%E5%B7%9D%E7%9A%84%E5%8D%9A%E5%AE%A2%22%2C%22belong%22%3A%22%E8%8B%A5%E5%B7%9D%E7%9A%84%E5%8D%9A%E5%AE%A2%22%2C%22belong_url%22%3Anull%2C%22desc%22%3A%22%E8%8B%A5%E5%B7%9D%EF%BC%8C%E5%BE%AE%E4%BF%A1%E6%90%9C%E7%B4%A2%E3%80%8C%E8%8B%A5%E5%B7%9D%E8%A7%86%E9%87%8E%E3%80%8D%E5%85%B3%E6%B3%A8%E6%88%91%EF%BC%8C%E9%95%BF%E6%9C%9F%E4%BA%A4%E6%B5%81%E5%AD%A6%E4%B9%A0%E3%80%82%E5%86%99%E6%9C%89%E3%80%8A%E5%AD%A6%E4%B9%A0%E6%BA%90%E7%A0%81%E6%95%B4%E4%BD%93%E6%9E%B6%E6%9E%84%E7%B3%BB%E5%88%97%E3%80%8B%E3%80%82%E5%8C%85%E5%90%ABjquery%E6%BA%90%E7%A0%81%E3%80%81underscore%E6%BA%90%E7%A0%81%E3%80%81lodash%E6%BA%90%E7%A0%81%E3%80%81sentry%E6%BA%90%E7%A0%81%E3%80%81vuex%E6%BA%90%E7%A0%81%E3%80%81axios%E6%BA%90%E7%A0%81%E3%80%81koa%E6%BA%90%E7%A0%81%E3%80%81redux%E6%BA%90%E7%A0%81%E3%80%82%E5%89%8D%E7%AB%AF%E8%B7%AF%E4%B8%8A%EF%BC%8CPPT%E7%88%B1%E5%A5%BD%E8%80%85%EF%BC%8C%E6%89%80%E7%9F%A5%E7%94%9A%E5%B0%91%EF%BC%8C%E5%94%AF%E5%96%84%E5%AD%A6%E3%80%82%22%2C%22url%22%3A%22https%3A%2F%2Flxchuan12.gitee.io%2Fdotenv%2F%22%2C%22_serializer%22%3A%22web.editor_link_detail%22%7D%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22OJ3XF%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D\"></card></li></ul></blockquote><h3 data-lake-id=\"jftde\" id=\"jftde\"><span data-lake-id=\"u0daffbda\" id=\"u0daffbda\">学到了！</span></h3><blockquote data-lake-id=\"u68191013\" id=\"u68191013\" class=\"lake-alert lake-alert-color5\"><p data-lake-id=\"udf7dcc84\" id=\"udf7dcc84\"><strong><span data-lake-id=\"u367977bb\" id=\"u367977bb\">dotenv-expand优先级</span></strong><span data-lake-id=\"u1cd4da6e\" id=\"u1cd4da6e\">(从20行可以看出)</span><strong><span data-lake-id=\"u5453dcd5\" id=\"u5453dcd5\">：</span></strong></p><p data-lake-id=\"u850cdf1b\" id=\"u850cdf1b\"><code data-lake-id=\"u17663f44\" id=\"u17663f44\"><span data-lake-id=\"u36db162b\" id=\"u36db162b\">process.env</span></code><span data-lake-id=\"u87722629\" id=\"u87722629\">\u0000 &gt; </span><code data-lake-id=\"ue2735726\" id=\"ue2735726\"><span data-lake-id=\"ud1147fbf\" id=\"ud1147fbf\">defaultValue</span></code><span data-lake-id=\"uc6212022\" id=\"uc6212022\"> &gt; </span><code data-lake-id=\"ube04bba2\" id=\"ube04bba2\"><span data-lake-id=\"u5feb95a2\" id=\"u5feb95a2\">config.parsed[configKey]</span></code><span data-lake-id=\"u7da20d07\" id=\"u7da20d07\">\u0000</span></p></blockquote><card type=\"inline\" name=\"codeblock\" value=\"data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22%2F%2F%20%E8%BF%99%E6%98%AF%E4%B8%80%E4%B8%AA%E9%80%92%E5%BD%92%5Cnfunction%20_interpolate%20(envValue%2C%20environment%2C%20config)%20%7B%5Cn%20%20%2F%2F%20%E6%89%BE%E6%9C%80%E5%90%8E%E4%B8%80%E4%B8%AA%24%5Cn%20%20const%20lastUnescapedDollarSignIndex%20%3D%20_searchLast(envValue%2C%20%2F(%3F!(%3F%3C%3D%5C%5C%5C%5C))%5C%5C%24%2Fg)%5Cn%20%20%2F%2F%20%E6%B2%A1%E6%9C%89%24%E5%B0%B1%20return%5Cn%20%20if%20(lastUnescapedDollarSignIndex%20%3D%3D%3D%20-1)%20return%20envValue%5Cn%5Cn%20%20%2F%2F%20%E4%BB%8E%24%E5%BC%80%E5%A7%8B%E6%88%AA%E5%8F%96%E7%9B%B4%E5%88%B0%E6%9C%80%E5%90%8E%5Cn%20%20const%20rightMostGroup%20%3D%20envValue.slice(lastUnescapedDollarSignIndex)%5Cn%20%20%2F%2F%20%E6%AD%A3%E5%88%99%E5%8C%B9%E9%85%8D%3A%24KEY%E3%80%81%24%7BKEY%7D%E3%80%81%24%7BKEY%3A-default%7D%20%5Cn%20%20%2F%2F%20%E4%B8%8D%E4%BC%9A%E5%8C%B9%E9%85%8D%3A%5C%5C%24KEY%5Cn%20%20const%20matchGroup%20%3D%20%2F((%3F!(%3F%3C%3D%5C%5C%5C%5C))%5C%5C%24%7B%3F(%5B%5C%5Cw%5D%2B)(%3F%3A%3A-(%5B%5E%7D%5C%5C%5C%5C%5D*))%3F%7D%3F)%2F%5Cn%20%20const%20match%20%3D%20rightMostGroup.match(matchGroup)%5Cn%5Cn%20%20if%20(match%20!%3D%20null)%20%7B%5Cn%20%20%20%20const%20%5B%2C%20group%2C%20variableName%2C%20defaultValue%5D%20%3D%20match%5Cn%20%20%20%20%2F%2F%20%E9%80%92%E5%BD%92%5Cn%20%20%20%20return%20_interpolate(%5Cn%20%20%20%20%20%20%2F%2F%20%E6%9B%BF%E6%8D%A2%E5%80%BC%EF%BC%88%E8%BF%99%E9%87%8Creplace%E4%BB%8E%E6%9C%80%E5%90%8E%E5%BC%80%E5%A7%8B%E6%9B%B4%E5%AE%B9%E6%98%93%E7%90%86%E8%A7%A3%E4%B8%80%E4%BA%9B%EF%BC%8C%E4%BD%86%E6%98%AF%E5%AE%9E%E9%99%85%E6%95%88%E6%9E%9C%E7%9B%B8%E5%90%8C%EF%BC%89%5Cn%20%20%20%20%20%20envValue.replace(%5Cn%20%20%20%20%20%20%20%20group%2C%5Cn%20%20%20%20%20%20%20%20environment%5BvariableName%5D%20%7C%7C%5Cn%20%20%20%20%20%20%20%20%20%20defaultValue%20%7C%7C%5Cn%20%20%20%20%20%20%20%20%20%20config.parsed%5BvariableName%5D%20%7C%7C%5Cn%20%20%20%20%20%20%20%20%20%20''%5Cn%20%20%20%20%20%20)%2C%5Cn%20%20%20%20%20%20environment%2C%5Cn%20%20%20%20%20%20config%5Cn%20%20%20%20)%5Cn%20%20%7D%5Cn%5Cn%20%20return%20envValue%5Cn%7D%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%24%E6%9B%BF%E6%8D%A2%E5%AD%97%E7%AC%A6%E6%A0%B8%E5%BF%83%E9%80%BB%E8%BE%91%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Github%20Light%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22xEarv%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D\"></card>",
    "body_draft_lake": "",
    "public": 1,
    "status": 1,
    "view_status": 0,
    "read_status": 1,
    "likes_count": 0,
    "comments_count": 0,
    "content_updated_at": "2022-12-20T16:14:40.000Z",
    "deleted_at": null,
    "created_at": "2022-12-19T14:45:40.000Z",
    "updated_at": "2022-12-20T16:14:40.000Z",
    "published_at": "2022-12-20T16:14:40.000Z",
    "first_published_at": "2022-12-19T14:46:06.460Z",
    "word_count": 171,
    "cover": null,
    "description": "相关链接：https://lxchuan12.gitee.io/dotenv/学到了！dotenv-expand优先级(从20行可以看出)：process.env\u0000 > defaultValue > config.parsed[configKey]\u0000// 这是一个递归 function _in...",
    "custom_description": null,
    "hits": 0,
    "_serializer": "v2.doc_detail"
  },
  {
    "id": 109722060,
    "slug": "uo8gekv68ym1gwdl",
    "title": "dotenv",
    "book_id": 35587432,
    "book": {
      "id": 35587432,
      "type": "Book",
      "slug": "ovl9xw",
      "name": "JavaScript源码学习",
      "user_id": 535026,
      "description": "测试",
      "creator_id": 535026,
      "public": 0,
      "items_count": 7,
      "likes_count": 0,
      "watches_count": 0,
      "content_updated_at": "2023-03-26T14:03:31.559Z",
      "updated_at": "2023-03-26T14:03:32.000Z",
      "created_at": "2022-12-18T16:34:21.000Z",
      "namespace": "zangguojun/ovl9xw",
      "user": {
        "id": 535026,
        "type": "User",
        "login": "zangguojun",
        "name": "初懵",
        "description": null,
        "avatar_url": "https://cdn.nlark.com/yuque/0/2019/jpeg/anonymous/1571150628897-9562ffeb-851a-4a47-8a40-be6f7263e703.jpeg",
        "books_count": 12,
        "public_books_count": 0,
        "followers_count": 0,
        "following_count": 0,
        "created_at": "2019-10-15T14:54:52.000Z",
        "updated_at": "2023-03-12T09:29:21.000Z",
        "_serializer": "v2.user"
      },
      "_serializer": "v2.book"
    },
    "user_id": 535026,
    "creator": {
      "id": 535026,
      "type": "User",
      "login": "zangguojun",
      "name": "初懵",
      "description": null,
      "avatar_url": "https://cdn.nlark.com/yuque/0/2019/jpeg/anonymous/1571150628897-9562ffeb-851a-4a47-8a40-be6f7263e703.jpeg",
      "books_count": 12,
      "public_books_count": 0,
      "followers_count": 0,
      "following_count": 0,
      "created_at": "2019-10-15T14:54:52.000Z",
      "updated_at": "2023-03-12T09:29:21.000Z",
      "_serializer": "v2.user"
    },
    "format": "lake",
    "body": "> 相关链接：\n> - \n\n<a name=\"HQ17Q\"></a>\n### 学到了！\n```javascript\nconst re = /^dotenv_config_(encoding|path|debug)=(.+)$/\n\nmodule.exports = function optionMatcher (args) {\n  return args.reduce(function (acc, cur) {\n    const matches = cur.match(re)\n    if (matches) {\n      acc[matches[1]] = matches[2]\n    }\n    return acc\n  }, {})\n}\n// 输入\n[\n  'dotenv_config_encoding=utf8',\n  'dotenv_config_path=/custom/path/to/your/env/vars',\n  'dotenv_config_debug=true',\n  'dotenv_config_override=true'\n]\n// 输入\n{\n  dotenv_config_encoding: 'utf8',\n  dotenv_config_path: '/custom/path/to/your/env/vars',\n  dotenv_config_debug: 'true',\n  dotenv_config_override: 'true'\n}\n```\n```javascript\nconst options = {}\n\nif (process.env.DOTENV_CONFIG_ENCODING != null) {\n  options.encoding = process.env.DOTENV_CONFIG_ENCODING\n}\n\nif (process.env.DOTENV_CONFIG_PATH != null) {\n  options.path = process.env.DOTENV_CONFIG_PATH\n}\n\nif (process.env.DOTENV_CONFIG_DEBUG != null) {\n  options.debug = process.env.DOTENV_CONFIG_DEBUG\n}\n\nif (process.env.DOTENV_CONFIG_OVERRIDE != null) {\n  options.override = process.env.DOTENV_CONFIG_OVERRIDE\n}\n\nmodule.exports = options\n```\n\n\n",
    "body_draft": "",
    "body_html": "<!doctype html><div class=\"lake-content\" typography=\"classic\"><div class=\"ne-quote\"><p id=\"u4455bc24\" class=\"ne-p\"><span class=\"ne-text\">相关链接：</span></p><ul class=\"ne-ul\"><li id=\"u16086ede\"><span id=\"Wz1Re\" class=\"ne-bookmark-inline\"><a href=\"https://lxchuan12.gitee.io/dotenv/\" target=\"_blank\">https://lxchuan12.gitee.io/dotenv/</a></span></li></ul></div><h3 id=\"HQ17Q\"><span class=\"ne-text\">学到了！</span></h3><pre data-language=\"javascript\" id=\"RbpA9\" class=\"ne-codeblock language-javascript\">const re = /^dotenv_config_(encoding|path|debug)=(.+)$/\n\nmodule.exports = function optionMatcher (args) {\n  return args.reduce(function (acc, cur) {\n    const matches = cur.match(re)\n    if (matches) {\n      acc[matches[1]] = matches[2]\n    }\n    return acc\n  }, {})\n}\n// 输入\n[\n  'dotenv_config_encoding=utf8',\n  'dotenv_config_path=/custom/path/to/your/env/vars',\n  'dotenv_config_debug=true',\n  'dotenv_config_override=true'\n]\n// 输入\n{\n  dotenv_config_encoding: 'utf8',\n  dotenv_config_path: '/custom/path/to/your/env/vars',\n  dotenv_config_debug: 'true',\n  dotenv_config_override: 'true'\n}</pre><pre data-language=\"javascript\" id=\"u4b1q\" class=\"ne-codeblock language-javascript\">const options = {}\n\nif (process.env.DOTENV_CONFIG_ENCODING != null) {\n  options.encoding = process.env.DOTENV_CONFIG_ENCODING\n}\n\nif (process.env.DOTENV_CONFIG_PATH != null) {\n  options.path = process.env.DOTENV_CONFIG_PATH\n}\n\nif (process.env.DOTENV_CONFIG_DEBUG != null) {\n  options.debug = process.env.DOTENV_CONFIG_DEBUG\n}\n\nif (process.env.DOTENV_CONFIG_OVERRIDE != null) {\n  options.override = process.env.DOTENV_CONFIG_OVERRIDE\n}\n\nmodule.exports = options</pre><p id=\"ubb8f8dbc\" class=\"ne-p\"><br></p><p id=\"u9d195b12\" class=\"ne-p\"><br></p></div>",
    "body_lake": "<!doctype lake><meta name=\"doc-version\" content=\"1\" /><meta name=\"viewport\" content=\"fixed\" /><meta name=\"typography\" content=\"classic\" /><meta name=\"paragraphSpacing\" content=\"relax\" /><blockquote data-lake-id=\"u640cd900\" id=\"u640cd900\"><p data-lake-id=\"u4455bc24\" id=\"u4455bc24\"><span data-lake-id=\"u091a0a08\" id=\"u091a0a08\">相关链接：</span></p><ul list=\"u29e09ca7\"><li fid=\"u9d6925a9\" data-lake-id=\"u16086ede\" id=\"u16086ede\"><card type=\"inline\" name=\"bookmarkInline\" value=\"data:%7B%22mode%22%3A%22title%22%2C%22src%22%3A%22https%3A%2F%2Flxchuan12.gitee.io%2Fdotenv%2F%22%2C%22text%22%3A%22https%3A%2F%2Flxchuan12.gitee.io%2Fdotenv%2F%22%2C%22detail%22%3A%7B%22icon%22%3A%22https%3A%2F%2Flxchuan12.gitee.io%2Ffavicon.ico%22%2C%22image%22%3A%22https%3A%2F%2Flxchuan12.gitee.io%2Fassets%2Fimg%2Fruochuan12-qrcode.188635d2.png%22%2C%22title%22%3A%22%E9%9D%A2%E8%AF%95%E5%AE%98%EF%BC%9A%E9%A1%B9%E7%9B%AE%E4%B8%AD%E5%B8%B8%E7%94%A8%E7%9A%84%20.env%20%E6%96%87%E4%BB%B6%E5%8E%9F%E7%90%86%E6%98%AF%E4%BB%80%E4%B9%88%EF%BC%9F%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%EF%BC%9F%20%7C%20%E8%8B%A5%E5%B7%9D%E7%9A%84%E5%8D%9A%E5%AE%A2%22%2C%22belong%22%3A%22%E8%8B%A5%E5%B7%9D%E7%9A%84%E5%8D%9A%E5%AE%A2%22%2C%22belong_url%22%3Anull%2C%22desc%22%3A%22%E8%8B%A5%E5%B7%9D%EF%BC%8C%E5%BE%AE%E4%BF%A1%E6%90%9C%E7%B4%A2%E3%80%8C%E8%8B%A5%E5%B7%9D%E8%A7%86%E9%87%8E%E3%80%8D%E5%85%B3%E6%B3%A8%E6%88%91%EF%BC%8C%E9%95%BF%E6%9C%9F%E4%BA%A4%E6%B5%81%E5%AD%A6%E4%B9%A0%E3%80%82%E5%86%99%E6%9C%89%E3%80%8A%E5%AD%A6%E4%B9%A0%E6%BA%90%E7%A0%81%E6%95%B4%E4%BD%93%E6%9E%B6%E6%9E%84%E7%B3%BB%E5%88%97%E3%80%8B%E3%80%82%E5%8C%85%E5%90%ABjquery%E6%BA%90%E7%A0%81%E3%80%81underscore%E6%BA%90%E7%A0%81%E3%80%81lodash%E6%BA%90%E7%A0%81%E3%80%81sentry%E6%BA%90%E7%A0%81%E3%80%81vuex%E6%BA%90%E7%A0%81%E3%80%81axios%E6%BA%90%E7%A0%81%E3%80%81koa%E6%BA%90%E7%A0%81%E3%80%81redux%E6%BA%90%E7%A0%81%E3%80%82%E5%89%8D%E7%AB%AF%E8%B7%AF%E4%B8%8A%EF%BC%8CPPT%E7%88%B1%E5%A5%BD%E8%80%85%EF%BC%8C%E6%89%80%E7%9F%A5%E7%94%9A%E5%B0%91%EF%BC%8C%E5%94%AF%E5%96%84%E5%AD%A6%E3%80%82%22%2C%22url%22%3A%22https%3A%2F%2Flxchuan12.gitee.io%2Fdotenv%2F%22%2C%22_serializer%22%3A%22web.editor_link_detail%22%7D%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22Wz1Re%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D\"></card></li></ul></blockquote><h3 data-lake-id=\"HQ17Q\" id=\"HQ17Q\"><span data-lake-id=\"u24037bd5\" id=\"u24037bd5\">学到了！</span></h3><card type=\"inline\" name=\"codeblock\" value=\"data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22const%20re%20%3D%20%2F%5Edotenv_config_(encoding%7Cpath%7Cdebug)%3D(.%2B)%24%2F%5Cn%5Cnmodule.exports%20%3D%20function%20optionMatcher%20(args)%20%7B%5Cn%20%20return%20args.reduce(function%20(acc%2C%20cur)%20%7B%5Cn%20%20%20%20const%20matches%20%3D%20cur.match(re)%5Cn%20%20%20%20if%20(matches)%20%7B%5Cn%20%20%20%20%20%20acc%5Bmatches%5B1%5D%5D%20%3D%20matches%5B2%5D%5Cn%20%20%20%20%7D%5Cn%20%20%20%20return%20acc%5Cn%20%20%7D%2C%20%7B%7D)%5Cn%7D%5Cn%2F%2F%20%E8%BE%93%E5%85%A5%5Cn%5B%5Cn%20%20'dotenv_config_encoding%3Dutf8'%2C%5Cn%20%20'dotenv_config_path%3D%2Fcustom%2Fpath%2Fto%2Fyour%2Fenv%2Fvars'%2C%5Cn%20%20'dotenv_config_debug%3Dtrue'%2C%5Cn%20%20'dotenv_config_override%3Dtrue'%5Cn%5D%5Cn%2F%2F%20%E8%BE%93%E5%85%A5%5Cn%7B%5Cn%20%20dotenv_config_encoding%3A%20'utf8'%2C%5Cn%20%20dotenv_config_path%3A%20'%2Fcustom%2Fpath%2Fto%2Fyour%2Fenv%2Fvars'%2C%5Cn%20%20dotenv_config_debug%3A%20'true'%2C%5Cn%20%20dotenv_config_override%3A%20'true'%5Cn%7D%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Atrue%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%E4%B8%80%E3%80%81%E6%AD%A3%E5%88%99%E5%A4%84%E7%90%86cli%20option%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Github%20Light%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22RbpA9%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D\"></card><card type=\"inline\" name=\"codeblock\" value=\"data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22const%20options%20%3D%20%7B%7D%5Cn%5Cnif%20(process.env.DOTENV_CONFIG_ENCODING%20!%3D%20null)%20%7B%5Cn%20%20options.encoding%20%3D%20process.env.DOTENV_CONFIG_ENCODING%5Cn%7D%5Cn%5Cnif%20(process.env.DOTENV_CONFIG_PATH%20!%3D%20null)%20%7B%5Cn%20%20options.path%20%3D%20process.env.DOTENV_CONFIG_PATH%5Cn%7D%5Cn%5Cnif%20(process.env.DOTENV_CONFIG_DEBUG%20!%3D%20null)%20%7B%5Cn%20%20options.debug%20%3D%20process.env.DOTENV_CONFIG_DEBUG%5Cn%7D%5Cn%5Cnif%20(process.env.DOTENV_CONFIG_OVERRIDE%20!%3D%20null)%20%7B%5Cn%20%20options.override%20%3D%20process.env.DOTENV_CONFIG_OVERRIDE%5Cn%7D%5Cn%5Cnmodule.exports%20%3D%20options%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Atrue%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%E4%BA%8C%E3%80%81if%20%E5%A4%84%E7%90%86env%20option%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Github%20Light%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22u4b1q%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D\"></card><p data-lake-id=\"ubb8f8dbc\" id=\"ubb8f8dbc\"><br></p><p data-lake-id=\"u9d195b12\" id=\"u9d195b12\"><br></p>",
    "body_draft_lake": "",
    "public": 1,
    "status": 1,
    "view_status": 0,
    "read_status": 1,
    "likes_count": 0,
    "comments_count": 0,
    "content_updated_at": "2023-03-26T11:11:48.000Z",
    "deleted_at": null,
    "created_at": "2022-12-18T16:46:13.000Z",
    "updated_at": "2023-03-26T11:11:48.000Z",
    "published_at": "2023-03-26T11:11:48.000Z",
    "first_published_at": "2022-12-18T16:48:28.015Z",
    "word_count": 106,
    "cover": null,
    "description": "相关链接：https://lxchuan12.gitee.io/dotenv/学到了！const re = /^dotenv_config_(encoding|path|debug)=(.+)$/  module.exports = function optionMatcher (args) ...",
    "custom_description": null,
    "hits": 0,
    "_serializer": "v2.doc_detail"
  }
]
```
> 获取body即为Markdown结构，可使用[marked](https://github.com/markedjs/marked)、[markdown-it](https://github.com/markdown-it/markdown-it)、[remark](https://github.com/remarkjs/remark)等渲染器进行渲染

## TODO
-[X] 使用文件缓存
  + 已于20230326支持文件缓存(.yuque)
  + 对于在yuque.config.js中所包含的文档过多时(> 100)
    + 可先在本地部署时请求``http://127.0.0.1:7001``，使其生成.yuque缓存文件
    + 优点：避免部署serveless超时，且首次请求的响应速度更快
