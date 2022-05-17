// streams are instances of EventEmitter classes
// They were created decades ago in Unix OS and programs can interact with each other through the pipe operator

// Why streams

// Memory efficency (Read part by part)
// Time efficency (Do not wait for whole data payload is available)

/* const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
  fs.readFile(`${__dirname}/data.txt`, (err, data) => {
    res.end(data);
  });
});
server.listen(3000); */

// Rather than reading file by whole do this

const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  const stream = fs.createReadStream(`${__dirname}/data.txt`);
  stream.pipe(res);
});
server.listen(3000);

// What pipes do

// pipe is called ob the file stream

// It takes the source and pipes into the destnation
// Writable, Readable, Duplex, Transform (4 types of stream)

const Stream = require("stream");
const readableStream = new Stream.Readable({
  read() {},
});

const writeableStream = new Stream.Writable();

writeableStream._write = (chunk, encoding, next) => {
  console.log(chunk.toString());
  next();
};

readableStream.pipe(writeableStream);

readableStream.push("hi!");
readableStream.push("ho :-D");

readableStream.on("close", () => writeableStream.end());

writeableStream.on("close", () => console.log("ended"));

readableStream.destroy();
