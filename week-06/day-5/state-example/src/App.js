import { useState } from 'react';

function App() {
  // useState(initialValue) - method which takes an initialValue for the state to be created 
  // usestate returns an array => 
      // 1. State variable 
      // 2. A method to update the state
  const stateResult = useState(0);
  const count = stateResult[0];
  const setCounter = stateResult[1];

  function updateCount() {
    // Update the count value to +1
    // console.log('Somebody please update the counter');
    setCounter(count + 1)
  }

  return (
    <div>
      <h1>Count : {count}</h1>
      {/* In JSX you use ={} instead of ="" for calling function in onClick */}
      <button onClick={updateCount}> Add Count</button>
    </div>
  );
}

export default App;
