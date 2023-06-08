import { useState } from "react";

export default function Form() {
  const [val, setVal] = useState("");
  const [inputList, setInputList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
    setInputList();
  };

  function handleChange(event) {
    console.log(event.target.value);
    // alert("giddy");
    setVal(event.target.value);
  }

  return (
    <>
      <label>Input field</label>
      <h2>Add an item</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" onChange={handleChange}></input>
          <button type="submit">Submit</button>
          <ul>
            {inputList.map(function (item) {
              return <li>{item}</li>;
            })}
          </ul>
        </div>
      </form>
    </>
  );
}
