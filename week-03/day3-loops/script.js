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

