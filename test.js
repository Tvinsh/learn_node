var dns  = require('dns');

dns.lookup('www.qq.com', function(err, address, family){
    if(err) throw err;
    console.log('例子A: ' + address);
});

 var a = 123;
var options = {all: true};

dns.lookup('www.qq.com', options, function(err, address, family){
    if(err) throw err;
    console.log('例子B: ' + address);
});



