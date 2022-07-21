import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [results, setResults] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selected, setSelected] = useState();

  // Maintaining previous states whilst using checkboxes
  const handleSelected = (e) => {
    setSelected((prevState) => {
      return { ...prevState, [e.target.name]: e.target.checked };
    });
  };

  // Get student data from backend
  useEffect(() => {
    fetch("http://localhost:4000/students")
      .then((response) => response.json())
      .then((res) => {
        setResults(res);
        console.log(results);
      });
  }, []);

  // Send login form data to backend to validate credentials
  const handleLogin = (e) => {
    e.preventDefault();
    if (e.target.name === "login") {
      fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.length === 0) {
            return alert("Credentials were wrong buddy");
          }
          alert(`Welcome, ${response[0].name}!`);
          setEmail("");
          setPassword("");
        });
    }
  };

  return (
    <div className="App">
      {/* Mapping out the student profiles */}
      {results &&
        results.map((result) => (
          <div key={result.student_id} className="card">
            <img alt="student" src={result.profile_pic} />
            <p>{result.name}</p>
          </div>
        ))}

      {/* Maintaining previous states whilst using checkboxes */}
      <input onChange={handleSelected} type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
      <label htmlFor="vehicle1"> I have a bike</label>
      <br />
      <input onChange={handleSelected} type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
      <label htmlFor="vehicle2"> I have a car</label>
      <br />
      <input onChange={handleSelected} type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
      <label htmlFor="vehicle3"> I have a boat</label>
      <br />
      {/* Sending login data */}
      <form>
        <h2>Login</h2>
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
        <label>Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
        <button onClick={handleLogin} name="login">
          Login
        </button>
      </form>
    </div>
  );
}

export default App;
