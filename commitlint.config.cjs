module.exports = {
  // 继承 '@commitlint/config-conventional' 预设
  extends: ['@commitlint/config-conventional'],

  // 自定义规则
  rules: {
    // 提交信息主体（body）前需要有一个空行
    'body-leading-blank': [1, 'always'],

    // 提交信息主体（body）每行的最大长度为 100 个字符
    'body-max-line-length': [2, 'always', 100],

    // 提交信息脚注（footer）前需要有一个空行
    'footer-leading-blank': [1, 'always'],

    // 提交信息脚注（footer）每行的最大长度为 100 个字符
    'footer-max-line-length': [2, 'always', 100],

    // 提交信息标题（header）的最大长度为 100 个字符
    'header-max-length': [2, 'always', 100],

    // 提交信息的范围（scope）必须为小写
    'scope-case': [2, 'always', 'lower-case'],

    // 关闭对提交信息主题（subject）大小写的检查
    'subject-case': [0],

    // 提交信息主题（subject）不能为空
    'subject-empty': [2, 'never'],

    // 提交信息主题（subject）不能以句号结尾
    'subject-full-stop': [2, 'never', '.'],

    // 提交信息类型（type）必须为小写
    'type-case': [2, 'always', 'lower-case'],

    // 提交信息类型（type）不能为空
    'type-empty': [2, 'never'],

    // 提交信息类型（type）必须是以下之一
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能
        'fix', // 修复问题
        'docs', // 文档变更
        'style', // 代码格式变更（不影响代码运行）
        'test', // 添加或修改测试
        'refactor', // 代码重构（既不是新功能也不是修复 bug）
        'chore', // 杂务（构建过程或辅助工具的变动）
        'revert', // 回滚提交
      ],
    ],
  },
};
