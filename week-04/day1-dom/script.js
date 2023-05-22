console.log("I'm connected");
// document.body.innerHTML = "<h1>Good morning world</h1>";
// document.body.style.background = "blue";

// function changeColour() {
//   if (document.body.style.background === "blue") {
//     document.body.style.background = "white";
//   } else {
//     document.body.style.background = "blue";
//   }
// }

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
console.log(document);

// Selectors
document.querySelector(".header-class").textContent = "Look! My text content has changed.";
document.querySelector("#header-id").style.fontSize = "75px";

document.getElementById("header-id").style.color = "green";
document.getElementsByClassName("header-class")[0].style.fontSize = "80px";
console.log(document.getElementsByClassName("header-class"));

const helloWorldHeader = document.getElementById("helloWorldHeader");
helloWorldHeader.style.fontSize = "10px";
helloWorldHeader.textContent = "Hello to you all.";

const counterEl = document.getElementById("counter");

// Exercise 1
let counter = 0;
function incrementByOne() {
  counter++;
  console.log(counter);
  counterEl.textContent = `Counter: ${counter}`;
}
