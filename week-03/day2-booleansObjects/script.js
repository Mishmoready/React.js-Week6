// FALSY VALUES
// console.log(Boolean(false));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(0));
// console.log(Boolean(NaN));
// console.log(Boolean(""));

console.log(!false); // true
console.log(true && false); // false
console.log(true || false); // true
console.log(123 === "456"); // false
console.log(1.23 === 123e-2); // true

console.log(Boolean(0 && 10 - 3)); // false
console.log(Boolean(-5)); // true

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
console.log(`This is ${person.firstName} ${person.lastName} and their favourite colour is ${person.favouriteColour}`);

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
