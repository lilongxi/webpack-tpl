const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Exports = require('../webpack-config/path.config.js');
//const HappyPack = require('happypack');
//const os = require('os');
//const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

module.exports = [
	//happypack
//	new HappyPack({
//		id: 'js',
//		threads: 4,
//      loaders: [
//      		{
//		      loader: 'babel-loader',
//		      options: {
//		        presets:['react', 'es2015', 'stage-0'],
//		        plugins: ['react-html-attrs', 'babel-plugin-transform-decorators-legacy'],
//		      }
//		    }
//      ]
//	}),
	new webpack.DllReferencePlugin({
		context: Exports.Dll,
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
	/* 全局shimming */
	new webpack.ProvidePlugin({
		$: 'jquery',
  		jQuery: 'jquery',
  		'window.jQuery': 'jquery',
		React: 'react',
		ReactDOM: 'react-dom',
		Redux: 'redux',
		ReactRedux: 'react-redux',
		ReactRouter: 'react-router'
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