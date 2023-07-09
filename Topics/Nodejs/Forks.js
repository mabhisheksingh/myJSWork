//* spawn: The spawn method is used to launch a new process and communicate with it through standard input/output streams. 
//* It is typically used to execute external commands or run scripts. When you use spawn, 
//* you can read the output of the child process and send input to it. Here's an example:

import { spawn } from 'child_process'
import {info,debug,error,log} from 'console'


const child  = spawn('ls', ['-l']);

child.stdout.on('data',(data)=>{
    log("DATA : ",data.toString());
})

child.stderr.on('data', (err)=>{
    warn("Error : ",err.toString());
})

child.on('close', (d)=>{
    log("ON close ",d)
})

child.on('error', err =>{
    error("ERROR : ", err.stack)
})

