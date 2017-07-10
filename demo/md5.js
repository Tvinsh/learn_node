// 散列函数（又称哈希算法、摘要算法），主要用来确保消息的完整和一致性

// nodejs中，crypto模块封装了一系列密码学相关的功能，包括摘要运算

// var crypto = require('crypto');

// var md5 = crypto.createHash('md5');

// var result = md5.update('aaa').digest('hex');

// console.log(result);


// 密码保护

// var crypto = require('crypto');

// function cryptPwd(password) {
//     var md5 = crypto.createHash('md5');
//     return md5.update(password).digest('hex');
// }

// var password = '123456';
// var cryptedPassword = cryptPwd(password);

//console.log(cryptedPassword);

// 相同的明文密码，md5值也是相同的 不安全，很好破解

// 密码加盐  在密码特定位置插入特定字符串后，再对修改后的字符串进行md5运算

// var crypto = require('crypto');

// function cryptPwd(password, salt) {
//     // 密码“加盐”
//     var saltPassword = password + ':' + salt;
//     console.log('原始密码：%s', password);
//     console.log('加盐后的密码：%s', saltPassword);

//     // 加盐密码的md5值
//     var md5 = crypto.createHash('md5');
//     var result = md5.update(saltPassword).digest('hex');
//     console.log('加盐密码的md5值：%s', result);
// }

// cryptPwd('12345','abc')

// 随机盐值

var crypto = require('crypto');

function getRandomSalt(){
    return Math.random().toString().slice(2, 5);
}

function cryptPwd(password, salt) {
    // 密码“加盐”
    var saltPassword = password + ':' + salt;
    console.log('原始密码：%s', password);
    console.log('加盐后的密码：%s', saltPassword);

    // 加盐密码的md5值
    var md5 = crypto.createHash('md5');
    var result = md5.update(saltPassword).digest('hex');
    console.log('加盐密码的md5值：%s', result);
}

var password = '123456';

cryptPwd('123456', getRandomSalt());



















































