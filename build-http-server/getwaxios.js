// Get with axios

const axios = require("axios");

axios
  .get("https://jsonplaceholder.typicode.com/todos")
  .then((res) => {
    console.log("Status code" + res.statusCode);
    console.log(res);
    console.log(typeof res);
  })
  .catch((err) => {
    console.error(err);
  });
