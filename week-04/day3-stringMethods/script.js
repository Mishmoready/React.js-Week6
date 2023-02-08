// ---------------------STRING METHODS---------------------
// ---------Exercise 1---------
const userMessage = prompt("Enter your sentence in here:"); // result is stored as a string in the userMessage variable
const trimmedUserMessage = userMessage.trim(); // trim the white space of the ends of the string

if (trimmedUserMessage.length <= 10) {
  alert(trimmedUserMessage.toUpperCase());
} else {
  alert(trimmedUserMessage.toLowerCase());
}

// same as above conditional statement but using the ternary operator
trimmed.length <= 10 ? alert(trimmed.toUpperCase()) : alert(trimmed.toLowerCase());
