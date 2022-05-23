// ---------Exercise 1---------
const first = '"Shall we go?" she said.';
// const second = "Remember to say "please" 'and' "thank you.""; doesn't work because a mix of quote marks
console.log(first, second);

// ---------Exercise 2---------
// Escaping special characters
const firsta = '"Shall we go?" she said.'; // same as above
const firstb = 'Remember to say "please" \'and\' "thank you."';
console.log(firsta, firstb);

const firstc = `Remember to say "please" 'and' "thank you."`; // Using a template literal (back ticks), I don't need to escape
console.log(firstc);

const myMessage = "Teapot";
console.log(myMessage.length); // Output: 6
console.log(myMessage[myMessage.length - 1]); // Output: t
console.log(myMessage.at(-1)); // Output: t. This is new addition JavaScript as at 2022

// ---------Exercise 3---------
const quotePart1 = '"Concentrate all you thoughts ';
const quotePart2 = "upon the work in hand. The sun's rays do not burn ";
const quotePart3 = 'until brought to a focus."';
const quotePart4 = " — Alexander Graham Bell";

const quote = quotePart1 + quotePart2 + quotePart3 + quotePart4;
console.log(quote, quote.length);

// ---------Exercise 4---------
const userMessage = prompt("Enter your sentence in here:"); // result is stored as a string in the userMessage variable
const trimmedUserMessage = userMessage.trim(); // trim the white space of the ends of the string

if (trimmedUserMessage.length <= 10) {
  alert(trimmedUserMessage.toUpperCase());
} else {
  alert(trimmedUserMessage.toLowerCase());
}

// same as above conditional statement but using the ternary operator
trimmed.length <= 10
  ? alert(trimmed.toUpperCase())
  : alert(trimmed.toLowerCase());

// ---------Type Coercion---------
// Other things we looked at
console.log(typeof userMessage); // tells us the datatype of userMessage
console.log(1 + Number("2"));
console.log(1 + parseInt("2notRead"));

console.log(9999999999999999); // → 10000000000000000

// ---------Bonus Content---------
const someString = "Hello there! How are you";
console.log(someString.length); // 24

const answer = prompt("What is 2+2", "5");
if (answer != "4") {
  alert("Sorry, wrong answer. 2+2 is 4");
}
