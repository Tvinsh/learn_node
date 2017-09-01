#!/usr/bin/env node
// var argv = require('optimist')
//     .usage('Count the lines in a file.\nUsage: $0')
//     .demand('f')
//     .alias('f', 'file')
//     .describe('f', 'Load a file')
//     .argv
// ;
 
 var fs = require('fs');
// var s = fs.createReadStream(argv.file);
 
// var lines = 0;
// s.on('data', function (buf) {
//     lines += buf.toString().match(/\n/g).length;
// });
 
// s.on('end', function () {
//     console.log(lines);
// });

// var spawn = require('child_process').spawn;

// spawn('cd /Users/tanwei/Desktop/gitcode/qidian-my && npm run dev',{
// 	shell: true,
//     stdio: 'inherit'
// })

// var argv = require('optimist').argv;
// console.log(argv);

var chalk = require('chalk');
var glob = require('glob');
var path = require('path');

// var gutil = require('gulp-util');

// var shellPath = path.resolve(__dirname,'..');
// var rootPath = path.resolve('.');

// console.log(chalk.red(rootPath));

// console.log(chalk.green(shellPath));

// var matched = glob.sync(path.resolve(process.env.PWD, '*.js'));

// console.log(matched)



// var cdpath = gutil.env.path;

// console.log(chalk.blue(cdpath));

// //   ../test.js

// //   node optimist.js --path ../test.js

// var { execSync }  = require('child_process');

// execSync('cd /Users/tanwei/Desktop/gitcode/qidian-my && npm run dev');	// 会执行，但是命令行没有 相应的执行信息

var stat = fs.statSync('/Users/tanwei/Desktop/gitcode/qidian-my/package.json');

console.dir(chalk.green(stat));