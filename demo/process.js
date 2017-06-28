// process process是node的全局模块

// if(process.env.NODE_ENV === 'production'){
//     console.log('生产环境');
// }else{
//     console.log('非生产环境');
// }


// console.log('海贼王');
// process.nextTick(function(){
//     console.log('火影忍者');
// });
// console.log('死神');						
//海贼王					process.nextTick(fn) 将 fn 放到 node 事件循环的 下一个tick 里；
// 死神					process.nextTick(fn) 比 setTimetout(fn, 0) 性能高；
// 火影忍者

// process.argv   获取命令行参数  返回一个数组

process.argv.forEach(function(val, index, array) {
  console.log('参数' + index + ': ' + val);				
});

//参数0: /usr/local/bin/node
//参数1: /Users/tanwei/Documents/learn_node/demo/process.js

// process.execArgv   返回 node specific 的参数（也就是运行node程序特有的参数啦，比如 --harmony argv不会输出 ） 

process.execArgv.forEach(function(val, index, array) {
  console.log(index + ': ' + val);
});

// node --harmony process.js --nick chyingp
// 输出 0: --harmony

// process.cwd()  当前工作路径
// process.chdir(directory) 切换当前工作路径

console.log('Starting directory: ' + process.cwd());
try {
  process.chdir('/tmp');
  console.log('New directory: ' + process.cwd());
}
catch (err) {
  console.log('chdir: ' + err);
}


// process.stdin、process.stdout、process.stderr 分别代表进程的标准输入、标准输出、标准错误输出


// process.version 返回当前node的版本
// process.versions 返回node的版本，以及依赖库的版本
console.log(process.versions);

// process.platform  返回关于平台描述的字符串
console.log(process.platform)

//  console.dir(obj) 深层打印