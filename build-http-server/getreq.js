const https = require("https");

const options = {
  hostname: "jsonplaceholder.typicode.com",
  path: "/comments",
  port: 443,
  method: "GET",
};

const req = https.request(options, (res) => {
  console.log("Status code" + res.statusCode);
  res.on("data", (d) => {
    process.stdout.write(d);
  });
});

req.on("error", (error) => {
  console.log("An error occurred: " + error);
});

req.end();
