import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [results, setResults] = useState();
  const [loggedInUser, setLoggedInUser] = useState({});

  useEffect(function () {
    // Sending HTTP request using Fetch
    fetch("http://localhost:4000/api/students")
      .then((res) => res.json())
      .then((resultsData) => {
        setResults(resultsData);
      });
    // Sending HTTP request using Axios
    // axios.get("http://localhost:4000/api/students").then((res) => console.log(res));
  }, []);

  function handleUserInput(event) {
    setLoggedInUser((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  }
  console.log(loggedInUser);

  // Why using square brackets above for e.target.name again?
  // let a = "aKey";
  // let myObj = { [a]: 10 }; // We always use square brackets when we need to compute a dynamic value.
  // // output will be {aKey:10}
  // console.log(myObj);

  return (
    <div className="App">
      {/* Example 1 - Full Stack example */}
      {/* {results &&
        results.map(function (result) {
          return (
            <div key={result.id} className="card">
              <img className="avatar" src={result.photo} alt="Student" />
              <span>{result.name}</span>
            </div>
          );
        })} */}
      <br />
      {/* Example 2 - Full Stack example with login form - unfinished */}
      <form>
        <label>Your username: </label>
        <input name="username" onChange={handleUserInput} type="text"></input>
        <label>Your password: </label>
        <input name="password" onChange={handleUserInput} type="text"></input>
      </form>
    </div>
  );
}

export default App;
