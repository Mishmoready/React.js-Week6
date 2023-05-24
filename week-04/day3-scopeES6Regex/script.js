// ------------------ SCOPE ------------------
// function printer() {
//   const paper = "The NY Times";
//   console.log(paper); // We can access the variable "paper" in here
// }
// console.log(paper); // We can't access the variable "paper" in here

function printer() {
  let paper = "The NY Times";
  if (true) {
    console.log(paper);
    let advert = "cap for sale";
  }
  console.log(advert); // advert is block scoped so we can't access it
}

const myName = "Ewan";
function sayHi() {
  const myName = "Rob";
  console.log(myName + " says good morning.");
  function sayHi2() {
    console.log(myName + " says good morning again");
  }
}
sayHi();
// sayHi2(); // it is block scoped so we can't access it

// ------------------ ARROW FUNCTIONS ------------------
// Traditional Function
// function sum(firstNum, secondNum) {
//   console.log("I am finding the sum");
//   return firstNum + secondNum;
// }

// Arrow function =>
// const sum = (firstNum, secondNum) => {
//   console.log("I am finding the sum");
//   return firstNum + secondNum;
// }

// console.log(sum(1, 2));

// Create an arrow function that takes in two strings, combines the two and returns the result.

/*
const combinedString = (firstStr, secondStr) => {
  return firstStr + " " + secondStr;
}
*/

// If and only if there is just 1 statement in the fns
// No {} required + No return needed.
const combinedString = (firstStr, secondStr) => firstStr + " " + secondStr;

console.log(combinedString("Hello", "World"));

/**
 * Write a function to find the double to a number
 * Eg, input => 10, output => 20
 */

function doubleNum(num) {
  return num * 2;
}

const doubleNum1 = (num) => {
  return num * 2;
};

const doubleNum2 = (num) => num * 2;

// We can remove the () if there is only one parameter.
const doubleNum3 = (num) => num * 2;


//Arrow Function Exercise 
//1. Write an arrow function that takes in two parameters and divides the first with the second and returns the result.
const divideNum = (num1, num2) => num1 / num2;
//2. Write an arrow function that checks if a number is even and returns true if it is. [Hint: use the % operator]
const isEven = num1 => num1 % 2 === 0;

//Default Parameters Exercise
const divideNum2 = (num1, num2 = 1) => {
      return num1 / num2;
    };
  console.log(divideNum2(6, 3));
  console.log(divideNum2(10)); // Should print the same number

//Spread Operator Exercise
let arr1 = [1,2,3];
let arr2=["A","B","C"]

const newArray = [...arr1,...arr2]
console.log(newArray)
  

// ------------------ REGEX ------------------
//String.match(regex)
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const myRegex = /a|b/g;
const found = paragraph.match(myRegex);

console.log(found);// Expected output: Array ['b', 'a', 'b', 'a']
//try replace the a to "dog" and b to "fox". 


/*Create a regular expression that validates a password.
The password must have at least 8 characters
Bonus1: the password should start with an uppercase letter
Bonus2: the password should end with number*/

const input = document.querySelector("input");
const checkMessage = document.querySelector("p");

document.querySelector("button").addEventListener("click", checkPassword);

function checkPassword() {
  // The password should start with an uppercase letter and end with a number
  const regex = /^[A-Z]\w{7,}\d$/g;
  const result = regex.test(input.value);

  if (result) {
    checkMessage.textContent = "Password valid :)";
  } else {
    checkMessage.textContent = "Password invalid :'(";
  }
}

// email validation example: https://regexr.com/3e48o