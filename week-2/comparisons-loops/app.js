// Conditionals and Comparisons

// Strict comparisons (===, !==)
console.log(10 == "10"); // true
console.log(10 === "10"); // false

// JavaScript is a weakly typed language. We don't have to explicitly say that 58 is = to a number, JS assumes we mean number unless we make it a string
// Exercise 1 Comparison Operators
console.log(1 == 1); // true
console.log(12 != 13); // true
console.log(43 !== "43"); // true
console.log(15 > 9); // true
console.log(0 > 1); // false
console.log("120" == 121); // false
console.log("10" === "10"); // true

//-------------------------------------------------------------
// Conditionals
// If statement
if (1 === 1) {
  console.log("The condition is true");
}

// Else statement
if (1 === 1) {
  console.log("The condition is true");
} else {
  console.log("The condition is false");
}

// If Else statement
if (1 === 1) {
  console.log("The condition is true");
} else if (2 === 2) {
  console.log("The second condition is true");
} else {
  console.log("The condition is false");
}

// Using the square bracket notation, return the value of a certain character
const myString = "aello, it's nice to meet you.";
console.log(myString);

if (myString[0] === "a") {
  console.log(true);
} else {
  console.log(false);
}

// Conditionals: Ternary operator - an alternative way of writing an If Else statement
const word = "abc";
word.length > 10
  ? console.log("The word is long.")
  : console.log("The word is NOT long. It is short.");

// Conditionals: Traditional If Else statement
if (word.length > 10) {
  // we use .length to return the length of the string
  console.log("The word is long.");
} else {
  console.log("The word is NOT long. It is short.");
}
//-------------------------------------------------------------

// Logical operators (and why we need them):
const newWord = "responsiveness";

if (newWord.length > 10) {
  if (newWord.length < 15) {
    console.log("The word is long");
  } else {
    console.log("The word is REALLY long");
  }
}

// && (AND) operator
if (newWord.length > 10 && newWord.length < 15) {
  console.log("The newWord is long");
} else if (newWord.length > 15) {
  console.log("The newWord is REALLY long");
}

// || (OR) operator
if (newWord.length === 0 || newWord.length > 25) {
  console.log("The word is outside of the valid checking range");
}

// Conditionals: Switches
let fruit = "banana";
switch (fruit) {
  case "orange":
    console.log("the fruit is an orange");
    break;
  case "strawberry":
    console.log("the fruit is a strawberry");
    break;
  case "banana":
    console.log("the fruit is a banana");
    break;
  default:
    console.log("fruit not found");
}

// Bonus Example of Conditinals:
const myAnswer = prompt("Enter in your number");

if (Number(myAnswer) === 23) {
  console.log("It was 23");
}

//-------------------------------------------------------------
// LOOPS
// FOR LOOP

// for (initialCount, condition, updateExpression) {
//   code to execute
// }

// Exercise 1
for (let index = 1; index <= 10; index++) {
  console.log(index);
}

// for (let i = 1; i <= 10; i = i + 1) {
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Exercise 2
for (let index = 10; index > 0; index--) {
  console.log("EX 2 LOOP", index);
}

// Exercise 3
const myResString = "Responsiveness";

for (let i = 0; i < myResString.length; i++) {
  console.log(myResString[i]);
}

// WHILE LOOP
// Exercise 4
let numberOfPizzas = 20;
while (numberOfPizzas >= 10) {
  console.log(numberOfPizzas);
  numberOfPizzas--;
}

// A more practical example of using While Loop
let dice = Math.trunc(Math.random() * 6 + 1);
console.log(dice);

while (dice !== 3) {
  dice = Math.trunc(Math.random() * 6 + 1);
  console.log(`It's a ${dice}`);
}
// Exercise 5
const myNewString = "Hell@ the#e";
for (let i = 0; i < myNewString.length; i++) {
  if (myNewString[i] === "@" || myNewString[i] === "#") {
    console.log("error! There is a symbol in there. Found a ", myNewString[i]);
    break; // A "break" will break out of the loop, abandon remaining loop iterations
  }
  console.log(myNewString[i]);
}

// Exercise 6
for (let pizza = 1; pizza <= 10; pizza++) {
  console.log(`Number of pizzas made: ${pizza}`);
}
