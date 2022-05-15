console.log("%o", Number);
const oranges = ["orange", "orange"];
const apples = ["just one apple"];
oranges.forEach((fruit) => {
  console.count(fruit);
});
apples.forEach((fruit) => {
  console.count(fruit);
});

// Inspect stack trrace
const func2 = () => console.trace();
const func1 = () => func2();

func1();

// Calculate the time spent during function call

const doSomething = () => console.log("test");

const measureDoingSth = () => {
  console.time("doSomething()");
  doSomething();
  console.timeEnd("doSomething()");
};
measureDoingSth();

// Progress bar example

const ProgressBar = require("progress");

const bar = new ProgressBar(":bar", { total: 10 });

const timer = setInterval(() => {
  bar.tick();
  if (bar.complete) {
    clearInterval(timer);
  }
}, 1000);
