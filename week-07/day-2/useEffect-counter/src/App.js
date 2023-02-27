import { useEffect, useState } from 'react'; // getting the methods from React library.

function App() {
  const [count, setCount] = useState(0);
  const [sum, setSum] = useState(0); // creating another state variable called sum

  useEffect(() => {
    console.log(`The count is at ${count}`);
    setSum(sum + count); // Updating the state variable sum with a new value
    console.log(`The sum is at ${sum}`);
  }, [count]);

  function updateCount() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <div> count: {count} </div>
      <button onClick={updateCount}>Change Count</button>
      The Creative Problem Solving programme is series of digital creation projects aimed to encourage self-motivation and student agency, designed by New Zealand’s leading IT industry experts and schools.
    </div>
  );
}

export default App;
