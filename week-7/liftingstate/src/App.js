import { useState } from "react";
import InputComponent from "./components/InputComponent";
import ShowInput from "./components/ShowInput";
import Counter from "./components/Counter";

const App = () => {
  const [val, setVal] = useState(""); // we took the state out from the InputComponent.js file and put it here, because App.js is the closest ancestor of the two child components
  const [count, setCount] = useState(0);

  // The below function is triggered in the InputComponent.js file with the onChange event
  // Whoever called the handleChangeFunctionInApp function, whatever element it was we get access to the event data even though we called it in another component.
  const handleChangeFunctionInApp = function (event) {
    setVal(event.target.value); // The Target here is the input textbox element in InputComponent.js
    // we update the val state variable with the value from the input textbox
  };

  // Exercise 1 function
  const updateCount = function () {
    setCount(count + 1);
  };

  return (
    <div style={{ border: "2px solid black", margin: "5px" }}>
      {/* We pass the handleChangeFunctionInApp function as a prop into InputComponent, and we call it 'handleChange'*/}
      <InputComponent handleChange={handleChangeFunctionInApp} />
      <ShowInput val={val} />

      {/* EXERCISE 1 */}
      <Counter count={count} updateCount={updateCount} />
      <Counter count={count} updateCount={updateCount} />
    </div>
  );
};
export default App;
