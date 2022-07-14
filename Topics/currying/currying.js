// Why should I use currying?
// There are several reasons why currying is ideal:

// Currying is a checking method to make sure that you get everything you need before you proceed
// It helps you to avoid passing the same variable again and again
// It divides your function into multiple smaller functions that can handle one responsibility. This makes your function pure and less prone to errors and side effects
// It is used in functional programming to create a higher-order function
// This could be personal preference, but I love that it makes my code readable

// How does currying work?
// Currying is a function that accepts multiple arguments. It will transform this function into a series of functions, where every little function will accept one argument:

//Not curried example
function add(a,b,c){
    return a=b+c;
}

console.log("Not Curring : "+add(1,2,3));
//Curring  example
function sum(a){
    return (b)=>{
        return (c)=>{
            return a+b+c;
        }
    }
}
console.log("Curring : "+sum(1)(2)(9));

//we can also call with the help of bind
const curry = add.bind(this,5);
// console.log(curry);
console.log("With the help of bind ", curry(5,5));


//with the help of closure and bind