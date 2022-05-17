const http = require("http");
const axios = require("axios");
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Accept-Charset", "UTF-8");
  res.end("<h1>Çava bien</h1>");
});

server.listen(port, () => {
  console.log("Server listening on port " + port);
});

// Perform GET request with axios
