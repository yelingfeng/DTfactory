const path = require('path');
const cooking = require('cooking');
const pkg = require('./package');
const webpack = require('webpack');
const vendorPlugin = Object.keys(pkg.dependencies);

var config = {
  entry: {
    app: './src/app.js',
    vendor: vendorPlugin,
    plist: './src/plist.js'
  },
  dist: './dist',
  devServer: {
    port: 8100,
    hot: true,
    publicPath: '/',
    clean: false
  },
  // production
  clean: true,
  hash: true,
  sourceMap: false,
  alias: {
    'src': path.join(__dirname, './src'),
    'components': path.join(__dirname, './src/components'),
    'views': path.join(__dirname, './src/views'),
    'util':path.join(__dirname,'./src/util')
  },
  publicPath: '/dist/',
  assetsPath: 'static',
  urlLoaderLimit: 10000,
  extractCSS: 'css/[hash:8].[name].css', // 提取 CSS 文件
  extends: ['vue2', 'saladcss'],
  postcss: [
    require('postcss-salad')({
      browser: ['ie > 9', 'last 2 version'],
      features: {
        'bem': {
          'shortcuts': {
            'component': 'b',
            'modifier': 'm',
            'descendent': 'e'
          },
          'separators': {
            'descendent': '__',
            'modifier': '--'
          }
        }
      }
    })
  ]
};

if (process.env.NODE_ENV === 'production') {
  cooking.add('output.filename', 'js/[hash:8].[name].js') ;
  cooking.add('plugin.CommonsChunk', new webpack.optimize.CommonsChunkPlugin({
    names: ['common', 'vendor'],
    minChunks: Infinity
  }));
}

if (process.env.NODE_ENV === 'production') {
  config.template = [{
    filename: 'editor.html',
    template: 'src/template/index.html',
    chunks: ['common', 'vendor', 'app']
  }, {
    filename: 'index.html',
    template: 'src/template/plist.html',
    chunks: ['common', 'vendor', 'plist']
  }]
} else {
  config.template = [{
    filename: 'editor.html',
    template: 'src/template/index.html',
    chunks: ['vendor', 'app']
  }, {
    filename: 'index.html',
    template: 'src/template/plist.html',
    chunks: ['vendor', 'plist']
  }]
}


cooking.set(config);

module.exports = cooking.resolve();
