const fs = require('fs');
const path = require('path');
const iconv = require('iconv-lite'); 	// Pure JS character encoding conversion
const readline = require('readline');
const chalk = require('chalk');

var readStream = fs.createReadStream(path.join(__dirname, './chuanqi.lrc')).pipe(iconv.decodeStream('utf-8'));
var rl = readline.createInterface({input: readStream});

var regex =  /\[(\d{2}):(\d{2})\.(\d+)\](.+)/;

rl.on('line', function(line) {
	var time = regex.exec(line);

	
	console.log(chalk.green(time));

	if(time) {
		var m = parseInt(time[1]);
	    var s = parseInt(time[2]);
	    var ms = parseInt(time[3]);
	    var all = m * 60 * 1000 + s * 1000 + ms;
	    setTimeout(function() {
	      console.log(time[4]);
	    }, 500);
	} else {
		console.log(line);
	}
})
