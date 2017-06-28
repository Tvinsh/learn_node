// https

// var https = require('https');

// https.get('https://www.baidu.com', function(res){
//     console.log('status code: ' + res.statusCode);
//     console.log('headers: ' + res.headers);

//     res.on('data', function(data){
//         process.stdout.write(data);
//     });
// }).on('error', function(err){
//     console.error(err);
// });


// 12306网站的证书是自家的，会报错 警告
// var https = require('https');

// https.get('https://kyfw.12306.cn/otn/regist/init', function(res){   
//     res.on('data', function(data){
//         process.stdout.write(data);
//     });
// }).on('error', function(err){
//     console.error(err);
// });


// 忽略安全警告

var https = require('https');
var fs = require('fs');

var options = { 
    hostname: 'kyfw.12306.cn',
    path: '/otn/leftTicket/init',
    rejectUnauthorized: false  // 忽略安全警告
};

var req = https.get(options, function(res){ 
    res.pipe(process.stdout);   
});

req.on('error', function(err){
    console.error(err.code);
});

