function addNums(num1, num2) {
  return num1 + num2;
}
function subtractNums(num1, num2) {
  return num1 - num2;
}
function isNumber(num) {
  return Boolean(parseInt(num));
}

// console.log(module)

// Here we add these functions to myModule.js's module.exports object so that we can access these functions elsewhere.
module.exports = { addNums, subtractNums, isNumber };
