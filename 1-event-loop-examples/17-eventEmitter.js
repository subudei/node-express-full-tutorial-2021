const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response_one", () => {
  console.log(`data recived !!!`);
});
customEmitter.on("response_one", () => {
  console.log(`some other logic on same listen (.emit) method`);
});
customEmitter.emit("response_one");

////////////////////////////////////////////////

customEmitter.on("response_two", (name, id) => {
  console.log(`data of user ${name}, with ID: ${id}`);
});
customEmitter.emit("response_two", "Pablo", "0001");
