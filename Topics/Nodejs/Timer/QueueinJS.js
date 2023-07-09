console.log("Difference between Queue in JS");

function diffFunction(...args) {
  (this.Callback_Queue = args[0]), (this.Microtask_Queue = args[1]);
}

const diff = {};

diff.o1 = new diffFunction(
  "Callback Queue gets the ordinary callback functions coming from the setTimeout() API after the timer expires.",
  "Callback Queue has lesser priority than Microtask Queue of fetching the callback functions to Event Loop."
);

diff.o2 = new diffFunction(
  "Microtask Queue gets the callback functions coming through Promises and Mutation Observer",
  "Microtask Queue has higher priority than Callback Queue of fetching the callback functions to Event Loop."
);

console.table(diff);

// // timeout_vs_immediate.js
// setTimeout(() => {
//   console.log("timeout");
// }, 0);

// setImmediate(() => {
//   console.log("immediate");
// });
