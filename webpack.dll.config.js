const webpack = require('webpack');
const Exports = require('./webpack-config/path.config.js');
const pkg = require('./package.json');

const dll = {
    output:{
        path: Exports.Static,
        filename:'dll/[name].dll.js',
        library: '[name]'
    },
    entry:{
        "lib": Object.keys(pkg.dependencies)
    },
    module: {
	    rules:[
		    {
		      test: /\.css$/,
		      use:[
		      	{loader: 'style-loader'},
				{loader: 'css-loader'},
				{loader: 'postcss-loader', 
					options: {
			           plugins: require('./webpack-config/postcss.config.js')
			        }
				}
		      ]
		    },
		    {
		      test: /\.less$/,
		      use:[
		      	{loader: 'style-loader'},
				{loader: 'css-loader'},
				{loader: 'less-loader'}
		      ]
		    }
	    ]
	  },
    plugins: [
        new webpack.DllPlugin({
            path: 'manifest.json',
            name: '[name]',
            context: Exports.Dll,
        }),
        new webpack.optimize.UglifyJsPlugin({
           	compress: {
	            warnings: false,
	            drop_debugger: true,
	            drop_console: true
	        },
	        comments: false,            
	        minimize: true,
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.BannerPlugin("Copyright by lilongxi@github.com."),
    ],
}

module.exports = dll;