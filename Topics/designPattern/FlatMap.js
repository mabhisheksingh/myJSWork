import {data}  from  '../../Utils/data.js';
import  { printInfo, printWarning,printError } from  '../../Utils/LogUtils.js'
// printInfo("------------printing data ---------------")
// console.info(data)
printError("------------Processing start ---------------")

const process = data.flatMap( d => {
    if( d['pocPrimary']){
        const temp = {
            id: d['pocPrimary'].id,
            name: d['pocPrimary'].firstName +" "+d['pocPrimary'].lastName,
            email:d['pocPrimary'].email,
        }
       d = {...d,...temp} 
    }else{
        const temp = {
            id: d['pocSecondary'].id,
            name: d['pocSecondary'].firstName +" "+d['pocSecondary'].lastName,
            email: d['pocSecondary'].email,
        }
        d = {...d,...temp}
    }
    return d;
})

console.warn( process )