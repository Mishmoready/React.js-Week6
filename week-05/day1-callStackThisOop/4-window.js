// ------------this keyword and the window object ------------
a = 25;
// console.log(a);
// console.log(window.a);

const person3 = {
  firstName: "Laura",
  lastName: "Petrie",
  hello: function () {
    console.log(`Hello ${this.firstName} ${this.lastName}`);
  },
};

function greet() {
  console.log(`Hello from greetFn ${this.firstName} ${this.lastName}`); // the object that is calling this function is the global window object
}

person3.hello();
firstName = "John";
lastName = "Doe";
window.greet();

// Example of using the this keyword. Notice how the value of this changes depending on what object is calling the method.
const person4 = {
  firstName: "Laura",
  lastName: "Petrie",
  hello: greet,
};

function greet() {
  console.log(this);
  console.log(`Hello ${this.firstName} ${this.lastName}`); // this object
}

person4.hello();
firstName = "John";
lastName = "Doe";
window.greet();
