// console.log("Hello");
// console.log("World!");
/*
function printHello() {
  for (let i = 0; i < 1000; i++) {
    console.log("Hello");
  }
  return "Hello printed 1000 times";
}
function printWorld() {
  for (let i = 0; i < 1000; i++) {
    console.log("World!");
  }
  return "World! printed 1000 times";
}

console.time("printHello");
// printHello();
console.timeEnd("printHello");

function cb() {
  console.log("time has elapsed");
}

// setTimeout delays the execution of a callback function to after a delay has elapsed
// setTimeout(cb, 3000);

setTimeout(function() {
  console.log("time has elapsed");
  setTimeout(function() {
    console.log("second setTimeout");
  }, 5000);
}, 3000);

// for (let i = 0; i < 10; i++) {
printWorld();
// }

[1, 2, 3].forEach(function(number) {
  console.log(number);
});

*/

let count = 0;

const intervalId = setInterval(function() {
  //   console.log("are we there yet?");
  count++;
  if (count >= 10) {
    clearInterval(intervalId);
  }
  console.log(new Date().toLocaleString());
}, 2000);

// setTimeout(function() {
//   clearInterval(intervalId);
//   console.log("no more time");
// }, 10000);

// build a simple 10 seconds countdown using DOM manipulations
