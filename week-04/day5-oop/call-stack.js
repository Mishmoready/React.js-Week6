function first() {
  console.log('I am the first function');
  second();
  console.log('I am still in the first fn');
}
function second() {
  console.log('I am the second function');
  third();
  console.log('I am still in the second fn');
}
function third() {
  console.log('I am the third function');
}
function boss() {
  first();
}
boss(); // call the boss function
console.log('I am after the boss fn')
