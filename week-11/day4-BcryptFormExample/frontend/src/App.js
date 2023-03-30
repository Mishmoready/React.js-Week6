import "./App.css";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailSignup, setEmailSignup] = useState("");
  const [passwordSignup, setPasswordSignup] = useState("");
  const [messageToRender, setMessageToRender] = useState("");

  function handleForm(e) {
    // prevent page from refreshing when form is submitted
    e.preventDefault(e);
    if (e.target.name === "signup") {
      fetch(`http://localhost:4000/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailSignup, password: passwordSignup }),
      })
        .then((res) => {
          console.log(res);
          if (res.ok) {
            const message = <span style={{ color: "green" }}>User successfully created!</span>;
            setMessageToRender(message);
            setEmailSignup("");
            return setPasswordSignup("");
          }
          if (!res.ok) {
            const message = <span style={{ color: "red" }}>Something went wrong!</span>;
            setMessageToRender(message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (e.target.name === "login") {
      fetch(`http://localhost:4000/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, password: password }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.length === 1) {
            const message = <span style={{ color: "green" }}>Welcome, {res[0].name}!</span>;
            setMessageToRender(message);
            setEmail("");
            setPassword("");
          } else {
            const message = <span style={{ color: "red" }}>Incorrect user details!</span>;
            setMessageToRender(message);
          }
        });
    }
  }

  // // The below handleForm function is a little more advanced but a better way of implementing the fetch method (using status codes and throwing a new error message)
  // function handleForm(e) {
  //   // prevent page from refreshing when form is submitted
  //   e.preventDefault(e);
  //   if (e.target.name === "login") {
  //     fetch(`http://localhost:4000/login`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ email: email, password: password }),
  //     })
  //       .then((res) => {
  //         if (res.status === 404) {
  //           const message = <span style={{ color: "red" }}>The user does not exist in the database! 💥</span>;
  //           setMessageToRender(message);
  //           throw new Error(`The user does not exist in the database! 💥 (${res.status})`);
  //         }
  //         if (res.status === 401) {
  //           const message = (
  //             <span style={{ color: "red" }}>The username and password credentials entered is incorrect! 💥</span>
  //           );
  //           setMessageToRender(message);
  //           throw new Error(`User credentials were incorrect! 💥(${res.status})`);
  //         }
  //         return res.json();
  //       })
  //       .then((res) => {
  //         console.log(res);
  //         const message = <span style={{ color: "green" }}>Welcome, {res[0].name}! 🙌</span>;
  //         setMessageToRender(message);
  //         setEmail("");
  //         setPassword("");
  //         return;
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }

  //   if (e.target.name === "signup") {
  //     fetch(`http://localhost:4000/signup`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ email: emailSignup, password: passwordSignup }),
  //     })
  //       .then((res) => {
  //         console.log(res);
  //         if (res.ok) {
  //           const message = <span style={{ color: "green" }}>User successfully created!</span>;
  //           setMessageToRender(message);
  //           setEmailSignup("");
  //           return setPasswordSignup("");
  //         }
  //         if (!res.ok) {
  //           const message = <span style={{ color: "red" }}>Something went wrong!</span>;
  //           setMessageToRender(message);
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }

  return (
    <div className="App">
      <div className="form">
        <div className="login-form">
          <h1>Log in</h1>
          <form>
            <div>Email</div>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="input-box"
              type="email"
              name="email"
            />
            <div>Password</div>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="input-box"
              type="password"
              name="password"
            />
            <input onClick={handleForm} name="login" className="submitButton" type="submit" value="Login!" />
          </form>
        </div>
        <div className="signup-form">
          <h1>Sign Up</h1>

          <form>
            <div>Email</div>
            <input
              value={emailSignup}
              onChange={(e) => setEmailSignup(e.target.value)}
              className="input-box"
              type="email"
              name="email"
            />
            <div>Password</div>
            <input
              value={passwordSignup}
              onChange={(e) => setPasswordSignup(e.target.value)}
              className="input-box"
              type="password"
              name="password"
            />
            <input onClick={handleForm} name="signup" className="submitButton" type="submit" value="Sign up!" />
          </form>
        </div>
      </div>
      {messageToRender}
    </div>
  );
}

export default App;
