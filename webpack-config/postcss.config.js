//css预处理
const precss = require('precss');
//浏览器前缀补全
//const autoprefixer = require('autoprefixer');
//autoprefixer({
//  remove: false,
//  browsers: ['ie >= 8', '> 1% in CN', 'last 5 versions'],
//})
//压缩css最小
const cssnano = require('cssnano');
//支持css4
const cssnext = require('postcss-cssnext');
const csshort = require('postcss-short');

module.exports = function postcss() {
  return [precss, cssnext, csshort, cssnano({
  	preset:'default'
  })];
};
