const { readFile } = require("fs");

console.log("started first task");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("complited first task");
});

console.log("started next task");
