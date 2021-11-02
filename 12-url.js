const http = require("http");

// callback that takes two parameters, objects, first incoming request and second response
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to the servers home page");
  }
  if (req.url === "/about") {
    res.end("Welcome to the About page");
  } else {
    res.end(`
  <h1>The page can't be reached</h1>
  <a href='/'>back</a>
  `);
  }

  // res.write("Welcome to the servers home page");
  // res.end();
});

server.listen(5000);

// http://localhost:5000/

/* 
paused at 1:40 
*/
