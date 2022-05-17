const fs = require("fs");

fs.readFile(
  // Asynchronous version
  "D:\\Programming\\python\\myprojs\\cpp\\pthreadsprogrammming.c",
  "utf8",
  (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  }
);
