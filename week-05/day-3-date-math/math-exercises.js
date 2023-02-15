/**
 * Exercise 1
 * ==========
  Find the smallest and the largest numbers of three of your favourite numbers using the min/max Math methods.
  Find the square of the smallest number from above.
  console.log the output
 */

const num1 = 5,
  num2 = 35,
  num3 = 26;

const smallest = Math.min(num1, num2, num3);
const largest = Math.max(num1, num2, num3);

console.log('The smallest of the three favorite numbers', smallest);
console.log('The largest of the three favorite numbers', largest);

console.log('Square of the smallest number', Math.pow(smallest, 2)); // square is something^2

/**
 * Exercise 2
 * ==========
    Pick a random number between 1 and 10 and find its square root.
    Console log the outputs.
 */


// Math.random() => [0,1)     Here, 1 is not included. Upto 1
// Math.random() x 10 => [0,10) . Here, 10 is not included. Upto 10
// (Math.random() x 10) + 1 => [1,11). 11 not included. Upto 11
// Math.floor(Math.random()* 10) + 1) => whole numbers between 1 and 10 (both included)

let randomNumber = (Math.random() * 10) + 1;
let flooredRandomNumber = Math.floor(randomNumber);
let sqrtOfNumber = Math.sqrt(flooredRandomNumber);

console.log(flooredRandomNumber, sqrtOfNumber);
