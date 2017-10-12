const Exports = require('./path.config.js');

module.exports = {
	extensions:['.js', '.jsx', '.json', '.css'],
	//为常用模块配置别名,可使用$触发精确匹配
	alias: {
		//css
		stylus: Exports.Style,
		//tpl
		template: Exports.Template
	}
}
