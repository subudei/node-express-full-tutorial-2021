// GLOBALS  - NO WINDOW !!!!!!!!!!

//__dirname     - path to current directory
// __filename   - file name
//require       - fn to use modules (common JS)
//module        - info about current module (file)
//process       - info about env where the program is being executed
console.log(__dirname);
setInterval(() => {
  console.log("hello world");
}, 3000);
console.log(module);
