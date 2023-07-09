//** fork: The fork method is a variation of spawn specifically designed for creating child processes that run Node.js modules.
//** When you use fork, the child process runs a separate instance of the V8 JavaScript engine and has its own Node.js event loop.
//** This allows you to create separate instances of your application, which can be useful for achieving parallelism or
//** building a cluster of Node.js processes. Here's an example:

import {fork}  from 'child_process'

const child_fork =  fork('./Forks.js');

child_fork.on('message', data =>{
    console.log(`Received message from child process: ${message}`);
})

child_fork.send("Successfully done");

child_fork.on('close', data =>{
    console.log("Close ", data)
})
child_fork.on('error', data =>{
    console.log("Error  ", data)
})
child_fork.on('exit', data =>{
    console.log("exit ", data)
})

child_fork.on('disconnect', data =>{
    console.log("disconnect ", data)
})