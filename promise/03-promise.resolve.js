
Promise.resolve(42).then(function(value){
    console.log(value);
});


// 是以下写法的语法糖

new Promise(function(resolve,reject) {
	resolve(42)
}).then(function(value) {
	console.log(value)
})


// Promise.resolve 方法另一个作用就是将 thenable 对象转换为promise对象

// 比如  jQuery.ajax()，它的返回值就是thenable的

// var promise = Promise.resolve($.ajax('/json/comment.json'));	// => promise对象

// promise.then(function(value){
//    console.log(value);
// });



// Promise.reject(new Error("出错了"));

// // 是以下方法的语法糖

// new Promise(function(resolve,reject){
//     reject(new Error("出错了"));
// });



// .then 中指定的方法调用是异步进行的

var promise = new Promise(function (resolve){
    console.log("inner promise"); // 1
    resolve(42);
});
promise.then(function(value){
    console.log(value); // 3
});
console.log("outer promise"); // 2


// 绝对不能对异步回调函数（即使在数据已经就绪）进行同步调用。

// 如果对异步回调函数进行同步调用的话，处理顺序可能会与预期不符，可能带来意料之外的后果。

// 对异步回调函数进行同步调用，还可能导致栈溢出或异常处理错乱等问题。

// 如果想在将来某时刻调用异步回调函数的话，可以使用 setTimeout 等异步API


// 1 如果dom已经就绪，会同步执行onReady
function onReady(fn) {
    var readyState = document.readyState;
    if (readyState === 'interactive' || readyState === 'complete') {
        fn();
    } else {
        window.addEventListener('DOMContentLoaded', fn);
    }
}
onReady(function () {
    console.log('DOM fully loaded and parsed');
});
console.log('==Starting==');



// 2 用setTimeOut 异步处理
function onReady(fn) {
    var readyState = document.readyState;
    if (readyState === 'interactive' || readyState === 'complete') {
        setTimeout(fn, 0);
    } else {
        window.addEventListener('DOMContentLoaded', fn);
    }
}
onReady(function () {
    console.log('DOM fully loaded and parsed');
});
console.log('==Starting==');



// 3 promise本来就是异步执行，不需要setTimeout
function onReadyPromise() {
    return new Promise(function (resolve, reject) {
        var readyState = document.readyState;
        if (readyState === 'interactive' || readyState === 'complete') {
            resolve();
        } else {
            window.addEventListener('DOMContentLoaded', resolve);
        }
    });
}
onReadyPromise().then(function () {
    console.log('DOM fully loaded and parsed');
});
console.log('==Starting==');

















