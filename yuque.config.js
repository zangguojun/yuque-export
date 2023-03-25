module.exports = {
  // 仓库类型，Book - 文库，Design - 设计稿，默认为all
  // 暂不支持指定类型
  // type: 'all' || 'design' || 'Book',
  repos: [
    {
      // 特定知识库，默认提取全部文章
      name: 'xxx',
      // 可选，支持包含选定文章
      includes: [
        // 默认为slug（即文章id，详见官方文档 https://www.yuque.com/yuque/developer/doc#684fb2c5）
        '',
        // 可选，key支持 StartsWith（以xx开头）、EndsWith（以xx结尾）、RE（正则表达式）
        {
          key: 'StartsWith',
          value: '总结',
        },
        {
          key: 'EndsWith',
          value: '日记',
        },
        {
          key: 'RE',
          value: /\d+、(.*?)+/,
        },
      ],
      // 可选，支持剔除选定文章。具体用法同includes
      excludes: [],
    },
  ],
};
