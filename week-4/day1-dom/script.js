// -------------- The DOM ---------------
// document.body.innerHTML = "<h1>Hello World</h1>";
// document.body.style.background = "blue";

// Colour change example
let currentColour = 0;
function changeColour() {
  const colourArray = ["white", "blue", "red", "green", "yellow", "orange", "pink"];
  if (currentColour === colourArray.length - 1) {
    currentColour = 0;
  } else {
    currentColour++;
  }
  document.body.style.background = colourArray[currentColour];
}

const helloWorldHeader = document.getElementById("helloWorldHeader");
helloWorldHeader.style.fontSize = "12px";
helloWorldHeader.textContent = "Look! My text content has changed.";

// document.querySelector("h1").textContent = "HEY THERE"; // by element
// document.querySelector(".header-class").textContent = "HEY THERE"; // by class
// document.querySelector("#helloWorldHeader").textContent = "HEY THERE"; // by id

// Exercise 1
const counterEl = document.getElementById("counter");

let counter = 0;
function incrementByOne() {
  counter++;
  counterEl.textContent = counter;
}

// ----------- Event Listeners -----------
// myDiv Event listener example
const myDiv = document.getElementById("divId");

myDiv.addEventListener("mouseover", function () {
  myDiv.style.background = "blue";
});

// This function will only ever affect the myDiv element - not very resueable.
// function changeToPink() {
//   myDiv.style.background = "pink";
// }

// A function that we can use for more than one event listener that is now DYNAMIC using the event property
function changeToPink(e) {
  console.log(e);
  e.target.style.background = "pink";
}

myDiv.addEventListener("mouseout", changeToPink);
helloWorldHeader.addEventListener("mouseover", changeToPink); // we defined helloWorldHeader earlier
// ----------------------------------------

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
  sumResult.textContent = `Result: ${userInput1.value} + ${userInput2.value} = ${
    Number(userInput1.value) + Number(userInput2.value)
  }`;
});
