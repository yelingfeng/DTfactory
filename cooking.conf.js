var path = require('path');
var cooking = require('cooking');
var pkg = require('./package');
var vendorPlugin = Object.keys(pkg.dependencies);

cooking.set({
  entry: {
    app: './src/main.js',
    vendor: vendorPlugin
  },
  dist: './static',
  template: './src/template/index.html',
  devServer: {
    port: 8100,
    publicPath: '/'
  },
  externals: {
    'jQuery': 'jquery'
  },
  // production
  clean: true,
  hash: true,
  sourceMap: false,
  chunk: [
    {
      name: 'vendor',
      minChunks: function (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, 'node_modules')
          ) === 0
        );
      }
    },
    {
      name: 'manifest',
      chunks: ['vendor']
    }
  ],
  alias: {
    src: path.resolve(__dirname, './src'),
    components: path.resolve(__dirname, './src/components'),
    views: path.resolve(__dirname, './src/views'),
  },
  publicPath: '/static/',
  assetsPath: 'images',
  urlLoaderLimit: 10000,
  extractCSS: 'css/[hash:8].[name].css', // 提取 CSS 文件
  extends: ['vue2', 'saladcss', 'lint']
});

if (process.env.NODE_ENV === 'production') {
  cooking.add('output.filename', '[hash:8].[name].js') ;
}

module.exports = cooking.resolve();
