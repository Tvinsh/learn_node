var args = require('minimist')(process.argv.slice(2));

console.log(args.hello);


// node minimist.js --hello=world		world

// node minimist.js --hello world       world

// node minimist.js --hello				true



var args = require('minimist')(process.argv.slice(2)， {
    string: ["hello"]
});

console.log(args.hello);

// node minimist.js --hello world       world

// node minimist.js --hello				""


var args = require('minimist')(process.argv.slice(2)， {
    boolean: ["hello"]
});

console.log(args.hello);
console.log(args._);

// node minimist.js --hello world
// true
// [ 'world' ]

// node minimist.js --hello
// false
// []

//hello将一直被解析成true或false，添加的world会保存到args的_选项里面