// Runtime error which is not handled causes program to stop.
// console.log(a);

/* Example 1 */
// try {
//   console.log(a);
// } catch (error) {
//   console.log('Caught an error.', error);
//   console.log('This is after printing the error');
// }

// console.log('Other statements in the program');

/* Example 2 */
function someFnWithPotentialError(index) {
  const numArray = [1, 2, 3, 4, 5]; // 5 elements => index should be 0 to 4
  if (index < numArray.length) {
    return numArray[index];
  } else {
    throw new Error("You've got a wrong index");
  }
}

try {
  const result = someFnWithPotentialError(40);
  console.log('Result:', result);
} catch (error) {
  console.error('Error:', error.message);
}

console.log('someFnWithPotentialError is done. This is after it');
