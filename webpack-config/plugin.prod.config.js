const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Exports = require('../webpack-config/path.config.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const pkg = require('../package.json');
const upper = require('./to.config.js');
//消除未使用的css，减少css冗余
const PurifyCSSPlugin = require("purifycss-webpack");
const glob = require('glob');

module.exports = [
	new webpack.BannerPlugin("Copyright by lilongxi@github.com."),
	new webpack.DllReferencePlugin({
		context: Exports.Dll,
		manifest: require('../manifest.json')
	}),
	//生产环境中，react将被压缩到最小
	new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
	new webpack.optimize.MinChunkSizePlugin({
		minChunkSize: 10000
	}),
	// 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
    	new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.ProvidePlugin(upper(Object.keys(pkg.dependencies))),
//  	new webpack.optimize.CommonsChunkPlugin({
//      name: 'vendor',
//      filename: 'js/[name].[chunkhash:8].js'
//  }),
	new webpack.optimize.UglifyJsPlugin({
           	compress: {
	            warnings: false,
	            drop_debugger: true,
	            drop_console: true
	        },
	        comments: false,            
	        minimize: true,
    }),
	new CopyWebpackPlugin([{
		from: Exports.Static,
		ignore: ['*.ico']
	}]),
	new HtmlWebpackPlugin({
		title: 'My App Online',
		filename: 'index.html',
		template: 'index.tmpl.html',
		source: 'dll/lib.dll.js',
		favicon: 'static/favicon/favicon.ico',
		hash: true,
		cache: true,
		inject: true,
		minify: {
			removeComments: true,
			collapseWhitespace: true,
			removeAttributeQuotes: true
		}
	}),
	new PurifyCSSPlugin({
    		// Give paths to parse for rules. These should be absolute!
    		paths: glob.sync(Exports.Root),
    }),
	new ExtractTextPlugin('css/[name].[chunkhash:8].css'),
]