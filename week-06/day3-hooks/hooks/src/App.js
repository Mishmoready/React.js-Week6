import "./App.css";
// imported this method 'useState()' from the react library.
import { useState, useEffect } from "react";

function App() {
  // Creating a state variable called count
  // Initialized with a value 0; kind of like let count = 0;
  const [count, setCount] = useState(0);
  const [subCount, setSubCount] = useState(100);
  const [theRunningTotal, setTheRunningTotal] = useState(0);
  const [colour, setColour] = useState("red");

  // Add 1 on every button click
  // let myNum = 0;

  function updateCount() {
    setCount(count + 1);
    // Doesn't work with React (which is why we need to use state)
    // myNum = myNum+1
    // console.log("I got triggered!")
  }

  // Subtract 1 on every button click
  function updateSubCount() {
    setSubCount(subCount - 1);
  }

  // Some useEffect examples

  useEffect(function () {
    // This useEffect is triggered on every render (every update) of the component
    console.log("Component re-rendered");
  });

  useEffect(() => {
    // This useEffect is triggered every time the count state variable is updated
    console.log("Count state variable was updated!");
  }, [count]);

  useEffect(function () {
    // This useEffect is triggered only when the component mounts
    console.log("Component rendered for the FIRST time only.");
  }, []);

  useEffect(() => {
    console.log(`The count is at ${count}`);
  });

  useEffect(() => {
    console.log(`The count is at ${count}`);
    setTheRunningTotal(theRunningTotal + count); // We are setting the
    console.log(`the SUM is at ${theRunningTotal}`);
  });

  function changeColour() {
    switch (colour) {
      case "red":
        setColour("blue");
        break;
      case "blue":
        setColour("green");
        break;
      case "green":
        setColour("orange");
        break;
      case "orange":
        setColour("yellow");
        break;
      default:
        setColour("red");
    }
  }

  useEffect(() => {
    console.log(`Colour of the H1 tag changed to ${colour}`);
  }, [colour]);

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={updateCount}>Update count</button>
      <div>Subtraction Counter: {subCount}</div>
      <button onClick={updateSubCount}>Subtract value</button>
      <h1 style={{ background: colour }}>This element is going to chance colour</h1>
      <button onClick={changeColour}>Change colour</button>
    </div>
  );
}

export default App;
