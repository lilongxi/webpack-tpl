module.exports = {
	contentBase:'../public',
	open: true,
	host: 'localhost',
	port: process.env.PORT || 8080, // 默认8080
	compress: true,
	watchContentBase: false,
    historyApiFallback: true, //不跳转，在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    inline: true, //实时刷新
    hot: true,  // 使用热加载插件 HotModuleReplacementPlugin
//  proxy: {  
//      '*': {  
//          target: 'http://localhost:3000',  
//          changeOrigin: true,
//			secure: false  
//      }  
//  },
	watchOptions: {
	    aggregateTimeout: 300,
	    poll: 1000
	},
	//抛出屏幕错误
	overlay: {
		errors: true,
		warnings: true
	}
}
