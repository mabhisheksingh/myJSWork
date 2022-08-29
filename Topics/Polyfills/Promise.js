import { printInfo,printLog } from "../../Utils/LogUtils.js"

const PENDING = 0;
const FULFILLED = 1;
const REJECTED = 2;

function myPromise(executor){

    let state= PENDING;
    let value = null;
    let handlers = [];
    let catchers = [];
    function resolve( data ){
        if( state !== PENDING ) return;
        state = FULFILLED;
        value = data;
        handlers.forEach( d => d(value));
    }
    function rejected( error ){
        if( state !== PENDING ) return;
        state = REJECTED;
        value = error;
        catchers.forEach( d => d(value));
    }

    this.then=function ( success ){
        if( state === FULFILLED ){
            success(value);
        }else{
            handlers.push(success);
        }
        return this;
    }

    this.catch=function ( reject ){
        if( state === REJECTED ){
            reject(value);
        }else{
            catchers.push(reject);
        }
        return this;
    }

    executor(resolve,rejected);

}


function myWork( resolve,rejected ){

    let run = true;
    if( run )
    {
       setTimeout(() => {
            resolve("this is resolved ");
       }, 3000);
      
    }else{
        rejected(" This is rejected ")
    }
}

const temp  = new myPromise( myWork );

printInfo(temp);
temp.then(d => printLog(d));
