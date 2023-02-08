/*
  Exercise 1
  =============
  Try running a for loop that does a console log of the numbers 1 to 10
*/

for (let index = 1; index <= 10; index++) {
  console.log(index);
}

// for (let i = 1; i <= 10; i = i + 1) {
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

/*
  Exercise 2
  =============
  Now try running a for loop that does a console log of the numbers 5 
  to 20
*/
for (let index = 5; index <= 20; index++) {
  console.log(index);
}

// for (let i = 1; i <= 10; i = i + 1) {
for (let i = 5; i <= 20; i++) {
  console.log(i);
}

/*
  Exercise 3 
  =============
  Try running a loop that logs to the console the numbers from 10 to 1 
  on each console line (so in reverse this time).
*/

for (let index = 10; index > 0; index--) {
  console.log('EX 3 LOOP', index);
}

/*
  Exercise 4
  ==========
  We know that if we have a string we can use Array index, ie, like 
  myString[0] to get the first letter and myString[1] to get the 
  second letter etc.
  
  Use a loop to console.log the first 10 letters of “Responsiveness” 
  • Example,
    R
    e
    s
    …
*/
const myResString = 'Responsiveness';

for (let i = 0; i < 10; i++) {
  console.log(myResString[i]);
}

/*
  Exercise 4.1
  ============
  Use a loop to console.log all the letters of the string 
  “Responsiveness”.
*/
const myResString = 'Responsiveness';

for (let i = 0; i < myResString.length; i++) {
  console.log(myResString[i]);
}

/*
  Exercise 5
  ==========
  Create an array of your favourite fruits. 
  • Example, [“apple”, “mango”, “banana”];
  Using a for loop to print the individual fruits in the array.
*/

const fruits = ['apple', 'mango', 'pineapple'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

/*
  Bonus - Exercise 5.1
  ====================
  • Create an array of your favourite fruits. 
  • Example, [“apple”, “mango”, “banana”];
  • Using a for loop, print all the fruits starting with an ‘A‘ or an ‘a’
*/
const fruits = ['apple', 'mango', 'pineapple'];

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === 'A' || fruits[i] === 'a') {
    console.log(fruits[i]);
  }
}
