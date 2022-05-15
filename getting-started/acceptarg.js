// The way you retrieve argv is with process object

process.argv.forEach((val, ind) => {
  console.log(`${ind}: ${val} `);
});

const myArgs = process.argv.slice(2);
console.log(myArgs);

// Use minimist to obtain

const argsGiven = require("minimist")(process.argv.slice(2));
console.log(argsGiven.name);
// Use (--) double dashes if you want to parse with minimist
