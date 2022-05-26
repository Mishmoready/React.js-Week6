/// CODE FROM START OF CLASS (separate to today's lesson)

// const myRandomArray = [
//   1,
//   5,
//   true,
//   false,
//   "string",
//   { name: "john", age: 55, favouriteColour: ["blue", "green"] },
//   { name: "sally", age: 25, favouriteColour: ["red", "pink"] },
// ];

// const usersName = prompt("Enter your name").toLowerCase();
// console.log(usersName);

// for (let element of myRandomArray) {
//   // console.log(element);
//   if (usersName === element.name) {
//     console.log(...element.favouriteColour);
//   }
// }

// -------------- The DOM ---------------

// Colour change example
let currentColour = 0;
function changeColour() {
  const colourArray = ["white", "blue", "red", "green", "yellow", "orange"];
  if (currentColour === colourArray.length - 1) {
    currentColour = 0;
  } else {
    currentColour++;
  }
  document.body.style.background = colourArray[currentColour];
}

const helloWorldHead = document.getElementById("helloWorldHeader");
helloWorldHead.style.fontSize = "12px";
helloWorldHead.textContent = "Look! My text content has changed.";

// const helloWorldHead = document.querySelector("h1"); // element
// const helloWorldHead = document.querySelector(".header-class"); // class
// const helloWorldHead = document.querySelector("#helloWorldHeader"); // id name

// Exercise 1
const counterValue = document.getElementById("counter");

let initial = 0;
function incrementByOne() {
  initial++;
  counterValue.textContent = initial;
}

// Event Listener
const myDiv = document.getElementById("divId");
myDiv.addEventListener("mouseover", function () {
  myDiv.style.background = "blue";
});

function changeToWhite(e) {
  e.target.style.background = "white";
  console.log(e);
}

// Mouseout demo just for fun
myDiv.addEventListener("mouseout", changeToWhite);

// Exercise 2
const inputElement = document.querySelector("input");
const characterCount = document.querySelector("#character-count");
inputElement.addEventListener("input", logValue);
function logValue(e) {
  console.log(e.target.value.length);
  characterCount.textContent = e.target.value.length;
}

// Exercise 3
const userInput1 = document.getElementById("user-input1");
const userInput2 = document.getElementById("user-input2");
const sumBtn = document.getElementById("sum-btn");
const sumResult = document.getElementById("sum-result");
sumBtn.addEventListener("click", function () {
  sumResult.textContent = `Result: ${userInput1.value} + ${
    userInput2.value
  } = ${Number(userInput1.value) + Number(userInput2.value)}`;
});
