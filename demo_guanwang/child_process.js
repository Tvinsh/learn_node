const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '-all']);

ls.stdout.on('data', (data) => {
  console.log(`输出：${data}`);
});

ls.stderr.on('data', (data) => {
  console.log(`错误：${data}`);
});

ls.on('close', (code) => {
  console.log(`子进程退出码：${code}`);
});


// 在 Node.js 的父进程与衍生的子进程之间会建立 stdin、stdout 和 stderr 的管道。 数据能以非阻塞的方式在管道中流通。
// child_process.spawn() 方法会异步地衍生子进程，且不会阻塞 Node.js 事件循环。 
// child_process.spawnSync() 方法则以同步的方式提供同样的功能，但会阻塞事件循环，直到衍生的子进程退出或终止。