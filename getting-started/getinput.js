const read_line = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

read_line.question("What's your name : ", (name) => {
  console.log(`Hi ${name}!`);
  read_line.close();
});
