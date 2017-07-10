const http = require('http');
const proxy = require('express-http-proxy'); // 代理服务
const path = require('path');
const express = require('express');

const app = express();

app.use(function(req,res,next){
    console.log('haha');
    next();
});
app.use(function(req,res,next){
    console.log('hehe');
    next();
});
app.use(function(req,res){
    res.end("there is nothing happened");
});

app.use('/proxy', proxy('www.google.com', {
  decorateProxyReqBody: function(bodyContent, srcReq) {
    return bodyContent.split('').reverse().join('');
  }
}));

http.createServer(app).listen('3000', function(){
  console.log('Express server listening on port 3000');
});

