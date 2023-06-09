//-------------------------------------------------------------
// LOOPS
// FOR LOOP

// for (initialCount, condition, updateExpression) {
//   code to execute
// }

// -------------Exercise 1-------------
for (let index = 1; index <= 10; index++) {
  console.log(index);
}

// for (let i = 1; i <= 10; i = i + 1) {
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// -------------Exercise 2-------------
for (let index = 10; index > 0; index--) {
  console.log("EX 2 LOOP", index);
}

// -------------Exercise 3-------------
const myResString = "Responsiveness";

for (let i = 0; i < myResString.length; i++) {
  console.log(myResString[i]);
}

// -------------Exercise 4-------------
const foods = ["salad", "pie", "pickles", "scones"];
for (let i = 0; i < foods.length; i++) {
  console.log(foods[i]);
}


// -------------Exercise 5-------------
const foods2 = ["salad", "pie", "pickles", "scones"];
for (const food of foods) {
  console.log(food);
}


//prompt exercise:
const ageInput = prompt("Please enter your age:");
const age = parseInt(ageInput);
//using isNaN() to check if this variable is type of number, if it's a number, will return true as a boolean
if (isNaN(age)) {
  console.log("Invalid input. Please enter a valid age.");
} else {
  if (age >= 18) {
    console.log("Cheers! You are legally allowed to drink beer.");
  } else {
    console.log("Sorry, you are not old enough to drink beer.");
  }
}



// WHILE LOOP
// -------------Exercise 4-------------
let guess;
const secretNumber = 3;
while (guess != secretNumber) {
  guess = Number(prompt("Please pick a number between 1 and 6 🎲"));
  guess === secretNumber
    ? console.log(`You guessed it! ${guess} is the secret number.`)
    : console.log(`Nice try, but try again`);
}

// -------------Exercise 5-------------
const myNewString = "Hell@ the#e";
for (let i = 0; i < myNewString.length; i++) {
  if (myNewString[i] === "@" || myNewString[i] === "#") {
    console.log("error! There is a symbol in there. Found a ", myNewString[i]);
    break; // A "break" will break out of the loop, abandon remaining loop iterations
  }
  console.log(myNewString[i]);
}

// Iterating over properties of an array
const cars = ["tesla", "Toyota", "ford"];
// You can loop through an array using a for of loop
for (const car of cars) {
  console.log(car); // tesla, jaguar, ford
}


// Iterating over properties of an object
// for ... in loop example
const student = {
  name: "Rob",
  age: 25,
  isAdmin: true,
};
for (const key in student) {
  console.log(key); // name, age, isAdmin
  console.log(student[key]); // Rob, 25, true
}

// -------------Exercise 7-------------
const user = {
  name: "John",
  age: 5,
  isAdmin: true,
};

for (const key in user) {
  if (key === "age") {
    console.log(user[key]);
    break; // optional - quits after you've got the key called age and its value printed.
  }
}

// -------------BONUS Exercise 8-------------
const myFavNumbers = {
  firstNum: 2,
  secondNum: 3,
  thirdNum: 4,
};

let sum = 0; // 0 + 2 = 2 ; 2 + 3 = 5; 5 + 4 = 9
for (const key in myFavNumbers) {
  sum = sum + myFavNumbers[key];
  // sum += myFavNumbers[key];
}

console.log(sum, myFavNumbers);
