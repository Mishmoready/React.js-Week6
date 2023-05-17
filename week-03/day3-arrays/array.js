/**
 * 
  Your Turn - 1
  =============
  1. Create an array of your favourite fruits
  2. Console log the array
 */
const fruits = ['apple', 'mango', 'pineapple'];

console.log(fruits);

/**
  Your Turn - 2
  =============
  1. Create an array of numbers, say 5 to 10.
  2. Find the average of the numbers.
        Average = Sum of All items / Number of Item in the Set
  3. Console log average.
  4. Share your solution + output when done
 */

// Solution 1
const numbers = [5, 6, 7, 8, 9, 10];

const total =
  numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5];
console.log(total / numbers.length);

// Solution 2
let sum1 = 0; // Set beginning total
for (let index = 0; index < numbers.length; index++) {
  const num = numbers[index];
  sum1 = sum1 + num; // Add current total, to the current index value of the numbers array
  // sum1 += num; // Exact same as line above but shorthand
  console.log(sum1);
}
const average = sum1 / numbers.length; // (5 + 6 + 7 + 8 + 9 + 10) / 6 = 7.5
console.log('The average of numbers:', numbers, 'is', average); // 7.5


//array of objects explain
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
 
 // call Sally's favColour: purple
 console.log(arrayOfObjects[1])
//  console.log(arrayOfObjects[1][1])//undefined, because you can not call object in this way, using index number inside of square bracket. You need to give it a key/property name to get the value
//  console.log(arrayOfObjects[1][favColour])// you cannot call a variable which haven't beed decleared.  We need a string not a variable
console.log(arrayOfObjects[1]["favColour"])//get "purple"
 //Dot operator:
 console.log(arrayOfObjects[1].favColour)

 
/*
  Your turn - 3
  =============
  1. Create an object to hold information on your favorite recipe. It should 
     have properties for a 
    • title (a string), 
    • servings (a number), 
    • and ingredients (an array of strings).
  2. Console log the object and the number of the ingredients in the recipe.
  3. Add an extra ingredient ‘water’ to your recipe. [hint: Use array.push()]
  4. Log the object to the console
*/

const favouriteRecipe = {
  title: 'Coffee',
  servings: 2,
  //                0        1       2
  ingredients: ['coffee', 'sugar', 'milk'],
};

console.log(favouriteRecipe, favouriteRecipe.ingredients.length);
favouriteRecipe.ingredients.push('water');
/*
 Following is possible, but hard to read
    favouriteRecipe.ingredients[favouriteRecipe.ingredients.length] = "water"; 
*/






