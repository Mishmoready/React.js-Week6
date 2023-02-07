/*
  Exercise 1
  ==========
  Create a function that takes in two strings as parameters and logs 
  them to the console.
  Share a screenshot when you’re done.
*/

function showString(str1, str2) {
  console.log(str1);
  console.log(str2);
}

/*
  Exercise 2
  ==========
  Create a function that takes in two strings as parameters, combines 
  the two strings and console.log’s the result. 
  Share a screenshot when you’re done.
  Feel free to use google to help you out
*/
function joinStrings(string1, string2) {
  console.log(`${string1} ${string2}`);
}

joinStrings('Hello', 'World');
joinStrings('Today is', 'Monday');

/*
  Exercise 2.1
  ============
  • Write a function rectangleArea() that returns the area of a 
    rectangle. The width and height are provided as the argument.
  • Store the area into a variable and using the console log to print the value 
    in the variable in the following format
      “The area of the rectangle is 15”
       Hint: Area of the rectangle is width x height.
  • Example, 
    The function rectangleArea(10, 5) should return the result 
    50, which needs to be stored in a variable.
*/
// Solution 1
function rectangleArea(width, height) {
  const area = width * height;
  return area;
}

const result = rectangleArea(10, 20);
console.log(`The area of the rectange is ${result}`);

// Solution 2
function rectangleArea(width, height) {
  return width * height;
}

const result = rectangleArea(10, 20);
console.log(`The area of the rectange is ${result}`);

/*
  Exercise 3
  ============
  • Create a function that takes in a string and returns false if the string is 
  empty and true if it is not. 
    (Hint: An empty string always == false).
  • After the result is returned from the function, console.log the result.
*/

function isNotEmpty(inputString) {
  if (inputString === '') {
    return false; // string is empty
  } else {
    return true; // string is NOT empty
  }
}

console.log(isNotEmpty('Hello'));
console.log(isNotEmpty(''));
console.log(isNotEmpty());

/*
  Exercise 3
  ============
1. Create a function that takes in a parameter. Function returns true if the number is greater than 10 
  and false if less than 10.
2. Call the function and store the result in a variable3. console log the variable
*/

// Solution 1
function isGreater(num) {
  if (num > 10) {
    return true;
  } else {
    return false;
  }
}

// Solution 2
function isGreater(num) {
  return num > 10 ? true : false;
}

/**
 * Methods - Functions in Objects
 */
const person = {
  firstName: 'Sebin',
  hello: function (message) {
    console.log('Someone says', message);
  },
};
console.log(person.firstName);
person.hello('We are learning about methods');

/*
  Arrow function - Exercise 4
  ===========================
  • Create an arrow function that takes in two strings, combines the two 
  and returns the result.
  • Console log the result on the browsers console.
*/
const combineString = (str1, str2) => {
  return str1 + str2;
};

/*
  Exercise 5
  ==========
  Write an arrow function that checks if a given number is even or odd.
  Example, 
      checkIfEven(36) gives true
      checkIfEven(37) gives false
  Hint: Use the modulus operator to check the remainder. If the result 
  for modulo 2 is 0, then the number is even. Eg, the condition 4 % 2 == 
  0 being true could mean that 4 is even.
*/
function halfNumber(wholeNumber) {
  const halvedNumber = wholeNumber / 2;
  return halvedNumber;
}

const result = halfNumber(23);
// const userInput = prompt('Enter a whole number');
// const userInputNum = parseInt(userInput);
// const result = halfNumber(userInputNum);
console.log('Half of 23 is ' + result);

/*
  Bonus Exercise
  ==============
  1. Write a function called halfNumber that will take one argument (a 
     number), divide it by 2, and return the result.
      • Assign the return value of the function to a variable called halvedNumber.
      • Print out a log like "Half of 5 is 2.5.“ using the variable
  2. Write a function called timeInSeconds that takes in an integer 
     minutes as a parameter and returns seconds.
      [Hint: You might need to convert the string output from the prompt to an integer]
      • Prompt the user to enter minutes.
      • Call the function and alert the output.
*/

function getTimeInSeconds(timeInMinutes) {
  const timeInSeconds = timeInMinutes * 60;
  return timeInSeconds;
  // return timeInMinutes * 60;
}

const userInputMinutes = prompt('Enter the minutes', '5');
const userInputMinutesNum = parseInt(userInputMinutes);
const timeInSeconds = getTimeInSeconds(userInputMinutesNum);
alert(userInputMinutes + ' minutes is ' + timeInSeconds + ' seconds');
