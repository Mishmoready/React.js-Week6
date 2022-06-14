import { useState } from "react";
export default function Forms() {
  const [inputList, setInputList] = useState([]);
  const [val, setVal] = useState("");
  const handleChange = (e) => setVal(e.target.value);

  // // Doesn't really work:
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const temp = inputList;
  //     temp.push(val);
  //     console.log(temp);
  //     setInputList(temp);
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    const temp = [...inputList];
    temp.push(val);
    console.log(temp);
    setInputList(temp);
  };

  const [showContent, setShowContent] = useState(false);
  const changeContent = () => setShowContent(!showContent);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Exercise 1.5</h2>
        <div>
          <input onChange={handleChange} />
        </div>
        <input type="submit" />
      </form>
      <ul>
        {inputList.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </ul>
      <div>
        {showContent
          ? "Congrats you found the hidden content!"
          : "Click the button"}
      </div>

      <div>{showContent && "Congrats you found the BONUS hidden content!"}</div>
      <button onClick={changeContent}>Click here</button>
    </div>
  );
}
