// Just like browser-side JavaScript offers us events for user interaction, NodeJS also give us events to handle our events.

const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
// The object has(exposes) the on and emit methods

// emit is used to trigger events
// on is used to add a callback when the event is triggered

eventEmitter.on("start", () => {
  console.log("Start event happened");
});

// two seconds later event will be triggered
setTimeout(() => {
  eventEmitter.emit("start");
}, 2000);
let toggle_status = false;
setInterval(() => {
  eventEmitter.emit("toggle", toggle_status);
  toggle_status = !toggle_status;
}, 700);
eventEmitter.on("toggle", (toggle_status) => {
  console.log("Toggle event happens in 700 seconds. Status: ", toggle_status);
});
