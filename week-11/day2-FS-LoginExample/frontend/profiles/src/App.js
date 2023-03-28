import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [results, setResults] = useState([]);

  //-------------------- FULL STACK GET REQUEST EXAMPLE --------------------
  useEffect(function () {
    // Making an HTTP GET request using Fetch
    fetch('http://localhost:4000/api/students')
      .then((res) => res.json())
      .then((results) => setResults(results));
  }, []);

  return (
    <div className="App">
      {/* Example 1 - Full Stack example with GET request*/}
      {results &&
        results.map(function (result) {
          return (
            <div key={result.id} className="card">
              <img
                className="avatar"
                src={result.profile_pic}
                alt="student"
              ></img>
              <span>{result.name}</span>
            </div>
          );
        })}
    </div>
  );
}

export default App;
