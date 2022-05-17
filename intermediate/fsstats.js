const fs = require("fs");

fs.stat(
  "D:\\Programming\\python\\myprojs\\cpp\\pthreadsprogrammming.c",
  (err, stats) => {
    if (err) console.error(err);
    console.log(stats.isFile());
    console.log(stats.isDirectory());
    console.log(stats.isSymbolicLink());
    console.log(stats.size);
  }
);
