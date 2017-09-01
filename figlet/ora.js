
'use strict';
const Ora = require('ora');

const spinner = new Ora({
	text: 'Loading unicorns',
	spinner: process.argv[2]
});

spinner.start();

setTimeout(() => {
	spinner.color = 'yellow';
	spinner.text = 'Loading rainbows';
}, 1000);

setTimeout(() => {
	spinner.succeed();
}, 2000);
