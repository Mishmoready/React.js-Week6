import { useState } from "react";
export default function Forms() {
  const [inputList, setInputList] = useState([]);
  const [val, setVal] = useState("");

  // What is useState? Just an array that we are destructuring.
  // console.log(useState(1));

  // // Doesn't really work:
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   inputList.push(val);
  //   console.log(inputList);
  //   setInputList(inputList);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const myArr = [...inputList, val]; // spreads out the values of the original array, kind of like making a copy of the original array
    console.log(myArr);
    setInputList(myArr);
  };

  const handleChange = (e) => setVal(e.target.value);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input onChange={handleChange} />
        </div>
        <input type="submit" />
      </form>

      <ul>
        {inputList.map((item) => (
          <p>{item}</p>
        ))}
      </ul>
    </div>
  );
}
