//** https://nodejs.org/en/docs/guides/timers-in-node

let timer = 0
let noOfTimeIntervalRun = 5

//! Set time out
//** setTimeout() can be used to schedule code execution after a designated amount of milliseconds. 
// ** This function is similar to window.setTimeout() from the browser JavaScript API, however a string of code cannot be passed to be executed.

// ** setTimeout() accepts a function to execute as its first argument and the millisecond delay defined as a number as the second argument. 
// ** Additional arguments may also be included and these will be passed on to the function. Here is an example of that:

console.log("********************setTimeout start*************************")
const b = setTimeout(myFun, timer ,"Abhishek", "Singh");

// console.log("Return timeout obj : and we use cleartimeout to cancel the settimeout", b)

function myFun(...params) {
    console.log("Is array ? : ",Array.isArray(params));
    console.log("SetTimeOut name : ",params[0], " Last name : ", params[1]); 
}

// clearTimeout(b);
console.log("********************setTimeout End*************************")


//! setImmediate
// ** setImmediate() will execute code at the end of the current event loop cycle. This code will execute after any I/O operations in 
//** the current event loop and before any timers scheduled for the next event loop. This code execution could be thought of as happening "right after this",
//** meaning any code following the setImmediate() function call will execute before the setImmediate() function argument.


console.log("********************setImmediate start*************************")
console.log("First")

const a = setImmediate( (...params)=>{
    console.log("setImmediate name : ",params[0], " Last name : ", params[1]); 
},"Abhishek","Singh");

// console.log("Return timeout obj : and we use cleartimeout to cancel the setImmediate", a)
console.debug("Second")

// clearImmediate(a);
console.log("********************setImmediate End*************************")


// !"Infinite Loop" Execution ~ setInterval()
/* 
*In terms of priority, setTimeout has a higher priority than setInterval. This means that setTimeout callbacks will be executed before setInterval callbacks,
*even if they were scheduled with the same delay.

*The reason for this is that setTimeout callbacks are scheduled in the event loop's task queue, while setInterval callbacks are scheduled in the microtask queue. 
* The task queue is executed before the microtask queue, so setTimeout callbacks will always be executed first.
*/
// **If there is a block of code that should execute multiple times, setInterval() can be used to execute that code. 
// **setInterval() takes a function argument that will run an infinite number of times with a given millisecond delay as the second argument. 
// **Just like setTimeout(), additional arguments can be added beyond the delay, and these will be passed on to the function call. 
// **Also like setTimeout(), the delay cannot be guaranteed because of operations that may hold on to the event loop, and therefore 
// **should be treated as an approximate delay. See the below example:
console.log("********************setInterval Start*************************")
let count = 0;
function intervalFunc(...args) {
    console.log('Cant stop me now!',args);
    count++;
    if(count === noOfTimeIntervalRun)
        clearInterval(c)
  }
  
let c = setInterval(intervalFunc, timer,"abhishek");


console.log("********************setInterval End*************************")


//! process.nextTick()

console.log("********************process.nextTick() Start*************************");


console.log("********************process.nextTick() End*************************")



