// What is the output of the following?
let x = 4,
  y = 2,
  z = 0;
if (x == 4 && (!(y == 1) || z == 0)) {
  console.log(true);
} else {
  console.log(false);
}

//-------------Exercise 1-------------
//Note down what the following statements will return. Try to figure this out before putting the commands in the console.

2 == "2"; // true
2 === 2; // true
10 % 3; // 1
10 % 3 === 1; // true
true && false; // false
false || true; // true
true || false; // true

//-------------Exercise 2-------------

/*  1. Creates a person object containing a first name and lastname property, whose values are strings.
    2. Shows the first name and last name to the console using the dot operator.
*/

const person = {
  firstName: "Sally",
  lastName: "Rogers",
  favouriteColour: "purple",
};

console.log(person.firstName, person.lastName);

//-------------Exercise 3-------------
console.log(
  `This is ${person.firstName} ${person.lastName} and their favourite colour is ${person.favouriteColour}`
);

// Larger example
const address = {
  contactName: "Buddy",
  contactPhone: "01234567",
  companyName: "MRHQ",
  buildingName: "L5",
  addressLine1: "115 Queen Street",
  addressLine2: "Auckland",
  addressLine3: "New Zealand",
  deliveryInstructions: "9 to 5 only",
  senderAddress: "some address here",
};

console.log(address.contactName);
console.log(address["contactName"]);

//-------------Exercise 4-------------

const rectangle = {
  length: 10,
  width: 50,
};
// const areaOfRectangle = rectangle.length * rectangle.width;
const areaOfRectangle = rectangle["length"] * rectangle["width"];
console.log(areaOfRectangle);

// Why/when use square brackets over dot notation
const myLength = "length";
const myWidth = "width";
const areaOfRectangleBrackets = rectangle[myLength] * rectangle[myWidth]; // works fine, because these variables are actually "length" and "width" strings respectively
// const areaOfRectangleDot = rectangle.myLength * rectangle.myWidth; // doesn't work, because no property exists called myWidth
console.log(areaOfRectangleBrackets);

//-------------Exercise 5-------------

const newPerson = {
  firstName: "Sally",
  lastName: "Rogers",
  favouriteNumber: 3,
  favouriteDay: "Friday",
};
console.log(newPerson);

newPerson.favouriteFood = "Icecream";
console.log(newPerson);

delete newPerson.favouriteDay;
newPerson.favouriteNumber = newPerson.favouriteNumber * 2;
console.log(newPerson);

// for ... in loop example
const student = {
  name: "Rob",
  age: 5,
  isAdmin: true,
};
for (const key in student) {
  console.log(key); // name, age, isAdmin
  console.log(student[key]); // John, 5, true
}

//-------------Exercise 6-------------

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

//-------------Exercise 6.1-------------

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

//-------------Exercise 7 -------------

const food = ["veggies", "popcorn", "chocolate", "apples", "oranges"];
// You can loop through an array using a for of loop
for (i = 0; i <= food.length - 1; i++) {
  console.log(food[i], i);
}

//-------------Exercise 8 -------------
const numbers = [5, 6, 7, 8, 9, 10];

// solution 1
const total =
  numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5];
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
const favoriteRecipe = {
  title: "Coffee",
  servings: 2,
  //                0        1       2
  ingredients: ["coffee", "water", "milk"],
};

console.log(favoriteRecipe, favoriteRecipe.ingredients.length);
favoriteRecipe.ingredients.push("sugar");
// favoriteRecipe.ingredients[favoriteRecipe.ingredients.length] = "sugar"; // possible, but hard to read
console.log(favoriteRecipe);
