const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('你认为 Node.js 中文网怎么样？', (answer) => {
//   // 对答案进行处理
//   console.log(`多谢你的反馈：${answer}`);

//   rl.close();
// });

// 当调用该代码时，Node.js 程序不会终止，直到 readline.Interface 被关闭，因为接口在等待 input 流中要被接收的数据

// readline.Interface 类的实例是使用 readline.createInterface() 方法构造的。 每个实例都关联一个 input 可读流和一个 output 可写流。 
// output 流用于为到达的用户输入打印提示，且从 input 流读取

// rl.on('line', (input) => {
//   console.log(`接收到：${input}`);
//   rl.close()
// });

// input 流接收到接收行结束符（\n、\r 或 \r\n）时触发 'line' 事件


// input 流接收到一个 <ctrl>-C 输入（通常被称为 SIGINT）时，触发 'SIGINT' 事件。 
// 当 input 流接收到一个 SIGINT 时，如果没有注册 'SIGINT' 事件监听器，则 'pause' 事件会被触发。

// rl.on('SIGINT', () => {
//   rl.question('确定要退出吗？ ', (answer) => {
//     if (answer.match(/^y(es)?$/i)) rl.pause();
//   });
// });

// rl.question(query, callback)

// rl.question('你最喜欢的食物是什么？ ', (answer) => {
//   console.log(`你最喜欢的食物是 ${answer}`);
// });




const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '请输入> '
});

rl.prompt();

rl.on('line', (line) => {
  switch (line.trim()) {
    case 'hello':
      console.log('world!');
      break;
    default:
      console.log(`你输入的是：'${line.trim()}'`);
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('再见!');
  process.exit(0);
});