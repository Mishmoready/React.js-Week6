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

function isStringEmpty(stringToBeChecked) {
  if (stringToBeChecked) {
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

function halfNumber(wholeNumber) {
  const halvedNumber = wholeNumber / 2;
  return halvedNumber;
}

const halfNumber23 = halfNumber(23);
// const userInput = prompt('Enter a whole number');
// const userInputNum = parseInt(userInput);
// const result = halfNumber(userInputNum);
console.log(`Half of 23 is ${halfNumber23}`);

// Part 2
function getTimeInSeconds(timeInMinutes) {
  const timeInSeconds = timeInMinutes * 60;
  return timeInSeconds;
}

const userInputMinutes = Number(prompt("Enter the minutes", "5"));
const timeInSeconds = getTimeInSeconds(userInputMinutes);
alert(`${userInputMinutes} minutes is ${timeInSeconds} seconds`);

// -----------Bonus 1-----------

const joinStrings = (string1, string2) => {
  const combinedString = string1 + " " + string2;
  return combinedString;
};

console.log(joinStrings("Hello", "World"));

// -----------Bonus 2-----------
function isStringEmpty(stringToBeChecked) {
  if (stringToBeChecked === "") {
    return true;
  }
  return false;
}

const isStringEmptyHelloWorld = isStringEmpty("Hello World");
console.log(isStringEmptyHelloWorld);

const isStringEmptyResult = isStringEmpty("");
console.log(isStringEmptyResult);
