// buffer

const buf = Buffer.from('hello world','ascii');

console.log(buf.toString('base64'));

console.log(buf.toString('hex'));

console.log(buf.toString('utf-8'));


// 创建两个 Buffer 实例 buf1 与 buf2 ，并拷贝 buf1 中第 16 个至第 19 个字节到 buf2 第 8 个字节起

const buf1 = Buffer.allocUnsafe(26);
const buf2 = Buffer.allocUnsafe(26).fill('!');

for (let i = 0; i < 26; i++) {
  // 97 是 'a' 的十进制 ASCII 值
  buf1[i] = i + 97;
}

buf1.copy(buf2, 8, 16, 20);

// 输出: !!!!!!!!qrst!!!!!!!!!!!!!
console.log(buf2.toString('ascii', 0, 25));