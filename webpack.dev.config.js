const webpack = require('webpack');
const Exports = require('./webpack-config/path.config.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const dev = {
	context:__dirname,
	//配置生成Source Maps，选择合适的选项
	devtool : false,
	//配置入口文件
	entry: {'index': `${Exports.Entry}/index.js`},
	//配置输出文件
	output: {
		path: Exports.Output,
		filename:`js/[name].bundle.js`,
		chunkFilename: '[id].[chunkhash].bundle.js',
	},
	//module
	module:require('./webpack-config/module.dev.config.js'),
	//resolve配置文件别名
	resolve: require('./webpack-config/resolve.config.js'),
	//外部资源引用
	externals: require('./webpack-config/externals.config.js'),
	//devserver
	devServer:require('./webpack-config/devserver.config.js'),
	//plugins
	plugins: require('./webpack-config/plugin.dev.config.js')
}

module.exports = dev;


