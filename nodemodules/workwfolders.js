const fs = require("fs");
const path = require("path");
const fold_name = "Ismail";

try {
  if (!fs.existsSync(fold_name)) {
    fs.mkdirSync(fold_name);
  }
} catch (e) {
  console.log(e);
}

console.log(
  fs.readdirSync(fold_name).map((fn) => {
    return path.join(fold_name, fn);
  })
);

// filter files as folders and normal files

const is_file = (fn) => {
  return fs.lstatSync(fn).isFile();
};
console.log(
  fs
    .readdirSync(fold_name)
    .map((fn) => {
      return path.join(fold_name, fn);
    })
    .filter(is_file)
);
