// function removeVowels(str) {
//   return str
//     .split("")
//     .map((letter) => {
//       if (
//         letter === "a" ||
//         letter === "e" ||
//         letter === "i" ||
//         letter === "o" ||
//         letter === "u"
//       ) {
//         return "";
//       } else {
//         return letter;
//       }
//     })
//     .join("");
// }

// Refactored code
const removeVowels = (str) => str.split(/[aeiou]/).join("");

module.exports = { removeVowels };
