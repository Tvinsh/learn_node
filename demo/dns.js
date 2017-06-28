// dns 解析		dns.lookup()  dns.resolve4()


// var dns = require('dns');

// dns.lookup('www.qidian.com', function(err, address, family){
//     if(err) throw err;
//     console.log('例子A: ' + address);
// });

var dns = require('dns');

dns.resolve4('www.qidian.com', function(err, address){
    if(err) throw err;
    console.log( JSON.stringify(address) );
});