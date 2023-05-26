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
console.log(resultsIcecreamSplit); // vanilla choclate

// join(): array to string
const icecreamsJoin = ["vanilla", "chocolate", "matcha"];
const resultsIcecreamsJoin = icecreamsJoin.join(" ");
console.log(resultsIcecreamsJoin); // vanilla chocolate matcha

// slice() ARRAY method (but also a string method)
const numberSlice = [0, 1, 2, 3, 4, 5];
const resultsNumberSlice = numberSlice.slice(1); //slice(1,3)
console.log(resultsNumberSlice); //return a new sliced array
console.log(numberSlice); //not affect origin array
//slice() exercsise:
//How can I get ["JS"] by slice() method?
const array = ["html", "css", "JS", "react"];

// splice() ARRAY method
const numberSplice = [0, 1, 2, 3, 4, 5];
const resultsNumberSplice = numberSplice.splice(1, 1, "pen");
console.log(resultsNumberSplice); //return a new array with delete element
console.log(numberSplice); //modifies the original array directly
//keep the original array:
const array2 = [...numberSplice];
const arraySplice = array2.splice(1, 1, "apple");
console.log(array2);

//splice() exercsise:
const array1 = ["html", "css", "react"];
//How can I put "JS" back in array1 after "css" by splice() method?

// forEach()
const icecreamsForEach = ["vanilla", "chocolate", "blueberry"];
icecreamsForEach.forEach(function (icecream, index) {
  console.log(icecream + " ice-cream");
}); // "vanilla ice-cream"  "chocolate ice-cream"  "blueberry ice-cream"
//example in real world
const users = ["Alice", "Bob", "Charlie"];
users.forEach((user) => {
  sendEmail(user); // Send an email to each user
}); //do something for each user

// map()
const icecreamsMap = ["vanilla", "chocolate", "blueberry"];
const orderedIcecreams = icecreamsMap.map(function (icecream, index) {
  return `Flavour ${index}: ${icecream}`;
});
console.log(orderedIcecreams); // ['Flavour 0: vanilla', 'Flavour 1: chocolate', 'Flavour 2: blueberry']
//map exercise
const array3 = [1, 2, 3, 4, 5];
/*Use map() method to get this array [2,4,6,8,10]
answer:
const result = array.map(num=>num*2)
console.log(result)
*/

// sort()
const numbers = [5, 3, 8, 1, 2];
const a = numbers.sort();
console.log(a); // Output: [1, 2, 3, 5, 8]
console.log(numbers); // Output: [1, 2, 3, 5, 8]
a.push("apple");
console.log(a);
console.log(numbers); // both a and numbers reference the same array in memory.
//for keep the original Array:
const num = [50, 30, 80, 10, 20];
const copyArray = [...num].sort();
console.log(num);
console.log(copyArray);
//descending order
const num2 = [500, 300, 800, 100, 200];
const num2D = [...num2].sort(compareF);
//array.sort(compareFunction)
function compareF(a, b) {
  return b - a;
} //(a,b)=>(b-a)

//a represent for the second value
//b represent for the first value
console.log(num2D);
//Sort() exercise:
const icecreams1 = ["vanilla", "rainbow", "chocolate", "matcha"];
//Using sort() method to get this array below:
//[ 'chocolate', 'matcha', 'rainbow', 'vanilla' ]
//answer: icecreams1.sort()

// filter()
const icecreamCosts = [2.95, 4, 5];
const expensiveIcecreamCosts = icecreamCosts.filter(function (cost, index, array) {
  return cost > 3;
});
console.log(expensiveIcecreamCosts); //results == [4, 5]
//filter() exercise
const array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/*Use filter() method get this array [2,4,6,8,10]
Hint: % 
answer:
const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0; // Check if number is even
});
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]
*/

// indexOf()
const icecreamsIndexOf = ["vanilla", "chocolate", "matcha"];
let chocIndex = icecreamsIndexOf.indexOf("chocolate");
console.log(chocIndex); // 1

// includes()
const arrayOfThings = ["books", "pens", "paper", "pencils", "words"];
const guess = arrayOfThings.includes("shoe");
console.log(guess); //false

//create a prompt and let user to guess the element in the array above
// console true or false
const userInput = prompt("Enter a thing!");
console.log(`${arrayOfThings.includes(userInput)}`);

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

// ------------ EXERCISE ------------
// Convert the case of the first letter of every word to uppercase
// good morning to you => Good Morning To You
//version E
let s = "good MORNING to yoU";
//change all the letter to lower case
let b = s.toLowerCase();
console.log(b);
//convert sentance to Array
let c = b.split(" ");
console.log(c);
//change first letter of each word to uppercase
let d = c.map((word) => word[0].toUpperCase() + word.slice(1));
console.log(d);
//convert array to string
let e = d.join(" ");
console.log(e);
//combine them together into one function
function capitalise(sentance) {
  return sentance
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

capitalise("hoW aRe yOu tOdAy?");

//other solution:
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
