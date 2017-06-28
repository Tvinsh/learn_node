// net 

	// http.Server继承了net.Server，此外，http客户端与http服务端的通信均依赖于socket（net.Socket）

var net = require('net');

var PORT = 3000;
var HOST = '127.0.0.1';

// tcp服务端
var server = net.createServer(function(socket){
    console.log('服务端：收到来自客户端的请求');			// 2

    socket.on('data', function(data){
        console.log('服务端：收到客户端数据，内容为{'+ data +'}');	// 4

        // 给客户端返回数据
        socket.write('你好，我是服务端');
    });

    socket.on('close', function(){
         console.log('服务端：客户端连接断开');		// 6
    });
});
server.listen(PORT, HOST, function(){
    console.log('服务端：开始监听来自客户端的请求');         // 1
});


// tcp客户端
var client = net.createConnection(PORT, HOST);

client.on('connect', function(){
    console.log('客户端：已经与服务端建立连接');		// 3
});

client.on('data', function(data){
    console.log('客户端：收到服务端数据，内容为{'+ data +'}');	// 5
});

client.on('close', function(data){		
    console.log('客户端：连接断开');		// 7
});

client.end('你好，我是客户端');

