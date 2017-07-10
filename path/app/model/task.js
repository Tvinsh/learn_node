var path = require('path');
var fs = require('fs');
const rootPath = path.resolve('.');
const gutil = require('gulp-util');

console.log(__dirname);
console.log(__filename);
console.log(process.cwd());
console.log(process.env.PWD);
console.log(path.resolve('./'));

console.log(rootPath);

console.log(gutil.env.path);	// 获取 --path 后面的路径

console.log('basename:', path.basename('/Users/tanwei/Documents/node/learn_node/path/app/model/task.js') )


var configFile = '/Users/tanwei/Documents/node/learn_node/path/app/model/task.js';

var absPath = path.resolve(configFile).substring(0,path.resolve(configFile).indexOf(path.basename(path.resolve(configFile))));

console.log('absPath:',absPath);


console.log( 'joinpath',path.join(absPath, './src/static/css')	)


// 在 model 目录下运行 node task.js

// 			/Users/tanwei/Documents/node/learn_node/path/app/model
// 			/Users/tanwei/Documents/node/learn_node/path/app/model/task.js
// 			/Users/tanwei/Documents/node/learn_node/path/app/model
//          /Users/tanwei/Documents/node/learn_node/path/app/model
// 			/Users/tanwei/Documents/node/learn_node/path/app/model
// 			/Users/tanwei/Documents/node/learn_node/path/app/model
//			basename: task.js
// 			absPath: /Users/tanwei/Documents/node/learn_node/path/app/model
//			joinpath /Users/tanwei/Documents/node/learn_node/path/app/model/src/static/css





// 在 app 目录下运行 node model/task.js

// 			/Users/tanwei/Documents/node/learn_node/path/app/model
// 			/Users/tanwei/Documents/node/learn_node/path/app/model/task.js
// 			/Users/tanwei/Documents/node/learn_node/path/app
//			/Users/tanwei/Documents/node/learn_node/path/app
// 			/Users/tanwei/Documents/node/learn_node/path/app
// 			/Users/tanwei/Documents/node/learn_node/path/app
// 			basename: task.js
//			absPath: /Users/tanwei/Documents/node/learn_node/path/app/model/
//			joinpath /Users/tanwei/Documents/node/learn_node/path/app/model/src/static/css





// __dirname: 总是返回被执行的 js 所在文件夹的绝对路径
// __filename: 总是返回被执行的 js 的绝对路径
// process.cwd(): 总是返回运行 node 命令时所在的文件夹的绝对路径
// ./: 跟 process.cwd() 一样的吗？


// var fs = require('fs');
// var common = require('../lib/common');

// fs.readFile('../lib/common.js', function (err, data) {
//     if (err) return console.log(err);
//     console.log(data);
// });

// 在 model 目录下运行 node task.js		正常

// 在 app 目录下运行 node model/task.js   报错

// 关于 ./ 正确的结论是：

// 在 require() 中使用是跟 __dirname 的效果相同，不会因为启动脚本的目录不一样而改变，
// 在其他情况下跟 process.cwd() 效果相同，是相对于启动脚本所在目录的路径。




