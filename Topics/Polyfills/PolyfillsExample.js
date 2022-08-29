import { printInfo,printLog,printError,printWarning } from '../../Utils/utils.js';
// printInfo = console.info;
// printLog = console.log;
// printWarning = console.warn;
//! forEach
//! map
//! filter
//! reduce
//! every
//! some
//! indexOf
//! includes
//! find
//! findIndex

//! forEach polyfill
const arr =[1,2,3,4,5,6,7,8,9,10];

printInfo("-------------------Inbuilt foreach--------------\n")
arr.forEach( (val,index)=>{
    printLog("index : ",index," val : ",val);
})

printInfo("\n-------------------Polyfills foreach--------------\n");
Array.prototype.myForEach= function(callback){
    for (let index = 0; index < this.length; index++) {
        callback(this[index],index,this);
    }
}
arr.myForEach( (val,index,arr)=>{
    printLog("index : ",index," val : ",val," arr : "+arr);
});

//! map polyfill
printInfo("\n-------------------Inbuilt map--------------\n");
let mapOutput = arr.map( (val,index,arr)=> val*2);
printLog(mapOutput);

printInfo("\n-------------------Polyfills map--------------\n");
Array.prototype.myMap = function(callback){
    let tempArr =[];
    for (let index = 0; index < this.length; index++) {
        tempArr.push(callback(this[index],index,this));
    }
    return tempArr;
}
let mapPolyfillsOutput = arr.myMap( (val,index,arr)=> val*2);
printLog(mapPolyfillsOutput);

//! filter polyfill
printInfo("\n-------------------Inbuilt filter--------------\n");
let filterOutput = arr.filter( (val,index,arr)=> val%2==0);
printLog(filterOutput);

printInfo("\n-------------------Polyfills filter--------------\n");
Array.prototype.myFilter = function(callback){
    let tempArr =[];
    for (let index = 0; index < this.length; index++) {
        if(callback(this[index],index,this)) tempArr.push(this[index]);
    }
    return tempArr;
}
let mapFilterOutput = arr.myFilter( (val,index,arr)=> val%2==0);
printLog(mapFilterOutput);

//!reduce
printInfo("\n-------------------Inbuilt reduce--------------\n");
let count =  arr.reduce((pre,curr,index,arr) => pre+curr,1);
printLog("count ",count);

printInfo("\n-------------------Polyfills reduce--------------\n");
Array.prototype.myReduce= function( callback, initialVal){
    printWarning("initialVal is ",initialVal);
    let accumulator = initialVal;
   // let prev = initialVal ?? 0;
    for (let index = 0; index < this.length; index++) {
        accumulator = accumulator? callback(accumulator,this[index],index,arr) : this[index];
       // prev = callback(prev,this[index],index,arr); 
    }
    return accumulator;
}
let myCount =  arr.myReduce((pre,curr,index,arr) => pre+curr);
printLog("myCount ",myCount);

//!findIndex
printInfo("\n-------------------Inbuilt findIndex--------------\n");
let elementIndex =  arr.findIndex( (element )=> element>5);
printLog("elementIndex ",elementIndex," and its value : ", arr[elementIndex]);
printInfo("\n-------------------Polyfills findIndex--------------\n");
Array.prototype.myFindIndex = function( callback){
    for (let index = 0; index < this.length; index++) {
        if(callback( this[index])){
            return index;
        }
    }
    return undefined;
}
let myElementIndex =  arr.myFindIndex((element) => element> 4);
printLog("myElementIndex ",myElementIndex ," and its value : ", arr[myElementIndex]);

//!flat

printInfo("\n----------------------Polyfills flat on array -------------------\n");

const tempArray = [1,2,3,4,,[5,6,7],[[[122,223]]],[[22,33]]];
console.log(tempArray);
const depth = function( arr,reduce){
    let temp =[];
    if( reduce === 1 ) return arr;
    let arrLen = arr.length;
    for (let i = 0; i < arrLen; i++) {
        if(Array.isArray( arr[i] )){
            temp.push( ...depth( arr[i],reduce - 1 ));
        }
        else if( typeof arr[i] === 'number')
        temp.push(arr[i]);
    }
    return temp;
}
Array.prototype.myFlat =  function(reduce){
    reduce = reduce ?? 1;
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        if(typeof this[i] === 'undefined'  ) continue;
        if(typeof this[i] === 'number' || reduce === 1){
            temp.push( this[i]);
        }
        else if( reduce > 1){
            let tempArr = depth( this[i],reduce-1);
           // console.log( " tempArr ",tempArr )
            temp.push( ...tempArr );
        }
        
    }
    return temp;
}

let newArr  = tempArray.myFlat(2);
console.log(" newArr ", newArr);
console.log(" newArr Len ", newArr.length);

//!flat object
printInfo("\n----------------------Polyfills flat on object -------------------\n");
let a = { b:{ c:{d:23,e:{f:45}}},b1:45};
console.log( a );
const objectReduce = function (obj, reduceLevel,Mainkey){
    console.log(" js ", obj , " re  ", reduceLevel)
    if( reduceLevel === 1 ) return {keyi : Mainkey,keyv : obj };
    let temp ={keyi : '',keyv : '' };
    for (const key in obj) {
        if( typeof obj[key] !== 'object' ){
            temp.keyi = key;
            temp.keyv = obj[key];
        }
        else {
            let { keyi:tempi , keyv:tempv } = objectReduce( obj[key] ,reduceLevel  - 1,key );
            temp.keyi =temp.keyi+'.'+  tempi;
            temp.keyv =tempv;
        }
    }
    return temp;

}
const myFlatObject  = function (thisArg , reduceLevel){
    let output ={};
    reduceLevel = reduceLevel ?? 1;
    if( reduceLevel === 1) return thisArg;
    for (const key in thisArg) {
        if( typeof thisArg[key] !== 'object' ||  reduceLevel === 1 )
            output[key]= key;
        else if( reduceLevel > 1){
            let { keyi , keyv } = objectReduce( thisArg[key] ,reduceLevel  - 1 ,key );
            output[ key+"."+keyi ] = keyv;
        }
    }
    return output;

}

let temp = myFlatObject( a ,4 );
console.log( "Temp : ",temp )







