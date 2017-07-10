const path = require('path');

// 在 POSIX 上

console.log( path.basename('C:\\temp\\myfile.html') );

// 返回: 'C:\\temp\\myfile.html'

// 在 Windows 上

// 返回: 'myfile.html'

console.log( path.win32.basename('C:\\temp\\myfile.html') )
console.log( path.posix.basename('/tmp/myfile.html') )
// 返回: 'myfile.html' 	所有操作系统上一致


console.log( path.basename('/foo/bar/baz/asdf/quux.html') )
// 在 POSIX 上 也返回 quux.html

console.log( path.posix.basename('/foo/bar/baz/asdf/quux.html','.html') )
// 返回 quux



// path.delimiter 提供平台特定的路径分隔符
// 默认
// Windows 上是 ;
// POSIX 上是 :


console.log(process.env.PATH)
// /usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin


console.log( process.env.PATH.split(path.delimiter) );
// [ '/usr/local/bin', '/usr/bin', '/bin', '/usr/sbin', '/sbin' ]


console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'))
// /foo/bar/baz/asdf

console.log(path.resolve('path.js'));
// /Users/tanwei/Documents/node/learn_node/demo_guanwang/path.js