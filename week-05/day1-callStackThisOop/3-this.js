// How we've been doing it so far
const person = {
  firstName: "Rob",
  lastName: "Petrie",
  greetings: function () {
    return `Hello ${person.firstName}`;
  },
};

// Note the (), which asks to Run the function.
console.log(person.greetings());

// ------------this------------
// We can do the same with this keyword
const person2 = {
  firstName: "Rob",
  lastName: "Petrie",
  greetings: function () {
    return `Hello ${this.firstName}`;
  },
};
console.log(person2.greetings());
person2.firstName = "Jane";
console.log(person2.greetings());
