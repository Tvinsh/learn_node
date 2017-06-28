// 解压缩  createGunzip()

var fs = require('fs');
var zlib = require('zlib');

var gunzip = zlib.createGunzip(); 	//  createGunzip

var inFile = fs.createReadStream('../test.txt.gz');
var outFile = fs.createWriteStream('../test_un.txt');

inFile.pipe(gunzip).pipe(outFile);