
// function taskA() {
//     console.log("Task A");
// }
// function taskB() {
//     console.log("Task B");
// }
// function onRejected(error) {
//     console.log("Catch Error: A or B", error);
// }
// function finalTask() {
//     console.log("Final Task");
// }

// const promise = Promise.resolve();

// promise
//     .then(taskA)
//     .then(taskB)
//     .catch(onRejected)
//     .then(finalTask);

// Task A
// Task B
// Final Task

// taskA 产生异常
// function taskA() {
//     console.log("Task A");
//     throw new Error("throw Error @ Task A")
// }
// function taskB() {
//     console.log("Task B");// 不会被调用
// }
// function onRejected(error) {
//     console.log(error);// => "throw Error @ Task A"
// }
// function finalTask() {
//     console.log("Final Task");
// }

// var promise = Promise.resolve();
// promise
//     .then(taskA)
//     .then(taskB)
//     .catch(onRejected)
//     .then(finalTask);

// Task A
// "throw Error @ Task A"
// Final Task


// promise-chain 中传递参数 如 taskA 传参给 taskB
function doubleUp(value) {
    return value * 2;
}
function increment(value) {
    return value + 1;
}
function output(value) {
    console.log(value);// => (1 + 1) * 2
}

var promise = Promise.resolve(1);

promise
    .then(increment)
    .then(doubleUp)
    .then(output)
    .catch(function(error){
        // promise chain中出现异常的时候会被调用
        console.error(error);
    });

// 每个方法中 return 的值不仅只局限于字符串或者数值类型，也可以是对象或者promise对象等复杂类型

// ----------------- 不管回调函数中会返回一个什么样的值，最终 then 的结果都是返回一个新创建的promise对象 ----------------


// polyfill是一个支持在不具备某一功能的浏览器上使用该功能的Library

// .标记法要求对象的属性必须是有效的标识符（在ECMAScript 3中则不能使用保留字）
// []标记可以将非合法标识符作为对象的属性名使用

var promise = Promise.reject(new Error("message"));
promise["catch"](function (error) {
    console.error(error);
});
// 这样就可以在ie8中运行了




















































