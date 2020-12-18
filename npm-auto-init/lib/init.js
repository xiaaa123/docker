const {promisify} =require('util')
const figlet=promisify(require('figlet'))
const clear=require('clear')
const chalk=require('chalk')
const log=content=>console.log(chalk.green(content))
const {clone} =require('./download')

module.exports=async name=> { 
    // 打印欢迎画⾯ 
    clear() 
    const data=awaitfiglet('KKB Welcome') 
    log(data)
}

module.exports.init=async name=> { 
    // console.log('init ' + name) 
    
    log('创建项⽬:'+name) 
    // 从github克隆项⽬到指定⽂件夹 
    await clone('github:su37josephxia/vue-template', name)
}

