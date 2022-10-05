const myModules = require("./myModules");
const exercise3 = require("./exercise3");
/**
 * Create a function that takes a string as a parameter.
 *    The string should be a name and the function should return a greeting like “Hello <name> welcome to Node”
        console.log the result and execute it with node
 * 
 */

// Exercise 1
const greet = (name) => `Hello ${name}! Welcome to Node`;
console.log(greet("Sally Rogers"));

// Exercise 2
function wordToCheck(str) {
  const splitStr = str.split(""); // returns an array with the arguments removed
  console.log(splitStr);
  const result = splitStr.some(function (letter, i) {
    return letter === str[i + 1];
  });
  return result;
}

// Exercise 2 REFACTORED fn
function wordToCheck(str) {
  return str.split("").some((letter, i) => letter === str[i + 1]);
}
console.log(wordToCheck("wool"));

// Accessing modules from myModules
console.log(myModules.addNums(10, 4));
console.log(myModules.subtractNums(10, 4));
console.log(myModules.isNumber("10"));
console.log(exercise3.removeVowels("hello"));
