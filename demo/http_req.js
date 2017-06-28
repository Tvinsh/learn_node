// http req

// server 

						// var http = require('http');
						// var server = http.createServer(function(req, res){
						//     console.log(req.headers);
						//     res.end('ok');
						// });
						// server.listen(3000);

// client

						//var http = require('http');
						// http.get('http://127.0.0.1:3000', function(res){
						//     console.log(res.statusCode);
						// });

var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'content-type': 'text/plain',});

    var urlObj = url.parse(req.url);
    var query = urlObj.query;
    var queryObj = querystring.parse(query);
    
    console.log( JSON.stringify(queryObj) );

    res.end('from server');
});

server.listen(3000);

// 访问	http://127.0.0.1:3000/hello?nick=tom&hello=world

var client = http.get('http://127.0.0.1:3000', function(res){
    console.log('1、http版本：' + res.httpVersion);
    console.log('2、返回状态码：' + res.statusCode);
    console.log('3、返回状态描述信息：' + res.statusMessage);
    console.log('4、返回正文：');

    res.pipe(process.stdout);
});

