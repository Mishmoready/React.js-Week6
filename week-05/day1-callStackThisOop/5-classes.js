// ------------- CLASSES -------------
class Person {
  // special method of the class
  // This needs to be unique for a class (only one constructor in a class)
  //
  constructor(name) {
    this.name = name;
  }
  displayName() {
    console.log(this.name);
  }
}

// The new keyword is used to create a new object richie of the class Person
const richie = new Person("Richie Petrie");
console.log(richie.name);

const millie = new Person("Millie Helper");
console.log(millie.name);

// I can run the method I've created on my human class
millie.displayName();

// this a class called Person with one property name
class Human {
  gender = "unknown";
}

// buddy is the object of the class Person
const buddy = new Human();
console.log(buddy);
buddy.gender = "male";
console.log(buddy.gender);
console.log(buddy);

// sally is the object of the class Person
const sally = new Human();
sally.gender = "female";
console.log(sally.gender);
console.log(sally);

// --- Example 2
class Person {
  constructor(age, cool) {
    this.age = age;
    this.cool = cool;
  }
  printAge() {
    return `${this.age} is the age`;
  }
  isCool() {
    if (this.cool) {
      console.log("is cool!");
    } else {
      console.log("not cool");
    }
  }
}

const rob = new Person(23, true);

console.log(rob.printAge());

rob.isCool();

// ---------------- Exercise 1 ----------------
class Vehicle {
  constructor(model, manufacturer, yearOfManufacture, colour) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.yearOfManufacture = yearOfManufacture;
    this.colour = colour;
  }

  dealership = "Bob's cars"; // you can set a default value without the constructor

  getColour() {
    console.log(this.colour);
  }
  getManufacturerInfo() {
    console.log(`${this.manufacturer} manufactured in ${this.yearOfManufacture}`);
  }
}

const honda = new Vehicle("Civic", "Honda", 2019, "blue");
honda.getManufacturerInfo();

// there are other things we can do with classes like adding getters and setters
