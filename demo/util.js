// util 

// util.format  格式化打印

var util = require('util');

console.log( util.format('hello %s', 'world') );
// 输出：hello world

console.log( util.format('1 + 1 = %d', 2) );
// 输出：1 + 1 = 2

console.log( util.format('info: %j', {nick: 'tooooom'}) );
// 输出：info: {"nick":"tooooom"}