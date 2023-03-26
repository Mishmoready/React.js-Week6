import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [results, setResults] = useState();

  useEffect(() => {
    fetch("http://localhost:4000/api/students")
      .then((response) => response.json())
      .then((data) => setResults(data));
  }, []);

  return (
    <div className="App">
      {results &&
        results.map(function (result) {
          return (
            <div key={result.id} className="card">
              <img className="avatar" src={result.profile_pic} alt="student"></img>
              <span>{result.name}</span>
            </div>
          );
        })}
    </div>
  );
}

export default App;
