module.exports = {
  repos: [
    {
      // 特定知识库，默认提取全部文章
      name: 'xxx',
      // 可选，支持包含选定文章
      includes: [
        // 所选择文章名称
        '',
        // 可选，key支持 StartsWith（以xx开头）、EndsWith（以xx结尾）、RE（正则表达式）
        {
          key: 'startsWith',
          value: '0',
        },
        {
          key: 'endsWith',
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
