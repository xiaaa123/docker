console.log('cli.....')

constprogram=require('commander')
program.version(require('../package').version)
program 
    .command('init <name>') 
    .description('init project') 
    .action(name=> { 
        console.log('init '+name)
    })

program 
    .command('init <name>') 
    .description('init project') 
    .action(require('../lib/init'))

program.parse(process.argv)