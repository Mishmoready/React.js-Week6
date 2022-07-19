import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [results, setResults] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/students")
      .then((response) => response.json())
      .then((res) => {
        setResults(res);
      });
  }, []);

  // console.log(results);

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   if (e.target.name === "login") {
  //     fetch("http://localhost:4000/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ email: email, password: password }),
  //     })
  //       .then((res) => res.json())
  //       .then((response) => {
  //         if (response.length === 0) {
  //           return alert("Wrong credentials buddy");
  //         }
  //         alert(`Welcome, ${response[0].name}!`);
  //         setEmail("");
  //         setPassword("");
  //       });
  //   }
  // };

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
      {/* Sending login data */}
      {/* <form>
        <h2>Login</h2>
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
        <label>Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
        <button onClick={handleLogin} name="login">
          Login
        </button>
      </form> */}
    </div>
  );
}

export default App;
