//In JavaScript, the this keyword refers to an object.
// every function gets this property automatically.
let ab ="A"
var a ="Abhishek";
function add(a,b){
    let A="Aaa"
    console.log("A+b "+ this.a ," ", this.a);
}
add( 5 + 6 );
let user={
    firstName:'Abhishek',
    secondName: 'Singh',
    calc:function (){
        console.log("Ab ", this.firstName);
    }
}
user.calc()
const print = function(testingParamter){
    console.log(this);
    console.log("FirstName: "+this.firstName+" LastName : "+this.lastName," testingParamter "+testingParamter);
}
let userOne={
    firstName:'Abhishek',
    lastName:'Singh',
}
let userTwo={
    firstName:'Abhishek',
    lastName:'Singh',
}

//#Arrow functions aren't suitable for call, apply and bind methods, which generally rely on establishing a scope.
//#Calling without an object: this == undefined
//#Arrow functions have no “this” by default "this" represent global window but in strict mode it by default "undefined" 
//#In JavaScript, the this keyword refers to an object.
//!call example
print.call(userOne,"Testing")
print.call(userTwo,"Testing")
print.apply(userOne,["Testing"])
print.apply(userTwo,["Testing"])