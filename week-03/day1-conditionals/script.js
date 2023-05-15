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

// ---------- Exercise 1 ----------
const myNumber = 0;
if (myNumber > 0) {
  console.log("Positive number!");
} else if (myNumber < 0) {
  console.log("Negative number!");
} else {
  console.log("The number is 0!");
}

// Using the square bracket notation, return the value of a certain character
const myString = "Hello, it's nice to meet you.";
console.log(myString);

// ---------- Excercise 2 ----------
if (myString[0] === "a") {
  console.log(true);
} else {
  console.log(false);
}

// the same as above but amended just for fun
if (myString[0] === "a") {
  console.log("The letter does begin with 'a'.");
} else {
  console.log("The letter you entered, '" + myString[0] + "' is not an 'a'.");
}

// Conditionals: Ternary operator - an alternative way of writing an If Else statement
const word = "hippopotamus";

word.length > 10 ? console.log("the word is long") : console.log("The word is NOT long. It is short.");

// Conditionals: Traditional If Else statement
if (word[0] === "h") {
  // we use .length to return the length of the string
  console.log("The word might be hippopotamus");
} else {
  console.log("The word is definitely not hippopotamus");
}

// ---------- Exercise 3 ----------
word[0] === "h" ? console.log("The word might be hippopotamus") : console.log("The word is definitely not hippopotamus");

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
  console.log("The string is empty, or is greater than 25 characters!");
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

// Bonus Example of Conditionals:
const myAnswer = prompt("Enter in your number");

if (Number(myAnswer) === 23) {
  console.log("It was 23");
}
