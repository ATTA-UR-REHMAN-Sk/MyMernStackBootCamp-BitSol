//WEB API (Browsers => CallBackQuee => EventLoop)(CallStack.JS => GEC)
// console.log("start");
// setTimeout(function cb() {
//   console.log("I am Call Back fun");
// }, 2000);
// console.log("End");

// WEB API Feching(MicroStackQueue =>returnAPI => GEC)
console.log("start");
setTimeout(function cb() {
  console.log("I am Call Back fun");
}, 2000);
let fatch = fetch("https://www.youtube.com/watch?v=ZxLKB3LvlVg")
  .then(console.log("then condition implements.."))
  .catch(console.log("Catching Execution performed..."));

console.log("Feching Consol permormed : ", fatch);
console.log("End");
