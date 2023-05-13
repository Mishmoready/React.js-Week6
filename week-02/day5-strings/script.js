// 5 of the 7 primitive/basic data types
console.log("Is this thing on?");

let myNumber = 25;
console.log(typeof myNumber); // number

let myString = "hey there";
console.log(typeof myString); // string

let isRaining = false;
console.log(typeof isRaining); // boolean

let iAmNotDefinedYet;
console.log(typeof iAmNotDefinedYet); // undefined

let iAmAnEmptyValue = null;
console.log(typeof iAmAnEmptyValue); // object (but should really be null)

// ---------Exercise 1---------
const sentence1 = '"Shall we go?" she said.';
// const sentence2 = "Remember to say "please" 'and' "thank you.""; // doesn't work because a mix of quote marks
console.log(sentence1, sentence2);

// ---------Exercise 2---------
// Escaping special characters
const firstA = '"Shall we go?" she said.'; // same as above
const firstB = 'Remember to say "please" \'and\' "thank you."';
console.log(firstA, firstB);

const firstC = `Remember to say "please" 'and' "thank you."`; // Using a template literal (back ticks), I don't need to escape
console.log(firstC);

const myMessage = "Teapot";
console.log(myMessage[2]); // get letter at specific position - NOTE JS counts from 0
console.log(myMessage.length); // Length gives us the number of characters in a string. Output: 6
console.log(myMessage[myMessage.length - 1]); // Output: t
console.log(myMessage.at(-1)); // Output: t. This is new addition JavaScript as at 2022

const myEmptyString = "";
console.log(myEmptyString.length);

// ---------Exercise 3---------
const quotePart1 = '"Concentrate all you thoughts ';
const quotePart2 = "upon the work in hand. The sun's rays do not burn ";
const quotePart3 = 'until brought to a focus."';
const quotePart4 = " — Alexander Graham Bell";

const quote = quotePart1 + quotePart2 + quotePart3 + quotePart4;
console.log(quote, quote.length);

// Check the type of a value
const userMessage = "A string!";
console.log(typeof userMessage); // tells us the datatype of userMessage

// BMI Exercise 4
const weight = 100;
const height = 1.83;
console.log(weight / (height * height));

const book = 5;
const sumOfBooksSpend = book * 10;
console.log("Buddy & Sally's total spend was: $" + sumOfBooksSpend + ".00");

// ---------Bonus Content --------- will make more sense after next session
// const someString = "Hello there! How are you";
// console.log(someString.length); // 24

// const answer = prompt("What is 2+2", "5");
// if (answer != "4") {
//   alert("Sorry, wrong answer. 2+2 is 4");
// }
