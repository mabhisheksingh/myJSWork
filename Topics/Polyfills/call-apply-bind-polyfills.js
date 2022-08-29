
import { printInfo,printLog } from '../../Utils/utils.js'

let user ={
    firstName:'Abhishek',
    lastName:'Singh'
}
let printFunction = function (state,city){
   printInfo("FN: "+this.firstName, " LN: "+this.lastName," State : "+state, " city ",city);
}

printLog('hello world ');
//!apply
//#inbuilt apply
printFunction.apply(user,['apply_UP','apply_all']);
//#user defined apply
Function.prototype.myApply = function(context,args){
    context._this =  this;
    context._this(...args);
}
printFunction.myApply(user,['myApply_UP','myApply_all']);



//!call polyfills
//#inbuilt call
printFunction.call(user,'call_UP','call_ALL');
//#user defined call

Function.prototype.myCall = function(...args){
    const obj =  this;
    const newThis = args[0];
    // const params = {...args.slice(1)};
    // console.log(" params " ,params);
    obj.apply(newThis,args.slice(1));
}

Function.prototype.myCall1 = function(context,...args){
    context._this =  this;
    context._this(...args);
}


printFunction.myCall(user,'myCall_UP','myCall_All');
printFunction.myCall(user,'myCall1_UP','myCall1_All');

//!bind polyfills
//inbuilt bind
const testFunc = printFunction.bind(user,"UP");
testFunc("Allahabad");

//user defined bind
Function.prototype.myBind = function(...args){
    const obj = this; //this store printFunction object reference
    return function(...args1){
        let params = args.slice(1);
        const objRef = args[0];
        obj.apply(obj,[...params,...args1]);
    }
}
const testMyFunc = printFunction.myBind(user,"myBind_UP");
testMyFunc("myBind_Allahabad");

Function.prototype.myBind1 = function(scope,...args){
    scope._this = this;
    // console.log(scope);
    return function(...args1){
        // console.log(args1,args);
        // const arg = {...args,...args1}
        return scope._this(...[...args,...args1]);
    }
}

const testMyFunc1 = printFunction.myBind1(user,"myBind1_UP");
testMyFunc1("myBind1_Allahabad");
