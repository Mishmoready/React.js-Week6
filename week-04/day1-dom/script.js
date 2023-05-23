console.log("I'm connected");
// -------------- The DOM ---------------
// document.body.innerHTML = "<h1>Hello World</h1>";
// document.body.style.background = "blue";

// Colour change example
let currentColour = 0;
// function changeColour() {
//   if (document.body.style.background === "blue") {
//     document.body.style.background = "white";
//   } else {
//     document.body.style.background = "blue";
//   }
// }

function changeColour() {
  const colourArray = ["white", "blue", "red", "green", "yellow", "orange", "pink"];
  if (currentColour === colourArray.length - 1) {
    currentColour = 0;
  } else {
    // currentColour = currentColour + 1;
    currentColour++; // shorthand for the above
  }
  console.log(document.body.style.background);
  document.body.style.background = colourArray[currentColour];
}

// Common Selectors (these examples are all selecting the same element)
const headerEl = document.getElementById("header-id");
document.querySelector("h1");
document.querySelector("#header-id");
document.querySelector(".header-class");

headerEl.style.fontSize = "30px";
headerEl.textContent = "Look! My text content has changed.";

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

//// What if we wanted to add this practically the event listener to another element?
//// Well, right now we will violate the Don't Repeat Yourself (DRY) principle
// someOtherElement.addEventListener("mouseover", function () {
// someOtherElement.style.background = "blue"; // practically the same as the above event listener
// });

//// So, we create an external function that we can call in as many event listeners as we want.
//// But, as it is currently written, it will only ever affect the myDiv element - not very resueable.
// function changeToYellow() {
//   myDiv.style.background = "yellow";
// }

// A function that we can use for more than one event listener that is now DYNAMIC using the event.target property
function changeToYellow(event) {
  console.log(event);
  console.log(event.target);
  event.target.style.background = "yellow";
}

myDiv.addEventListener("mouseout", changeToYellow);
headerEl.addEventListener("mouseover", changeToYellow); // we defined headerEl earlier
// ----------------------------------------

// Exercise 2
const inputEl = document.querySelector("input");
const characterCount = document.querySelector("#character-count");

inputEl.addEventListener("input", logValue);
function logValue(e) {
  console.log(e.target.value.length);
  characterCount.textContent = e.target.value.length;
}

// Exercise 3
const userInput1 = document.getElementById("user-input1");
const userInput2 = document.getElementById("user-input2");
const sumResult = document.getElementById("sum-result");
const sumBtn = document.getElementById("sum-btn");

sumBtn.addEventListener("click", function () {
  sumResult.textContent = `Result: ${userInput1.value} + ${userInput2.value} = ${
    Number(userInput1.value) + Number(userInput2.value)
  }`;
});
