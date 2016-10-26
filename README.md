# dtfacotry
> Digital factory



## 技术栈

相关资料

- [x] [vue2](https://vuefe.cn/guide/)
- [x] [vuex2](https://vuefe.cn/vuex/)
- [x] [vue-resource](https://github.com/vuejs/vue-resource)
- [x] [echarts](https://github.com/ecomfe/echarts)
- [x] [lodash](https://lodash.com/)
- [x] [ElementUI](http://element.eleme.io/)
- [x] [postcss-salad](http://elemefe.github.io/postcss-salad/index.html)
- [x] [cooking](http://cookingjs.github.io/zh-cn/index.html)
- [x] jquery

    
# vue 

 直接看教程[vue-tutorial](https://github.com/MeCKodo/vue-tutorial)

# vuex 

 直接看教程[vuex-tutorial](https://github.com/yelingfeng/vuex-tutorial)

# CSS 规范

 组件采用BEM规范
 [BEM CSS命名规范](http://www.jianshu.com/p/407bd68a5677)
 [SALAD-BEM语法](https://www.npmjs.com/package/saladcss-bem)


```css
@b nav { /* b is for block */
    @e item { /* e is for element */
        display: inline-block;
    }
    @m placement_header {
        background-color: red;
    }
}
```

生成
```css
.nav {}
.nav__item {
    display: inline-block
}
.nav_placement_header {
    background-color: red
}

```

实例代码
```css
@component-namespace df {

    @b screen {
        width:1000px;
        height : 600px;
        border: 1px solid #ccc;
        margin: 10px auto ;
        padding:5px;

        @e element{
            padding: 10px;
            
            
            @m hover{
              
            }
        }
    }
}
```

`@component-namespace df`表示组件命名头 df-
`@b` 表示模块  df-screen
`@e` 表示元素  df-screen__element

如果需要状态修饰 `modifier` 可采取缩写`@m`

### 规范
 
 1 采用BEM CSS命名规范 
 2 嵌套层数不能超过规范的3级 最多到`modifier` B__E--M 不可以B__E__E--M这种
 3 通用css放到common文件夹 全局定义变量在`var.css` 各个模块css 引入`var.css`
 > 全局变量定义 使用时var(--link-color)这样
```css
    :root{
        --color-primary: #20a0ff;
        --link-color: #475669;
        --link-hover-color: var(--color-primary);
    }
```



## ESlint 代码风格
 
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
   //  new 调用无参构造函数时带括号 
  'new-parens': 2,
  'newline-after-var': 0,
  'no-alert': 0,
  
   // 禁止使用 Array 构造函数
  'no-array-constructor': 2,
   // 禁用 caller 或 callee (no-caller)
  'no-caller': 2,
  'no-catch-shadow': 0,
   // 禁止在条件语句中出现赋值操作符
  'no-cond-assign': 2,
  'no-console': 0,
  'no-constant-condition': 0,
  'no-continue': 0,
   // 禁止在正则表达式中使用控制字符 
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

# 开发构建工具 Cooking

文档地址[cooking](http://cookingjs.github.io/zh-cn/index.html)

cooking 是一个基于 webpack 但是提供更简单的配置项，同时内置了许多常用配置的构建工具。同时搭配

命令行工具可以将常用开发环境的依赖 (devDependencies) 安装全局，并且提供的脚手架功能能快速搭建

基于 Vue 或 React 的项目。

安装全局环境即可
```nodejs
   
   npm install -g cooking 
   
```

# Element 

Element UI 是一套 Vue.js 后台组件库，它能够帮助你更轻松更快速地开发后台项目。

基于vue2的UI库 

[文档地址](http://element.eleme.io/#/component/quickstart)


简单例子
```javascript

    <el-button type="primary" @click.native="changeTestNum">button</el-button> 

```



# 初始化工程
```shell
   
   npm install -g cooking 
   
   npm install 
   
```
# 开发 Development

```shell

   // 先启动本地api服务器
   npm run  server
   
   // 启动cooking
   npm run dev
   
```



# 生成模式 Production
```
  npm run  dist
```

# License
ISC
