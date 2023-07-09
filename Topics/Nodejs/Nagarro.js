console.log("One");

let waitTime = 5000;

setImmediate(() => {
  console.log("Two");
});

setTimeout(() => {
  console.log("Three");
}, waitTime);

setTimeout(() => {
  console.log("Four");
}, 0);

process.nextTick(() => {
  console.log("six");
});

console.log("Seven");
