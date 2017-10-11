const webpack = require('webpack');
//const pkg = require('./package.json');
const Exports = require('./webpack-config/path.config.js');

const prod = {
	context:__dirname,
	//配置生成Source Maps，选择合适的选项
	devtool : false,
	//配置入口文件
	entry: {
		'index': `${Exports.Entry}/index.js`,
//		vendor: Object.keys(pkg.dependencies)
	},
	//配置输出文件
	output: {
		path: Exports.Build,
		filename:`js/[name].[chunkhash:8].js`,
		chunkFilename: '[id].[chunkhash].bundle.js',
	},
	//module
	module:require('./webpack-config/module.prod.config.js'),
	//resolve配置文件别名
	resolve: require('./webpack-config/resolve.config.js'),
	//外部资源引用
	externals: require('./webpack-config/externals.config.js'),
	//plugins
	plugins: require('./webpack-config/plugin.prod.config.js')
}

module.exports = prod;


