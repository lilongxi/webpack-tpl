const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Exports = require('../webpack-config/path.config.js');

module.exports = [
	new webpack.DllReferencePlugin({
		context: __dirname,
		manifest: require('../manifest.json')
	}),
	new webpack.DefinePlugin({
		'process.env': {
			'NODE_ENV': JSON.stringify('dev')
		}
	}),
	new webpack.HotModuleReplacementPlugin(),
	new webpack.optimize.MinChunkSizePlugin({
		minChunkSize: 10000
	}),
	new CopyWebpackPlugin([{
		from: Exports.Static,
		ignore: ['*.ico']
	}]),
	new HtmlWebpackPlugin({
		title: 'My App',
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

]