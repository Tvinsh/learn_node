function route(handle, pathname, response, postData) {
	console.log("route a request for "+ pathname );

	if( typeof handle[pathname] === 'function' ) {
		handle[pathname](response, postData);
	} else {
		console.log( "no request for " + pathname );
		response.writeHead(404, {"content-Type": "text/plain"});
		response.write("404 not found");
		response.end();
	}
}

exports.route = route;