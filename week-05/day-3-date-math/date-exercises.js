new Date(); // based on the current time.

// Objects created based on the provided value.
new Date(year, monthIndex);
new Date(year, monthIndex, day);
new Date(year, monthIndex, day, hours);
new Date(year, monthIndex, day, hours, minutes);
new Date(year, monthIndex, day, hours, minutes, seconds);
new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds);

/**
    Exercise 0
    ==========
    Create a Date object representing Dec 31st 2023. 
    Apply the toString() method to it and console.log the result.
*/

const endOfYear = new Date(2023, 11, 31); // second parameter is the monthIndex
console.log(endOfYear.toString());

// Internationalization API - DateTimeFormat
const endOfYear = new Date(2023, 11, 31);
console.log(endOfYear.toString());

const formattedDateNZ = new Intl.DateTimeFormat('en-nz').format(endOfYear);
const formattedDateUS = new Intl.DateTimeFormat('en-us').format(endOfYear);
const formattedDateDE = new Intl.DateTimeFormat('de-DE').format(endOfYear);

console.log(formattedDateNZ); // "31/12/2023"
console.log(formattedDateUS); // "12/31/2023"
console.log(formattedDateDE); // "31.12.2023"

// const currentLocale = new Intl.NumberFormat().resolvedOptions().locale; to get the current

/**
    Exercise 1
    ==========
    Store your birthdate into a variable
    Log the date only to the console (for example "My birthdate is the 7th.")
    Hint: Use the date constructor and the getDate() method
*/

const myBirthDay = new Date(2000, 2, 16);
console.log('My birth date is the ' + myBirthDay.getDate() + 'th.');

/**
    Bonus Exercise 1.1
    =================
    Store your birthdate into a variable.
    Log the date and month to the console. For example "My birthday is on the 7th of March"
*/

// Solution 1
const myBirthDay = new Date(2000, 2, 16);
const months = ['Jan', 'Feb', 'Mar']; // imagine upto Dec is there
const myMonth = months[myBirthDay.getMonth()]; // months[2] => Mar
console.log(
  'My birth date is the ' + myBirthDay.getDate() + 'th of ' + myMonth
);

// Solution 2
const myBirthDay = new Date(2000, 2, 16);
const myMonth = new Intl.DateTimeFormat('en', { month: 'long' }).format(
  myBirthDay
);
console.log(
  'My birth date is the ' + myBirthDay.getDate() + 'th of ' + myMonth
);
