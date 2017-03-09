var http = require("http");
var url = require('url');


function start(route, handle) {
	http.createServer(function(request, response) {

	  var pathname = url.parse( request.url ).pathname;
	  console.log( pathname );

	  route(handle, pathname, response, request);
		  

	}).listen(8888);

	//console.log(" server has started" );
}

exports.start = start;