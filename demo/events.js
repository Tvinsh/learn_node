// events

// 单个事件监听器
var EventEmitter = require('events');

class Man extends EventEmitter {}

var man = new Man();

man.emit('wakeup',1);

man.on('wakeup', function(){
    console.log('man has woken up');
});

man.on('wakeup', function(){
    console.log('man has woken up again');
});

man.emit('wakeup',2);

console.log('woman has woken up')

// man has woken up
// man has woken up again
// woman has woken up





// man.emit('wakeup');

// once 只运行一次的事件监听器

// 注册事件监听器前，事件先触发，则该事件会直接被忽略

// man.removeListener('wakeup');  移除事件监听器