/** 
 * 
 * Just objects
   ============
const user1 = {
  firstName: 'Jon',
  lastName: 'Snow',
};

console.log(user1.firstName, user1.lastName);

const user2 = {
  firstName: 'Ned',
  lastName: 'Stark',
};

console.log(user2.firstName, user2.lastName);
*/

// With classes
class User {
  // special method to create & return an object with these properties
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
}

// new  => Special keyword to call the constructor of the class
const user1 = new User("Jon", "Snow");
console.log(user1);
console.log(user1.firstname, user1.lastname);

const user2 = new User("Ned", "Stark");
console.log(user2);
console.log(user2.firstname, user2.lastname);

/**
 *
 * Using a class create a person object with a name property and give it a value
 *
 */

// Template - Blueprint
class Person {
  constructor(name) {
    this.name = name;
  }
}

const otto = new Person("Otto");
console.log(otto.name);

const seb = new Person("Sebin");
console.log(seb.name);
