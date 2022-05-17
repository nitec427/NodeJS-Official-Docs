// Before interacting with the file in your filesys, you must get a descriptor of it

const fs = require("fs");
const fsPromises = require("fs/promises"); // new with v14
fs.open(
  "D:\\Programming\\python\\myprojs\\cpp\\pthreadsprogrammming.c",
  "r",
  (err, fd) => {
    console.log(fd);
  }
);
async function example() {
  let file_handler;

  try {
    file_handler = await fsPromises.open(
      "D:\\Programming\\python\\myprojs\\cpp\\pthreadsprogrammming.c"
    );
    console.log(file_handler.fd);
    console.log(await file_handler.readFile({ encoding: "utf8" }));
  } finally {
    await file_handler.close();
  }
}
example();
