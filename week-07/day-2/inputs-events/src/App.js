import { useState } from 'react';
function App() {
  //1.  Create a state variable - val
  const [val, setVal] = useState('');
  // A function which is run every time the user types something
  // This function is going to update the state variable
  const handleChange = (event) => {
    // The event object is part of every event fired and contains info
    // about the event and in case of text input
    console.log(event.target.value);
    // 2. Update the state variable
    setVal(event.target.value);
  };

  return (
    <div>
      <label>Your Input Field</label>
      <div>
        <input type="text" onChange={handleChange} />
      </div>
      {/* 3. Print the variable value on the screen */}
      <h1>{val}</h1> <br />
    </div>
  );
}

export default App;
