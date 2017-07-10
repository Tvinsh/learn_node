
// util.format() 方法返回一个格式化后的字符串
// 占位符没有对应的参数，则占位符不被替换
// 如果传入 util.format() 方法的参数比占位符的数量多，则多出的参数会被强制转换为字符串


// 		%s - 字符串。
// 		%d - 数值（整数或浮点数）。
// 		%i - Integer.
// 		%f - Floating point value.
// 		%j - JSON。如果参数包含循环引用，则用字符串 '[Circular]' 替换。
// 		%% - 单个百分号（'%'）。不消耗参数

var util = require('util');

console.log( util.format('%s:%s', 'foo') )