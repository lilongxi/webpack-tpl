const Exports = require('./path.config.js');

module.exports = {
	rules:[
//			{
//		      test: /\.js$/,
//		      enforce: 'pre',
//		      loader: 'eslint-loader',
//		      exclude: /node_modules/,
//			  include:Exports.Entry,
//		      options: {
//		        emitWarning: true,
//		        fix: true,
//		      }
//		    },
			//js/jsx
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				include:Exports.Entry,
//				loader: 'happypack/loader?id=js'
				loader:'babel-loader', 
				query: {
					cacheDirectory:true,
					presets:['react', 'env', 'stage-0'],
					plugins: ['react-html-attrs', 
					'transform-decorators-legacy', 
					'transform-do-expressions', 
					'transform-react-jsx',
					'transform-runtime'],
				}
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				include:Exports.Entry,
				use: [
					{loader: 'style-loader'},
					{loader: 'css-loader',
					 options:{
					  	  modules: true,
					  	  importLoaders: 1,
					  	  minimize: true,
					  	  limit: 5000,
					  	  localIdentName: '[name]_[local]_[hash:base64:8]'
					   }
					},
					{loader: 'postcss-loader',
					 options: {    
				           plugins: require('./postcss.config.js')
				        }
					}
				]
			},
			{
				test:/\.less$/,
				exclude: /node_modules/,
				include:Exports.Entry,
			    use:[
			 		{loader: 'style-loader'},
			 		{loader: 'css-loader',
					 options:{
					  	  modules: true,
					  	  importLoaders: 1,
					  	  minimize: true,
					  	  limit: 5000,
					  	  localIdentName: '[name]_[local]_[hash:base64:8]'
					   }
					},		
					{loader: 'less-loader'}
			 	]
			},
			{
				test:/\.scss/,
				exclude: /node_modules/,
				include:Exports.Entry,
				use:[
			 		{loader: 'style-loader'},
			 		{loader: 'css-loader',
					 options:{
					  	  modules: true,
					  	  importLoaders: 1,
					  	  minimize: true,
					  	  limit: 5000,
					  	  localIdentName: '[name]_[local]_[hash:base64:8]'
					   }
					},		
					{loader: 'sass-loader'}
			 	]
			},
			{
				test:/\.(png|jpg|gif|svg|jpeg|ico)($|\?)/i,
				exclude: /node_modules/,
				include:Exports.Entry,
				use: [
					{loader: 'file-loader',options:{limit: 5000,name: 'img/[name].[ext]'}}
				]
			},
			{
				test:/\.(woff|woff2|svg|ttf|eot|)($|\?)/i,
				exclude: /node_modules/,
				include:Exports.Entry,
				use: [
					{loader: 'file-loader', options:{limit: 5000,name: 'fonts/[name].[ext]'}}
				]
			},
			//xml,json
			{
		       test: /\.json$/,
		       exclude: /node_modules/,
		       include:Exports.Entry,
		       use: [
		           {loader: 'json-loader'}
		       ]
		    },
	        {
	          test: /\.xml$/,
	          exclude: /node_modules/,
	          include:Exports.Entry,
	          use: [
	          		{loader: 'xml-loader'}
	          ]
	        }
		]
}
