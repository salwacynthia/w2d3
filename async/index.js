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

const heading = document.createElement("h1");
heading.setAttribute("id", "countdown");

heading.innerText = "10 seconds";

document.body.appendChild(heading);

let countdown = 10;

const id = setInterval(function() {
  //   heading.innerText = `${countdown} seconds`;
  heading.innerText = `${countdown} ${heading.innerText.split(" ")[1]}`;

  countdown--;

  if (countdown === -1) {
    clearInterval(id);
    // heading.innerText = "Happy new year!!!";

    // element.innerHTML =
    //   "<img src='https://i.ytimg.com/vi/Br1GDaEyICE/maxresdefault.jpg' />";

    document.body.removeChild(heading);

    const img = document.createElement("img");
    img.setAttribute(
      "src",
      "https://i.ytimg.com/vi/Br1GDaEyICE/maxresdefault.jpg"
    );

    document.body.appendChild(img);
  }
}, 1000);
