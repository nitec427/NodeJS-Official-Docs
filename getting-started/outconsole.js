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
