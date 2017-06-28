// http client


// var http = require('http');
// var options = {
//     protocol: 'http:',
//     hostname: 'www.qidian.com',
//     port: '80',
//     path: '/',
//     method: 'GET'
// };

// var client = http.request(options, function(res){
//     var data = '';
//     res.setEncoding('utf8');
//     res.on('data', function(chunk){
//         data += chunk;
//     });
//     res.on('end', function(){
//         console.log(data);
//     });
// });

// client.end();


// 用 http get 重写
// var http = require('http');

// http.get('http://id.qq.com/', function(res){
//     var data = '';
//     res.setEncoding('utf8');
//     res.on('data', function(chunk){
//         data += chunk;
//     });
//     res.on('end', function(){
//         console.log(data);
//     });
// })


//  post

var http = require('http');
var querystring = require('querystring');

var createClientPostRequest = function(){
    var options = {
        method: 'POST',
        protocol: 'http:',
        hostname: '127.0.0.1',
        port: '3000',
        path: '/post',
        headers: {
            "connection": "keep-alive",
            "content-type": "application/x-www-form-urlencoded"
        }    
    };

    // 发送给服务端的数据
    var postBody = {
        nick: 'tttttom'
    };

    // 创建客户端请求
    var client = http.request(options, function(res){
        // 最终输出：Server got client data: nick=tttttom
        res.pipe(process.stdout);  
    });

    // 发送的报文主体，记得先用 querystring.stringify() 处理下
    client.write( querystring.stringify(postBody) );
    client.end();
};

// 服务端程序，只是负责回传客户端数据
var server = http.createServer(function(req, res){
    res.write('Server got client data: ');
    req.pipe(res);
});

server.listen(3000, createClientPostRequest);



// 事件 

// response   当收到来自服务端的响应时触发
// continue   当收到服务端的响应 100 Continue 时触发





































