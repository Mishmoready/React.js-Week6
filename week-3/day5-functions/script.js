// first function
function myFirstFunction() {
  console.log("I just called my first function");
}
myFirstFunction(); // This is a function call

function greet(userName) {
  console.log("Greetings", userName);
}
greet("Buddy");
greet("Richie");
greet("Rob");

// function with params
function funcWithParams(num1, num2) {
  console.log(num1 + num2);
}

funcWithParams(3, 4);

//-----------Exercise 1-----------

function addString(param1, param2) {
  console.log(param1, param2);
}

addString("Good", "Morning");
addString("Today is", "Monday");

//-----------Exercise 2-----------

function joinStrings(string1, string2) {
  console.log(`${string1} ${string2}`);
}

joinStrings("Hello", "World");
joinStrings("Today is", "Monday");

// return statements
function funcWithParams(num1, num2) {
  return num1 + num2;
  console.log(num1 + num2); // not returned
}

console.log(funcWithParams(3, 4));

let funcAnswer = funcWithParams(3, 4);

if (funcAnswer === 7) {
  console.log("the answer is right");
} else {
  console.log("the answer is wrong");
}

// function expression
const funcWithParamsExpression = function (num1, num2) {
  return num1 + num2;
};

// -----------Exercise 3-----------

function isStringEmpty(string) {
  const stringToCheck = string;
  if (stringToCheck) {
    return true;
  } else {
    return false;
  }
}

console.log(isStringEmpty(""));

// Extra info: Passing Objects as parameters to functions
// example
const person = {
  firstName: "Rob",
  lastName: "Petrie",
};

function printNameFromObject(person) {
  console.log(`Hello ${person.firstName} ${person.lastName}`);
}
printNameFromObject(person);

// Functions in Objects, ie Methods
const person2 = {
  firstName: "Rob",
  lastName: "Petrie",
  greetings: function () {
    console.log("Hello World");
  },
  //   greetings () { // This is the same as above
  //     console.log("Hello World");
  //   },
};

// person.greetings - add a () to run the function
person2.firstName;
person2["firstName"];
person2.greetings();

//-----------Exercise 4-----------
// Part 1
function halfNumber(number) {
  const halvedNumber = number / 2; // could have actually just returned this line as it is
  return halvedNumber;
}

const halfOf6 = halfNumber(6);
console.log(`Half of 6 is ${halfOf6}`);
console.log(`Half of 6 is ${halfNumber(6)}`);

// Part 2
function timeInSeconds(minutes) {
  const timeInSeconds = minutes * 60; // could have actually just returned this line as it is
  return timeInSeconds;
}

const userInputMinutes = parseInt(prompt("Enter in your minutes")); // parseInt grabs the integers if text is included after the integer
alert(`${userInputMinutes} minutes is ${timeInSeconds(userInputMinutes)} seconds.`);

// ---------------------STRING METHODS---------------------
// ---------Exercise 1---------
const userMessage = prompt("Enter your sentence in here:"); // result is stored as a string in the userMessage variable
const trimmedUserMessage = userMessage.trim(); // trim the white space of the ends of the string

if (trimmedUserMessage.length <= 10) {
  alert(trimmedUserMessage.toUpperCase());
} else {
  alert(trimmedUserMessage.toLowerCase());
}

// same as above conditional statement but using the ternary operator
trimmed.length <= 10 ? alert(trimmed.toUpperCase()) : alert(trimmed.toLowerCase());
