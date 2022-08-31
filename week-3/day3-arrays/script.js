//-------------Exercise 8 -------------
const numbers = [5, 6, 7, 8, 9, 10];

// solution 1
const total = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5];
console.log(total / numbers.length);

// solution 2 using a loop
let sum1 = 0; // Set beginning total
for (let index = 0; index < numbers.length; index++) {
  const num = numbers[index];
  sum1 = sum1 + num; // Add current total, to the current index value of the numbers array
  // sum1 += num; // Exact same as line above but shorthand
  console.log(sum1);
}
const average = sum1 / numbers.length; // (5 + 6 + 7 + 8 + 9 + 10) / 6 = 7.5
console.log("The average of numbers:", numbers, "is", average); // 7.5

//
numbers = [5, 6, 7, 8, 9, 10];
numbers.push(11);

// .push() method
const hats = ["trilby", "panama", "top hat", "bowler"];
hats.push("fedora"); // appends new element to array
console.log(hats);

hats.pop(); // removes last element of array
console.log(hats);

// Can store many datatypes
const arrayOfNumbersBooleansStrings = [3, 3, true, 6, false, true, "1", 6];
const arrayOfObjects = [
  {
    name: "Buddy",
    favColour: "blue",
  },
  {
    name: "Sally",
    favColour: "purple",
  },
];

arrayOfObjects[0];
arrayOfObjects[1].name;
arrayOfObjects[1].favColour;

//-------------Exercise 9-------------
const favouriteRecipe = {
  title: "Coffee",
  servings: 2,
  //                0        1       2
  ingredients: ["coffee", "sugar", "milk"],
};

console.log(favouriteRecipe, favouriteRecipe.ingredients.length);
favouriteRecipe.ingredients.push("water");
// favouriteRecipe.ingredients[favouriteRecipe.ingredients.length] = "water"; // possible, but hard to read
console.log(favouriteRecipe);
