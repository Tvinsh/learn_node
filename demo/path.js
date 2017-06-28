// path

// 获取路径：path.dirname(filepath)
// 获取文件名：path.basename(filepath)
	// 严格意义上来说，path.basename(filepath) 只是输出路径的最后一部分，并不会判断是否文件名
// 获取扩展名：path.extname(filepath)

var path = require('path');
var filepath = '/tmp/demo/js/test.js';

// 输出：/tmp/demo/js
console.log( path.dirname(filepath) );
console.log(path.basename(filepath));
console.log(path.extname(filepath));

// /tmp/demo/js
// test.js
// .js




// path.resolve  从左到右运行一遍cd path命令，最终获取的绝对路径/文件名，就是这个接口所返回的结果了

console.log( path.resolve('') )
// /Users/tanwei/Documents/learn_node/demo

console.log( path.resolve('/demo') )

// /demo