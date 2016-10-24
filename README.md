# dtfacotry
> Digital factory


# 初始化工程
```shell
   
   npm install -g cooking 
   
   npm install 
   
```
## 1. 技术栈

- vue2
- vuex2
- vue-resource
- echarts 
- jquery
- lodash
- elementUI
- postcss-salad
    
## 2. ESlint 代码风格

具体ESlint规则查看 [eslint中文规则](http://eslint.cn/docs/rules/)
具体配置 [elemefe lint规则](https://github.com/ElemeFE/eslint-config-elemefe/blob/master/rules.js)
```javascript
    
   // 强制 getter 和 setter 在对象中成对出现  
  'accessor-pairs': 2,
  
   // 强制数组方法的回调函数中有 return 语句
  'array-bracket-spacing': 0,
  
  'block-scoped-var': 0,
  
   // 大括号风格要求
  'brace-style': [2, '1tbs', { 'allowSingleLine': true }],
  
  
  'camelcase': 0,
  
  // 禁止使用拖尾逗号 
  'comma-dangle': [2, 'never'],
  
  // 强制在逗号前后使用一致的空格 逗号后空格 前不可以
  'comma-spacing': [2, { 'before': false, 'after': true }],
  
  // 逗号风格 (要求逗号放在数组元素、对象属性或变量声明之后，且在同一行)
  'comma-style': [2, 'last'],
  
  'complexity': 0,
  'computed-property-spacing': 0,
  'consistent-return': 0,
  'consistent-this': 0,
  'constructor-super': 2,

  'curly': [2, 'multi-line'],
  
  // swtich 必须有default
  'default-case': 0,
  
  // 要求点操作符和属性放在同一行。
  'dot-location': [2, 'property'],
  'dot-notation': 0,
  
  // 强制文件末尾至少保留一行空行
  'eol-last': 2,
  
  // 要求使用 === 和 !== (该选项会强制要求在你的代码中使用 === 和 !==，有一个例外，它允许 null 和 null 或者 undefined 在表达式中做比较。)
  'eqeqeq': [2, 'allow-null'],
  
  'func-names': 0,
  'func-style': 0,
  
  'generator-star-spacing': [2, { 'before': true, 'after': true }],
  'guard-for-in': 0,
  'handle-callback-err': [2, '^(err|error)$' ],
  'indent': [2, 2, { 'SwitchCase': 1 }],
   // 强制在对象字面量的键和值之间使用一致的空格
  'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }],
  'linebreak-style': 0,
  'lines-around-comment': 0,
  'max-nested-callbacks': 0,
   //  new 首字母大写
  'new-cap': [2, { 'newIsCap': true, 'capIsNew': false }],
  'new-parens': 2,
  'newline-after-var': 0,
  'no-alert': 0,
  'no-array-constructor': 2,
  'no-caller': 2,
  'no-catch-shadow': 0,
  'no-cond-assign': 2,
  'no-console': 0,
  'no-constant-condition': 0,
  'no-continue': 0,
  'no-control-regex': 2,
  'no-debugger': 2,
  'no-delete-var': 2,
  'no-div-regex': 0,
  'no-dupe-args': 2,
  'no-dupe-keys': 2,
  'no-duplicate-case': 2,
  'no-else-return': 0,
  'no-empty': 0,
  'no-empty-character-class': 2,
  'no-eq-null': 0,
  'no-eval': 2,
  'no-ex-assign': 2,
  'no-extend-native': 2,
  'no-extra-bind': 2,
  'no-extra-boolean-cast': 2,
  'no-extra-parens': 0,
  'no-extra-semi': 0,
  'no-fallthrough': 2,
  'no-floating-decimal': 2,
  'no-func-assign': 2,
  'no-implied-eval': 2,
  'no-inline-comments': 0,
  'no-inner-declarations': [2, 'functions'],
  'no-invalid-regexp': 2,
  'no-irregular-whitespace': 2,
  'no-iterator': 2,
  'no-label-var': 2,
  'no-labels': 2,
  'no-lone-blocks': 2,
  'no-lonely-if': 0,
  'no-loop-func': 0,
  'no-mixed-requires': 0,
  'no-mixed-spaces-and-tabs': 2,
  'no-multi-spaces': 2,
  'no-multi-str': 2,
  'no-multiple-empty-lines': [2, { 'max': 1 }],
  'no-native-reassign': 2,
  'no-negated-in-lhs': 2,
  'no-nested-ternary': 0,
  'no-new': 2,
  'no-new-func': 0,
  'no-new-object': 2,
  'no-new-require': 2,
  'no-new-wrappers': 2,
  'no-obj-calls': 2,
  'no-octal': 2,
  'no-octal-escape': 2,
  'no-param-reassign': 0,
  'no-path-concat': 0,
  'no-process-env': 0,
  'no-process-exit': 0,
  'no-proto': 0,
  'no-redeclare': 2,
  'no-regex-spaces': 2,
  'no-restricted-modules': 0,
  'no-return-assign': 2,
  'no-script-url': 0,
  'no-self-compare': 2,
  'no-sequences': 2,
  'no-shadow': 0,
  'no-shadow-restricted-names': 2,
  'no-spaced-func': 2,
  'no-sparse-arrays': 2,
  'no-sync': 0,
  'no-ternary': 0,
  'no-this-before-super': 2,
  'no-throw-literal': 2,
  'no-trailing-spaces': 2,
  'no-undef': 2,
  'no-undef-init': 2,
  'no-undefined': 0,
  'no-underscore-dangle': 0,
  'no-unexpected-multiline': 2,
  'no-unneeded-ternary': 2,
  'no-unreachable': 2,
  'no-unused-expressions': 0,
  'no-unused-vars': [2, { 'vars': 'all', 'args': 'none' }],
  'no-use-before-define': 0,
  'no-var': 0,
  'no-void': 0,
  'no-warning-comments': 0,
  'no-with': 2,
  'object-curly-spacing': 0,
  'object-shorthand': 0,
  'one-var': [2, { 'initialized': 'never' }],
  'operator-assignment': 0,
  'operator-linebreak': [2, 'after', { 'overrides': { '?': 'before', ':': 'before' } }],
  'padded-blocks': 0,
  'prefer-const': 0,
  'quote-props': 0,
  'quotes': [2, 'single', 'avoid-escape'],
  'radix': 2,
  'semi': [2, 'always'],
  'semi-spacing': 0,
  'sort-vars': 0,
  'keyword-spacing': 2,
  'space-before-blocks': [2, 'always'],
  'space-before-function-paren': [2, 'never'],
  'space-in-parens': [2, 'never'],
  'space-infix-ops': 2,
  'space-unary-ops': [2, { 'words': true, 'nonwords': false }],
  'spaced-comment': [2, 'always', { 'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!'] }],
  'strict': 0,
  'use-isnan': 2,
  'valid-jsdoc': 0,
  'valid-typeof': 2,
  'vars-on-top': 0,
  'wrap-iife': [2, 'any'],
  'wrap-regex': 0,
  'yoda': [2, 'never']

```



# Development

```shell
   npm run dev
```



# Production
```
  npm run  dist
```

# License
ISC
