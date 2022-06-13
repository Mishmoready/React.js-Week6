import { useState } from "react";
import Car from "./Car";
import Person from "./Person";
// Map Method. Like forEach but returns a new array
const numbers = [1, 4, 9];
const roots = numbers.map((num) => num + 1);
console.log(roots);

// another example of map method
const fruitsA = ["apple", "mango", "orange"];

fruitsA.map(function (fruit, index) {
  console.log(`${index + 1}. ${fruit}`);
});

const fruits = [
  {
    name: "Apple",
    units: 3,
    price: 0.25,
  },
  {
    name: "Mango",
    units: 6,
    price: 0.35,
  },
  {
    name: "Banana",
    units: 4,
    price: 0.15,
  },
];

const newArrayFromFruits = fruits.map(
  (fruit, index) =>
    `${index + 1}) ${fruit.units} units of ${fruit.name} costs $${(
      fruit.price * fruit.units
    ).toFixed(2)}`
);
console.log(newArrayFromFruits);

// Rendering Map Elements on the page
const users = [
  { id: 1, name: "Sally Rogers" },
  { id: 2, name: "Buddy Sorrell" },
  { id: 3, name: "Jane Doe" },
];

// Destructuring Objects
const myObj2 = { id: 1, name: "Sally Rogers" };
const myName = myObj2.name;
// const { name } = myObj2;
// console.log(myName, name);

const myObj = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "It's collaboration time",
    bs: "harness real-time e-markets",
  },
};

const { name, email } = myObj;
console.log(name, email);

function App() {
  const [count, setCount] = useState(0);

  function updateCount() {
    setCount(count + 1);
  }

  return (
    <div>
      {/* <Car carModel="Prius" carName="Toyota!!!"></Car>
      {users.map((user) => (
        <div>{user.name}</div>
      ))}
      <Person name="Rob" age="25" /> */}

      <div>Count: {count}</div>
      <button onClick={updateCount}>Update count</button>
    </div>
  );
}

export default App;
