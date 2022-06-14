// A “higher-order function” is a function that accepts functions as parameters and/or returns a function.
//Array Method .reduce() 
//Array Method .forEach() 
//Array Method .filter() 
//Array Method .map()

//! Example 
const area = (radius) => Math.PI*radius*radius;
const perimeter = (radius) => 2*Math.PI*radius;

const circle = [1,2,3,4];


//calculateArea is higher order function
const calculateArea =(arr,area)=>{
    for (let index = 0; index < arr.length; index++) {
        console.log( area( arr[index] ) );
    }
}
calculateArea(circle,area);
console.log("Perimeter");
calculateArea(circle,perimeter);