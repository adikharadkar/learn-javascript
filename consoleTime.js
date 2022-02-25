// console.time() can be used to track how long does an operation takes to execute.
// To use console.time(), you have to give a timer a unique name, then execute the javascript codes.
// And when you call console.timeEnd() with the same name, then the browser will update the time.

const arr = [];
console.time("tracktime");
for (let i = 0; i < 50; i++) {
  arr.push(i);
}
console.timeEnd("tracktime");
console.log(arr);
