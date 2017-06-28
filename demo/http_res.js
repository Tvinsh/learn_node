// http res

var http = require('http');

// 设置状态码、状态描述信息、响应主体    res.writeHead()、res.statusCode/res.statusMessage

var server = http.createServer(function(req, res){
    
    // 增
	res.setHeader('Content-Type', 'text/plain');

	res.writeHead(200, 'ok', {
        'Content-Type': 'text/plain'
    });

	// 删
	res.removeHeader('Content-Type');

	// 改
	res.setHeader('Content-Type', 'text/plain');
	res.setHeader('Content-Type', 'text/html');  // 覆盖

	// 查
	res.getHeader('content-type');

    res.end('hello');
});

server.listen(3000);