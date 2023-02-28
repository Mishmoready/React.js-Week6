import { useState } from "react";

export default function Form() {
  const [inputList, setInputList] = useState([]); // setting the initial state of inputList to an empty array
  const [val, setVal] = useState(""); // setting the initial state of val to an empty string

  // Function that triggers when submit button is clicked
  const handleSubmit = function (event) {
    event.preventDefault(); // prevent default behaviour of a form submission (prevent page refresh)
    const temp = [...inputList, val]; // we spread out the values of inputList state array (which is like making a copy of it)
    console.log(temp);
    setInputList(temp);
  };

  // Function that triggers each time the input textbox element changes (ie when a character is entered)
  // const handleChange = (event) => setVal(event.target.value); // using arrow function syntax
  const handleChange = function (event) {
    setVal(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} />
        <input type="submit"></input>
      </form>
      <ul>
        {inputList.map(function (item) {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}
