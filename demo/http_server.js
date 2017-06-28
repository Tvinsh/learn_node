// http server

var http = require('http');
var requestListener = function(req, res){
    res.end('hello');
};
var server = http.createServer(requestListener);
// var server = new http.Server(requestListener); 跟上面是等价的
server.listen(3000,function() {
	console.log('listen on 3000')
});


//	获取 get 请求参数

		//    var urlObj = url.parse(req.url);
		//    var query = urlObj.query;
		//    var queryObj = querystring.parse(query);

		//    console.log( JSON.stringify(queryObj) );

// 事件	 var anotherSvr = http.createServer(noop);

// error 
	
	// anotherSvr.on('error', function(e){
	//     console.error('出错啦！' + e.message);
	// });

// connect   当客户端的HTTP method为connect时触发

// connection    当TCP连接建立时触发，大部分时候可以忽略这个事件

// request    当有新的连接到来时触发

// listen  监听

// setTimeout  设置网络连接的超时时间

