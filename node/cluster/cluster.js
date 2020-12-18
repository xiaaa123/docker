var cluster=require('cluster');
var os=require('os'); 
// 获取CPU 的数量
var numCPUs=os.cpus().length;
var process=require('process')
var workers= {};
if (cluster.isMaster) { 
    // 主进程分⽀ 
    cluster.on('exit', (worker, code, signal) => { 
        console.log('⼯作进程 %d 关闭 (%s). 重启中...', 
            worker.process.pid, signal||code
        ); 
        delete workers[worker.process.pid] 
        worker=cluster.fork() 
        workers[worker.process.pid] =worker 
    }); 
    console.log('numCPUs:', numCPUs) 
    for (var i=0; i<numCPUs; i++) { 
        var worker=cluster.fork(); 
        console.log('init ... pid', worker.process.pid) 
        workers[worker.process.pid] =worker; 
    }
} else { 
    var app=require('./app'); 
    app.listen(3000);
}
// 当主进程被终⽌时，关闭所有⼯作进程
process.on('SIGTERM', function () { 
    for (var pid in workers) { 
        process.kill(pid); 
    } process.exit(0);});

require('./test') 