import { useState } from "react";
import InputComponent from "./components/InputComponent";
import ShowInput from "./components/ShowInput";

const App = () => {
  const [val, setVal] = useState(""); // we took the state out from the InputComponent.js file and put it here, because App.js is the closest ancestor of the two child components

  // The below function is triggered in the InputComponent.js file with the onChange event
  // Whoever called the handleChangeMethodInApp function, whatever element it was we get access to the event data even though we called it in another component.
  const handleChangeMethodInApp = function (event) {
    setVal(event.target.value); // The Target here is the input textbox element in InputComponent.js
    // we update the val state variable with the value from the input textbox
  };

  return (
    <div style={{ border: "2px solid black", margin: "5px" }}>
      {/* We pass the handleChangeMethodInApp function as a prop into InputComponent, and we call it 'handleChange'*/}
      <InputComponent val={val} handleChange={handleChangeMethodInApp} />
      <ShowInput val={val} />
    </div>
  );
};
export default App;

// EXERCISE 1
// import { useState } from "react";
// import Counter from "./components/Counter";
// function App() {
//   const [count, setCount] = useState(0);
//   const updateCount = function () {
//     setCount(count + 1);
//   };
//   return (
//     <div className="App">
//       <Counter count={count} updateCount={updateCount} />
//       <Counter count={count} updateCount={updateCount} />
//     </div>
//   );
// }
// export default App;
