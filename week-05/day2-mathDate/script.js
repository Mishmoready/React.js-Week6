"use strict";

// STRICT MODE
// const interface = "audio";
// const public = "audience";
// console.log(interface);

let hasDriversLicense;
const passTest = true;

if (passTest) {
  hasDriversLicense = true; // if hasDriversLicense spelled incorrectly, strict mode catches it.
}

if (hasDriversLicense) {
  console.log("Sally can drive!");
}

// -----------Exercise 1-----------
const myBirthdate = new Date(2000, 1, 7);
console.log(myBirthdate);

// Using the Intl DateTimeFormat API
const options = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "numeric",
  year: "numeric",
  // weekday: 'long',
};
const myFormattedDate = new Intl.DateTimeFormat("en-NZ", options).format(myBirthdate);
console.log(myFormattedDate);

/**
    Exercise 1
    ==========
    Store your birthdate into a variable
    Log the date only to the console (for example "My birthdate is the 7th.")
    Hint: Use the date constructor and the getDate() method
*/

const myBirthDay = new Date(2000, 2, 16);
console.log("My birth date is the " + myBirthDay.getDate() + "th.");

/**
    Bonus Exercise 1.1
    =================
    Store your birthdate into a variable.
    Log the date and month to the console. For example "My birthday is on the 7th of March"
*/

// Solution 1
const months = ["Jan", "Feb", "Mar"]; // imagine upto Dec is there
const myMonth = months[myBirthDay.getMonth()]; // months[2] => Mar
console.log("My birth date is the " + myBirthDay.getDate() + "th of " + myMonth);

// Solution 2
const myMonth1 = new Intl.DateTimeFormat("en", { month: "long" }).format(myBirthDay);
console.log("My birth date is the " + myBirthDay.getDate() + "th of " + myMonth1);

// -----------Exercise 2-----------
// Solution 1
const num1 = 5,
  num2 = 35,
  num3 = 26;
const smallest = Math.min(num1, num2, num3);
const largest = Math.max(num1, num2, num3);
console.log("The smallest of the three favorite numbers", smallest);
console.log("The largest of the three favorite numbers", largest);
console.log("Square of the smallest number", Math.pow(smallest, 2));

// Solution 2: Using an array
const myFaveNumbers = [5, 10, 16];
const smallest1 = Math.min(...myFaveNumbers);
const largest1 = Math.max(...myFaveNumbers);
console.log(smallest1 * smallest1, Math.pow(smallest1, 2), smallest1 ** 2); // these are three ways of achieving the same thing

// Extra: Randomly pick a fruit
const fruits = ["apple", "mango", "banana"];
fruits[Math.floor(Math.random() * 3)];
