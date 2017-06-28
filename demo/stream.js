// stream   需要了解stream的运行机制

// 分类

// Readable：用来读取数据，比如 fs.createReadStream()。

		// http.IncomingRequest
		// fs.createReadStream()
		// process.stdin
		// ....


// Writable：用来写数据，比如 fs.createWriteStream()。
// Duplex：可读+可写，比如 net.Socket()。
// Transform：在读写的过程中，可以对数据进行修改，比如 zlib.createDeflate()（数据压缩/解压）。