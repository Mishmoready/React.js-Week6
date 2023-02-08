/*
  Bonus - Exercise 6 
  ====================
  Try running a while loop that does a console log of the numbers 20 to 
  10, starting from 20 & down to 10.
  
  Output should look like 
    20
    19
    …
    … 
    10
*/

let count = 20;
while (count >= 10) {
  console.log(count);
  count--;
}

/*
  Bonus - Exercise 7 
  ==================
  • Use a for loop to loop through the string ‘Hell@ the#e’
  • If you find a symbol in the string i.e. !, @, #, $, %, ^, &, 
    then console.log an error message and break the loop.
*/

const myNewString = 'Hell@ the#e';
for (let i = 0; i < myNewString.length; i++) {
  if (myNewString[i] === '@' || myNewString[i] === '#') {
    console.log('error! There is a symbol in there. Found a ', myNewString[i]);
    break; // A "break" will break out of the loop, abandon remaining loop iterations
  }
  console.log(myNewString[i]);
}

/*
  Bonus - Exercise 8 
  ==================
  1. Loop through the following foods object using the for..of loop.
  2. Within the loop, log each element to the console inside a string 
  which says "I like …..".
*/

/*
  Exercise 10
  ============
  1. Loop through the following user object using the for..in loop.
      const user = {
        name: "John",
        age: 5,
        isAdmin: true
      };
  2. Within the loop, log the value of the key age.
*/

/**
  Bonus: Exercise 11
  ==================
  1. Create an object myFavNumbers with three of your favourite 
  numbers as values (any names for keys).
  2. Loop through the object using for..in and find the sum of the 
  numbers.
  3. Log the sum to the console
 */
