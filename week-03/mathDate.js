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
const myFormattedDate = new Intl.DateTimeFormat("en-NZ", options).format(
  myBirthdate
);
console.log(myFormattedDate);

// -----------Exercise 2-----------

const num1 = 5,
  num2 = 35,
  num3 = 26;
const smallest = Math.min(num1, num2, num3);
const largest = Math.max(num1, num2, num3);
console.log("The smallest of the three favorite numbers", smallest);
console.log("The largest of the three favorite numbers", largest);
console.log("Square of the smallest number", Math.pow(smallest, 2));

const fruits = ["apple", "mango", "banana"];
fruits[Math.floor(Math.random() * 3)];

// -----------Exercise 3-----------

const randomNumber = Math.random() * 10;
const flooredRandomNumber = Math.floor(randomNumber);
const sqrtOfNumber = Math.sqrt(flooredRandomNumber);
console.log(flooredRandomNumber, sqrtOfNumber);
