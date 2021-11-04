const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request event");
  res.end("Hello world !!!");
});

server.listen(5000, () => {
  console.log("Server is listening at port: 5000");
});

// http://localhost:5000/

// first fires : ' "Server is listening at port: 5000" '

// and then fires : ' "request event"
