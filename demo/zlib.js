// 压缩文件   createGzip

var fs = require('fs');
var zlib = require('zlib');

var gzip = zlib.createGzip();	// creteGzip

var inFile = fs.createReadStream('../test.txt');
var out = fs.createWriteStream('../test.txt.gz');

inFile.pipe(gzip).pipe(out);