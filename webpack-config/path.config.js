const path = require('path');
const Exports = {};

Exports.Root = path.resolve(__dirname, '../');
Exports.Output = path.resolve(Exports.Root, './public');
Exports.Build = path.resolve(Exports.Root, './build');
Exports.Static = path.resolve(Exports.Root, './static');
Exports.Entry = path.resolve(Exports.Root, './webpack-test');
Exports.Dll = path.resolve(Exports.Root, './webpack-config');

//模块别名路径设置
Exports.Style = path.resolve(Exports.Entry, './css');
Exports.Template = path.resolve(Exports.Entry, './component');

module.exports = Exports;