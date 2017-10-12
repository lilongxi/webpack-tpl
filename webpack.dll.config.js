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
    plugins: [
        new webpack.DllPlugin({
            path: 'manifest.json',
            name: '[name]',
            context: __dirname,
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