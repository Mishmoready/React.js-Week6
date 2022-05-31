const iceCreams = ["vanilla", "chocolate", "blueberry"]; //user console

console.log(iceCreams);


//toString()⭐⭐⭐
const toStringMethod = iceCreams.toString();
console.log(toStringMethod); //string

//split()⭐⭐⭐ string to array
const stringToArray = toStringMethod.split(","); //⭐⭐⭐⭐⭐
console.log(stringToArray);

//join()⭐⭐⭐⭐⭐
const joinMethod = iceCreams.join(" + "); //" ",  " + "
console.log(joinMethod); //string

//push()⭐⭐⭐⭐⭐
const pushMethod = iceCreams.push("rainbow");
console.log(pushMethod); //4   adds the item to the end, returns new length .
console.log(iceCreams);

//pop ⭐⭐⭐
const popMethod = iceCreams.pop();
console.log(popMethod); // rainbow  removes and returns last item
console.log(iceCreams);

//unshift ⭐⭐⭐
const unshiftMethod = iceCreams.unshift("tiramisu");
console.log(iceCreams);
console.log(unshiftMethod); //4   adds the item to the begin, returns new length .

//shift ⭐⭐⭐
const shiftMethod = iceCreams.shift("tiramisu");
console.log(iceCreams);
console.log(shiftMethod); //Tiramisu   removes and returns first item.

//concat ⭐⭐
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
//return an array

//splice ⭐⭐⭐⭐⭐ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
//the parameters of splice
//array.splice(a,b,c)
//a=>The index at which to start changing the array.
//b=> How many elements you want to delete.
//c=> elements you want to Add from this index.
//return an array

//slice ⭐⭐⭐⭐⭐
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
//the parameters of slice
//array.splice(a,b)
//a=> the index that you want to start to keep (if number is negative, use length-n method)
//b=> the index that you want to start to remove(if number is negative, use length-n method)
//return an new array

//sort ⭐⭐⭐⭐⭐https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// it will change the original array
// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();  follow alphabetical order
// console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort(function (a, b) {
  return a - b;
});
//array1.sort((a,b)=>a-b)   short cut
console.log(array1);
// expected output: Array [1, 4, 21, 30, 100000]

//reverse ⭐

//forEach ⭐⭐⭐⭐⭐https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
//three arguments:
//the value of the element
//the index of the element
//the Array object being traversed
const array123 = [1, 2, 3];
const arrayElements = (element, index, array) => {
  console.log("element:" + element + " index: " + index + " array: " + array);
};
array123.forEach(arrayElements);
//const iceCreams = ["vanilla", "chocolate", "blueberry"];
function printIceCream(value, a, b) {
  console.log(value + " ice-cream");
  console.log("index: " + a + ". array: " + b);
}
const forEachMethod= iceCreams.forEach(printIceCream);
console.log(forEachMethod);


//map ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐return a new array
let mapArray = iceCreams.map(addStar);

function addStar(value) {
  return value + "*";
}
// console.log(mapArray)

//filter()⭐⭐⭐⭐⭐⭐⭐⭐⭐//return a new array
let filterResult = iceCreams.filter(endWithA);

function endWithA(value) {
  return value[value.length - 1] == "a";
}
// console.log(filterResult);

//find()⭐⭐⭐ //return a string
let findResult = iceCreams.find(endWithA);
// console.log(findResult)

//reduce()⭐⭐⭐⭐
let numbers1 = [55, 4, 9, 15, 26];
let reduceArray = numbers1.reduce(subtract);

function subtract(total, value) {
  return total - value;
}

// console.log(reduceArray)

//reduceRight()⭐
//the other order of reduce

//every ⭐ boolean
let everyResult = iceCreams.every(endWithA);
// console.log(everyResult);

//some ⭐ boolean
let someResult = iceCreams.some(endWithA);
// console.log(someResult);

//indexOf()⭐

// let indexOfArray = iceCreams.indexOf(endWithA);

// console.log(indexOfArray);




function isAnagram(test, original) {

  if (test.length !==   original.length) {
    return false
  }

  let s1 = test.toLowerCase().split("").sort().join("")
  let s2 = original.toLowerCase().split("").sort().join("")

return s1 === s2
}  

//test:
// isAnagram('apple','pplea')
// isAnagram('ap ple','pp lea')
isAnagram('Apple','uPlea')


//["a","b","c"]
//["b","c", "a"]=> ["a","b","c"]= "abc"