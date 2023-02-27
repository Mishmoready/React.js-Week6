/*
  Create a counter from scratch that 
  starts at 100 and 
  subtracts by 1 whenever the button is pressed.
*/

import { useEffect, useState } from 'react';
function App() {
  // Declare a new state variable, which we'll call "count"
  // Set an initial value of 100
  //     0-state 1-fn
  const [count, setCount] = useState(100);

  // Run whenever the state (count) changes
  // No second parameter - runs on EVERY change.
  useEffect(() => console.log('Value of count has changed to ' + count));
  
  // Empty array as the second parameter - runs ONCE.
  useEffect(() => console.log("Good morning !"), []);

  function updateCount() {
    //update the state
    setCount(count - 1);
  }
  // function updateCount() {
  //   if (count === 0) {
  //     setCount(100);
  //   } else {
  //     setCount(count - 1);
  //   }
  // }
  return (
    <div className="App">
      <div> count: {count} </div>
      <button onClick={updateCount}>Reduce Count</button>
    </div>
  );
}

export default App;
