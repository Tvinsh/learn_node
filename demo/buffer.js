// buffer	处理二进制数据	0-255

// 创建 buffer

var buf1 = Buffer.alloc(10);  // 长度为10的buffer，初始值为0x0
var buf2 = Buffer.alloc(10, 1);  // 长度为10的buffer，初始值为0x1
var buf3 = Buffer.allocUnsafe(10);  // 长度为10的buffer，初始值不确定
var buf4 = Buffer.from([1, 2, 3])  // 长度为3的buffer，初始值为 0x01, 0x02, 0x03

//var buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);

var buf = Buffer.from('this is a tést');  // 默认采用utf8
console.log(buf.toString());	// 默认编码是utf8

console.log(buf.toString('ascii'));

// 比较 Buffer  equals

var buf1 = Buffer.from('A');
var buf2 = Buffer.from('A');

console.log( buf1.equals(buf2) );  // true