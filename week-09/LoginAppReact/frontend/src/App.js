import "./App.css";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messageToRender, setMessageToRender] = useState("");

  function handleSubmit(e) {
    // prevent page from refreshing when form is submitted
    e.preventDefault(e);

    fetch(`http://localhost:4000/loginWithFetch`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
    }).then((res) => {
      if (res.status === 200) {
        setMessageToRender(
          <span style={{ color: "green" }}>Login Success!</span>
        );
      } else if (res.status === 404) {
        setMessageToRender(<span style={{ color: "red" }}>Login Failed</span>);
      }
    });
  }

  return (
    <div className="App">
      <h1>Log in</h1>

      <form onSubmit={handleSubmit}>
        <div>Email</div>
        <input
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          className="input-box"
          type="email"
          name="email"
        />
        <div>Password</div>
        <input
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          className="input-box"
          type="password"
          name="password"
        />
        <input className="submitButton" type="submit" />
      </form>
      {messageToRender}
    </div>
  );
}

export default App;
