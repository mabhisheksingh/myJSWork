//!function statement or function definition
function a(){
    console.log("Function Statement or function definition");
}
//!function expression 
var b = function (){
    console.log("Function Expression");
}

//! Anonymous function
//A function does not have name 
//Example below
// function (){
//     console.log("Function Expression");
// }

// !named function expression
// A named function assign to a varible is called named function 
// var b = function axy (){
//     console.log("Function Expression");
// }

//* Note we can access axy from outside of function we use it inside only

//! Arrow function
const a  = ()=> {
    console.log("Arrow function..");
}

//First class function
// *First-Class Function: A programming language is said to have First-class functions if functions in that language are treated like other variables. So the functions can be assigned to any other variable or passed as an argument or can be returned by another function.

