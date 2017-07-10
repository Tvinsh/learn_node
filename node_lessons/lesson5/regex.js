
// i 的意义是不区分大小写
// g 的意义是，匹配多个
// m 的意义是，是 ^ 和 $ 可以匹配每一行的开头

console.log( 'hello hell hoo'.match(/h.*?\b/) ) // => [ 'hello', index: 0, input: 'hello hell hoo' ]
console.log( 'hello hell hoo'.match(/h.*?\b/g) ) // => [ 'hello', 'hell', 'hoo' ]

console.log( 'aaa\nbbb\nccc'.match(/^[\s\S]*?$/g) ) // => [ 'aaa\nbbb\nccc' ]
console.log( 'aaa\nbbb\nccc'.match(/^[\s\S]*?$/gm) ) // => [ 'aaa', 'bbb', 'ccc' ]

// \A  字符串开头(类似^，但不受处理多行选项的影响)
// \Z  字符串结尾或行尾(不受处理多行选项的影响)
// \z  字符串结尾(类似$，但不受处理多行选项的影响)

//  js 中，g flag 会影响 String.prototype.match() 和 RegExp.prototype.exec() 的行为

// String.prototype.match() 中，返回数据的格式会不一样，加 g 会返回数组，不加 g 则返回比较详细的信息


// [\s\S]   匹配包括 \n 在内的所有字符