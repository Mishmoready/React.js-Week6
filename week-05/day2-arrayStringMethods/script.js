const icecreams = ["vanilla", "chocolate", "matcha"];
// push()
const pushMethod = icecreams.push("rainbow");
console.log(pushMethod); //4   adds the item to the end, returns new length .
console.log(icecreams);

// pop()
const popMethod = icecreams.pop();
console.log(popMethod); // rainbow  removes and returns last item
console.log(icecreams);

// unshift()
const unshiftMethod = icecreams.unshift("tiramisu");
console.log(icecreams);
console.log(unshiftMethod); //4   adds the item to the begin, returns new length .

// shift()
const shiftMethod = icecreams.shift("tiramisu");
console.log(icecreams);
console.log(shiftMethod); //Tiramisu   removes and returns first item.

// split(): STRING method: string to array
const icecreamsSplit = "vanilla chocolate matcha";
const resultsIcecreamSplit = icecreamsSplit.split(" ", 2);
console.log(resultsIcecreamSplit); // chocolate matcha

// join(): array to string
const icecreamsJoin = ["vanilla", "chocolate", "matcha"];
const resultsIcecreamsJoin = icecreamsJoin.join(" ");
console.log(resultsIcecreamsJoin); // vanilla chocolate matcha

// slice() ARRAY method (but also a string method)
const icecreamsSlice = ["vanilla", "chocolate", "blueberry"];
const resultsIcecreamsSlice = icecreamsSlice.slice(1);
console.log(resultsIcecreamsSlice); // ['chocolate', 'blueberry']

// includes()
const arrayOfThings = ["books", "pens", "paper", "pencils", "words"];
const userInput = prompt("Enter a thing!");
console.log(`Does the array contain ${userInput}? ... ${arrayOfThings.includes(userInput)}`);

// forEach()
const icecreamsForEach = ["vanilla", "chocolate", "blueberry"];
icecreamsForEach.forEach(function (icecream, index) {
  console.log(icecream + " ice-cream");
}); // "vanilla ice-cream"  "chocolate ice-cream"  "blueberry ice-cream"

// map()
const icecreamsMap = ["vanilla", "chocolate", "blueberry"];
const orderedIcecreams = icecreamsMap.map(function (icecream, index) {
  return `Flavour ${index}: ${icecream}`;
});
console.log(orderedIcecreams); // ['Flavour 0: vanilla', 'Flavour 1: chocolate', 'Flavour 2: blueberry']
// Bonus: Update the DOM with the mapped out array
// orderedIcecreams.forEach(
//   (icecream, i) =>
//     (document.querySelector("p").innerHTML =
//       document.querySelector("p").innerHTML + (document.querySelector("p").innerHTML = `<p>${icecream}</p>`))
// );

// filter()
const icecreamCosts = [2.95, 4, 5];
const expensiveIcecreamCosts = icecreamCosts.filter(function (cost, index, array) {
  return cost > 3;
});
console.log(expensiveIcecreamCosts); //results == [4, 5]

// indexOf()
const icecreamsIndexOf = ["vanilla", "chocolate", "matcha"];
let chocIndex = icecreamsIndexOf.indexOf("chocolate");
console.log(chocIndex); // 1

// every()
const ages1 = [19, 35, 24, 55];
const everyAgeOver30 = ages1.every(function (age, index, array) {
  return age > 30;
});
console.log(everyAgeOver30); // false

// some()
const ages2 = [19, 35, 24, 55];
const someAgesOver30 = ages2.some(function (age, index, array) {
  return age > 30;
});
console.log(someAgesOver30); // true

// Some JavaScript shorthands
// const num1 = Number("100");
// const num2 = Number("100.01");
const num1 = +"100"; // converts from string to integer number
const num2 = +"100.01"; // converts from string to decimal number
console.log(num1, num2); // check with the typeof operator

// ------------ EXERCISE ------------
// Convert the case of the first letter of every word to uppercase
// good morning to you => Good Morning To You
// VERSION 1
const convertWordCaseV1 = function (sentence) {
  const capitalise = function (word) {
    return word[0].toUpperCase() + word.slice(1);
  }; // this nested function turns 'good' => 'Good'
  const lowercaseString = sentence.toLowerCase(); // String Method: make whole string lowercase
  const splitString = lowercaseString.split(" "); // String Method: split string on each " "
  const capitalisedString = splitString.map((word) => `${capitalise(word)}`); // Array Method: call the capitalise function for each word in our array
  const finalString = capitalisedString.join(" "); // Array Method: concatenates each element of the array by a " "

  return finalString;
};
console.log(convertWordCaseV1("good MORNING to yoU"));

// VERSION 2
const convertWordCaseV2 = function (sentence) {
  const capitalise = function (str) {
    return str[0].toUpperCase() + str.slice(1);
  };

  // Chaining multiple methods together
  const finalString = sentence
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return `${capitalise(word)}`;
    })
    .join(" ");
  return finalString;
};
console.log(convertWordCaseV2("good MORNING to yoU"));

// VERSION 3
const convertWordCaseV3 = function (sentence) {
  return sentence
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
};
console.log(convertWordCaseV3("good MORNING to yoU"));
