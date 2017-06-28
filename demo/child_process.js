
// child_process


// 创建子进程  都是异步创建子进程的方式，每一种方式都有对应的同步版本

// .exec()、.execFile()、.fork()底层都是通过.spawn()实现的

// .exec()、execFile()额外提供了回调，当子进程停止的时候执行

var exec = require('child_process').exec;

// 成功的例子
// exec('ls -al', function(error, stdout, stderr){
//     if(error) {
//         console.error('error: ' + error);
//         return;
//     }
//     console.log('stdout: ' + stdout);
//     console.log('stderr: ' + typeof stderr);
// });

// 失败的例子
// exec('ls hello.txt', function(error, stdout, stderr){		// No such file or directory
//     if(error) {
//         console.error('error: ' + error);
//         return;
//     }
//     console.log('stdout: ' + stdout);
//     console.log('stderr: ' + stderr);
// });


// 参数说明

// cwd：当前工作路径。
// env：环境变量。
// encoding：编码，默认是utf8。
// shell：用来执行命令的shell，unix上默认是/bin/sh，windows上默认是cmd.exe。
// timeout：默认是0。
// killSignal：默认是SIGTERM。
// uid：执行进程的uid。
// gid：执行进程的gid。
// maxBuffer： 标准输出、错误输出最大允许的数据量（单位为字节），如果超出的话，子进程就会被杀死。默认是200*1024（就是200k啦)


// 如果timeout大于0，那么，当子进程运行超过timeout毫秒，那么，就会给进程发送killSignal指定的信号（比如SIGTERM）。
// 如果运行没有出错，那么error为null。如果运行出错，那么，error.code就是退出代码（exist code），error.signal会被设置成终止进程的信号。
// （比如CTRL+C时发送的SIGINT）


var child_process = require('child_process');

child_process.execFile('node', ['--version'], function(error, stdout, stderr){
    if(error){
        throw error;
    }
    console.log(stdout);
});

// exec()、execFile()最大的差别，就在于是否创建了shell

// exec() 内部调用 execFile() 来实现，而 execFile() 内部调用 spawn() 来实现

// process.execArgv  设置execArgv的目的一般在于，让子进程跟父进程保持相同的执行环境

var spawn = require('child_process').spawn;
var ls = spawn('ls', ['-al']);

ls.stdout.on('data', function(data){
    console.log('data from child: ' + data);
});


ls.stderr.on('data', function(data){
    console.log('error from child: ' + data);
});

ls.on('close', function(code){
    console.log('child exists with code: ' + code);
});









































