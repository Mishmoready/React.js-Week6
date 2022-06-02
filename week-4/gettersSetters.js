//  Exercise 1
class Recipe {
  constructor(title, servings, ingredients) {
    this.title = title;
    this.servings = servings;
    this.ingredients = ingredients;
  }

  makeRecipes() {
    console.log("Your food is ready !");
  }

  showDetails() {
    console.log("Title:", this.title);
    console.log("Servings:", this.servings);
    console.log("Ingredients:", this.ingredients);
  }
}

const teaRecipe = new Recipe("Tea", 2, ["water", "tea-bags", "milk"]);
const coffeeRecipe = new Recipe("Coffee", 2, ["water", "coffee", "sugar"]);

console.log(teaRecipe);
console.log(teaRecipe.ingredients);
console.log(teaRecipe.makeRecipes());
console.log(teaRecipe.showDetails());
console.log(coffeeRecipe.showDetails());

// ------------- GETTERS -------------
const student = {
  // data property
  firstName: "Monica",
  // accessor property(getter)
  get getName() {
    return this.firstName;
  },
};
// accessing data property
console.log(student.firstName); // Monica
// accessing getter methods
console.log(student.getName); // Monica
// trying to access as a method
// console.log(student.getName()); // error

// ------------- SETTERS -------------
const language = {
  log: [],
  set current(name) {
    this.log.push(name);
  },
};
language.current = "EN";
language.current = "FA";
console.log(language.log);

// ------------- EXAMPLE -------------
class Student {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return new Date().getFullYear() - this.birthYear;
  }

  set fullName(name) {
    console.log("HERE", name);
    if (name.includes(" "))
      this._fullName = name; // without underscore it causes a stack overflow
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}
const sally = new Student("Sally Rogers", 1923);
console.log(sally);

console.log(sally.age);

sally.fullName = "John Doe";
console.log(sally.fullName);

// ----------------- Exercise 2 -----------------

class CarSales {
  constructor(carList) {
    this.carList = carList;
  }
  //   carList = []; // you can set a default value without a constructor

  set car(carName) {
    this.carList.push(carName);
  }

  get car() {
    if (this.carList.length === 0) {
      return "sorry! Out of cars";
    }
    return this.carList;
  }

  rentACar() {
    this.carList.pop();
  }

  returnCar(carName) {
    this.carList.push(carName);
  }
}

const bmwSales = new CarSales([]);
console.log(bmwSales);

bmwSales.car = "blue car";

console.log(bmwSales);

bmwSales.car = "red car";
console.log(bmwSales);

bmwSales.car = "silver car";
console.log(bmwSales);

console.log(bmwSales.car);
bmwSales.rentACar();
console.log(bmwSales.car);

bmwSales.returnCar("pink car");
console.log(bmwSales.car);
