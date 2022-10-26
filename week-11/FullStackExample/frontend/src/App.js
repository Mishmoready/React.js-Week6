import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [results, setResults] = useState();
  const [userToLogin, setUserToLogin] = useState({});
  const [loggedInUser, setLoggedInUser] = useState({});

  // -------------------- FULL STACK GET REQUEST EXAMPLE --------------------
  // useEffect(function () {
  //   // Sending HTTP request using Fetch
  //   fetch("http://localhost:4000/api/students")
  //     .then((res) => res.json())
  //     .then((resultsData) => {
  //       setResults(resultsData);
  //     });
  //   // Sending HTTP request using Axios
  //   // axios.get("http://localhost:4000/api/students").then((res) => console.log(res));
  // }, []);

  // -------------------- FULL STACK POST REQUEST EXAMPLE --------------------
  function handleUserInput(event) {
    setUserToLogin((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  }

  // Why using square brackets above for e.target.name again?
  // let a = "aKey";
  // let myObj = { [a]: 10 }; // We always use square brackets when we need to compute a dynamic value.
  // // output will be {aKey:10}
  // console.log(myObj);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("User submitted details:", userToLogin);

    fetch("http://localhost:4000/api/authentication/login", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userToLogin),
    })
      .then((res) => {
        if (res.status === 401) {
          alert(`The username and password credentials entered is incorrect! 💥(${res.status})`);
          // We didn't discuss the Error object, but we can create our own errors, which will then be displayed in the .catch() block
          throw new Error(`User credentials were incorrect! 💥(${res.status})`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("User logged in successfully:", data[0]);
        setLoggedInUser(data[0]);
      })
      .catch((error) => console.error("Here's a new error yo: ", error));

    //   axios
    //     .post("http://localhost:4000/api/authentication/login", userToLogin)
    //     .then((data) => {
    //       console.log("User logged in successfully:", data.data[0]);
    //       setLoggedInUser(data.data[0]);
    //     })
    //     .catch((error) => {
    //       if (error.response.status === 401) {
    //         alert(`The username and password credentials entered is incorrect! 💥(${error.response.status})`);
    //         console.error(`User credentials were incorrect! 💥(${error.response.status})`);
    //       }
    //     });
  };

  return (
    <div className="App">
      {/* Example 1 - Full Stack example with GET request*/}
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
      {/* Example 2 - Full Stack example with POST request */}
      <form>
        <label>Your username: </label>
        <input name="username" onChange={handleUserInput} type="text"></input>
        <label>Your password: </label>
        <input name="password" onChange={handleUserInput} type="password"></input>
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}

export default App;
