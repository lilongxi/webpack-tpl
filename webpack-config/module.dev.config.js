const Exports = require('./path.config.js');

module.exports = {
	rules:[
			//js/jsx
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				include:Exports.Entry,
				loader:'babel-loader', 
				query: {
					cacheDirectory:true,
					presets:['react', 'es2015', 'stage-0'],
					plugins: ['react-html-attrs', 'babel-plugin-transform-decorators-legacy'],
				}
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				include:Exports.Entry,
				use: [
					{loader: 'style-loader'},
					{loader: 'css-loader?modules&importLoaders=1&minimize=true&limit=5000&localIdentName=[name]__[local]__[hash:base64:8]'},
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
			 		{loader: 'css-loader?modules&importLoaders=1&minimize=true&limit=5000&localIdentName=[name]__[local]__[hash:base64:8]'},		
					{loader: 'less-loader'}
			 	]
			},
			{
				test:/\.scss/,
				exclude: /node_modules/,
				include:Exports.Entry,
				use:[
			 		{loader: 'style-loader'},
			 		{loader: 'css-loader?modules&importLoaders=1&minimize=true&limit=5000&localIdentName=[name]__[local]__[hash:base64:8]'},		
					{loader: 'sass-loader'}
			 	]
			},
			{
				test:/\.(png|jpg|gif|svg|jpeg|ico)($|\?)/i,
				exclude: /node_modules/,
				include:Exports.Entry,
				use: [
					{loader:'url-loader?limit=5000&name=img/[name].[ext]'}
				]
			},
			{
				test:/\.(woff|woff2|svg|ttf|eot|)($|\?)/i,
				exclude: /node_modules/,
				include:Exports.Entry,
				use: [
					{loader:'url-loader?limit=500&name=fonts/[name].[ext]'}
				]
			},
			//xml,json
			{
		       test: /\.(csv|tsv)$/,
		       exclude: /node_modules/,
		       include:Exports.Entry,
		       use: [
		           {loader: 'csv-loader'}
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
