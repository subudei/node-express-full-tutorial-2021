const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  res.end("Welcome");
});

server.listen(5000, () => {
  console.log("Server is listening at port: 5000");
});

// http://localhost:5000/

// first fires : ' "Server is listening at port: 5000" '

// and then fires : ' "request event"
