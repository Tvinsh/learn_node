
const url = require('url');

const myURL = url.parse('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');


console.log('host',myURL.host);

console.log('hash',myURL.hash);

console.log('hostname',myURL.hostname);

console.log('origin',myURL.origin);

console.log('pathname',myURL.pathname);


// url.parse 将一个url的字符串解析并返回一个url的对象

// 第二个参数（可省）传入一个布尔值，默认为false，为true时，返回的url对象中，query的属性为一个对象


// url.format  将传入的url对象变成一个url字符串并返回

// url.resolve(from,to)  resolve这个方法返回一个格式为"from/to"的字符串