// readline  实现逐行读取

// 将用户输入的小写单词转为大写的
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Please input a word: ', function(answer){
//     console.log('You have entered {%s}', answer.toUpperCase());
//     rl.close();
// });



const readline = require('readline');
const fs = require('fs');

function completer(line) {
    const command = 'npm';
    const subCommands = ['help', 'init', 'install'];

    // 输入为空，或者为npm的一部分，则tab补全为npm
    if(line.length < command.length){
        return [command.indexOf(line) === 0 ? [command] : [], line];
    }

    // 输入 npm，tab提示 help init install
    // 输入 npm in，tab提示 init install
    let hits = subCommands.filter(function(subCommand){ 
        const lineTrippedCommand = line.replace(command, '').trim();
        return lineTrippedCommand && subCommand.indexOf( lineTrippedCommand ) === 0;
    })

    if(hits.length === 1){
        hits = hits.map(function(hit){
            return [command, hit].join(' ');
        });
    }
  
    return [hits.length ? hits : subCommands, line];
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  completer: completer
});

rl.prompt();

