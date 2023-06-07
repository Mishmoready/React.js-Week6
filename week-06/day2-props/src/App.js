import "./App.css";
import Greeting from "./Greeting.js";
import Car from "./Car";
import Person from "./Person";

function App() {
  // Example 1
  const numbers = [1, 4, 9];
  const addOne = numbers.map(function (number) {
    return number + 1;
  });
  console.log(addOne);

  // Example 2
  const fruits = ["apple", "mango", "orange"];
  const mappedFruits = fruits.map((fruit, index) => {
    return `${index}. ${fruit}`;
  });
  console.log(mappedFruits);

  // Exercise 1
  const fruitOrder = [
    {
      name: "Apple",
      qty: 3,
      singlePrice: 0.25,
    },
    {
      name: "Mango",
      qty: 6,
      singlePrice: 0.35,
    },
    {
      name: "Banana",
      qty: 4,
      singlePrice: 0.15,
    },
  ];

  const mappedFruitOrder = fruitOrder.map(function (fruit, index) {
    return `${index + 1}) ${fruit.qty} units of ${fruit.name} costs $${(fruit.singlePrice * fruit.singlePrice).toFixed(2)}`;
  });
  console.log(mappedFruitOrder);

  // users is mapped out in the JSX below.
  const users = [
    { id: 1, name: "Sally Rogers" },
    { id: 2, name: "Buddy Sorrell" },
    { id: 3, name: "Jane Doe" },
  ];

  // Object Destructuring
  let person = {
    firstName: "John",
    lastName: "Doe",
  };

  let { firstName: fName, lastName: lName } = person;
  console.log(fName, lName);

  // Exercise 2
  const myObj = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      companyName: "Romaguera-Crona",
      catchPhrase: "It's collaboration time",
      bs: "harness real-time e-markets",
    },
  };

  const {
    username,
    email,
    company: { companyName }, // if you wanted to destructure even deeper
  } = myObj;
  console.log(username, email, companyName);

  // Array Destructuring
  const anArray = ["Laide", "Gabriel", "Jets"];
  // const el1 = anArray[0];
  // const el3 = anArray[2];
  const [first, , third] = anArray;

  console.log(first);

  return (
    <div className="App">
      <Greeting />
      {/* Passing data to a child component */}
      <Car carName="Toyota" model="Corolla" />

      {/* Mapping through the users array */}
      {users.map(function (user) {
        return <div>{user.name}</div>;
      })}

      {/* Anything in curly braces will be evaluated */}
      {[<p>Oh!</p>, <p>what a beautiful morning</p>]}

      <Person name="Buddy" age={50} />
    </div>
  );
}

export default App;
