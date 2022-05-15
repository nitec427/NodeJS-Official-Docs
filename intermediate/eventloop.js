// In most browsers there is an event loop for every browser tab, to make every process isolated and avoid a webpage with infinite loops or heavy processing to block your entire browser.

// In my words. I knew from vanilla JavaScript that JavaScript event loops contains 1 call stack and 1 message queue. Message queue is populated with asynchronous event such as setTimeout, DOM events, fetch responses etc. When they are finished they are placed into to message queue. However, even if they are placed into message queue, they need to wait for call stack to be empty. When call stack becomes empty, job at the beginning of the queue starts execution.

// The thing I learnt from NodeJS explanations. In 2015, ECMAScript announces that if a Promise is executed before current function in the call stack finishes its execution, it is placed rigtht after current function in the call stack.

// Promises are different from asynchronous events in this way.

const bar = () => console.log("bar");
const baz = () => console.log("baz");

const foo = () => {
  console.log("foo");
  setTimeout(bar, 0); // in the end
  new Promise((resolve, reject) => {
    resolve("right after baz before bar. Little little in the middle");
  }).then((resolve) => console.log(resolve));
  baz(); // first baz
};
foo();
// process.nextTick
// when we pass a function to it, we instruct engine to invoke this function at the end of the current operation, before the next event loop tick starts
console.log(console);
