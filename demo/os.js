var os = require('os');

console.log('arch：'+os.arch());
console.log('cpus:'+JSON.stringify(os.cpus()));
console.log('endianness:'+os.endianness());
console.log('freememory:'+os.freemem());
console.log('home directory:'+os.homedir());
console.log('hostname:'+os.hostname());
console.log('loadavg:'+os.loadavg());
console.log('networkInterfaces:'+JSON.stringify(os.networkInterfaces()));
console.log('platform:'+os.platform());
console.log('release:'+os.release());
console.log('tmpdir:'+os.tmpdir());
console.log('total memory:'+os.totalmem());
console.log('os type:'+os.type());
console.log('uptime:'+os.uptime());