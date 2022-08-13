// This page demonstrates a user logging in fetch request, Optional Chaining, and Updating a state based on previous state values
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [results, setResults] = useState();
  const [userToLogin, setUserToLogin] = useState({});
  const [selected, setSelected] = useState();

  // ---------------------------------------
  // Get student data from backend (to map out the student images)
  useEffect(() => {
    fetch("http://localhost:4000/students")
      .then((response) => response.json())
      .then((res) => setResults(res));
  }, []);

  // ---------------------------------------
  // Update the userToLogin state with user's entered login details
  const handleLoginInputs = (e) => {
    setUserToLogin((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  // Send login form data to backend to validate credentials
  const handleLogin = (e) => {
    e.preventDefault();
    if (e.target.name === "students") {
      // If user clicks login button on students side
      console.log(userToLogin);
      fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...userToLogin, type: "student" }),
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.length === 0) {
            return alert("Credentials were wrong buddy");
          }
          console.log(response);
          alert(`Welcome, ${response[0].name}!`);
        });
    }

    if (e.target.name === "teachers") {
      // If user clicks login button on teachers side
      console.log(userToLogin);
      fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...userToLogin, type: "teacher" }),
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.length === 0) {
            return alert("Credentials were wrong buddy");
          }
          console.log(response);
          alert(`Welcome, ${response[0].name}!`);
        });
    }
  };
  // ---------------------------------------
  // Optional Chaining ('?.') - (useful for when rendering/mapping out dynamic data)
  const restaurant = {
    Monday: { opening: "10am", Closing: "6pm" },
    Tuesday: { opening: "10am", Closing: "6pm" },
    Wednesday: { opening: "10am", Closing: "6pm" },
    Thursday: { opening: "10am", Closing: "6pm" },
  };
  const openingTimeThursday = restaurant.Thursday?.opening || "Closed today.";
  const openingTimeFriday = restaurant.Friday?.opening || "Closed today."; // Checks to first see if 'Friday' property exists. Without optional chaining in this case, page would crash
  console.log("openingTimeFriday value: ", openingTimeFriday);

  // ---------------------------------------
  // Maintaining previous states whilst using checkboxes
  const handleSelected = (e) => {
    setSelected((prevState) => {
      return { ...prevState, [e.target.name]: e.target.checked };
    });
  };
  console.log("Checkboxes selected:", selected);

  return (
    <div>
      <div className="profiles border">
        {/* Mapping out the student profiles */}
        {results &&
          results.map((result) => (
            <div key={result.student_id} className="card">
              <img alt="student" src={result.profile_pic} />
              <p>{result.name}</p>
            </div>
          ))}
      </div>
      {/* Maintaining previous states whilst using checkboxes */}
      <div className={"border"}>
        <div className={"border"}>
          <input onChange={handleSelected} type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label htmlFor="vehicle1"> I have a bike</label>
          <br />
          <input onChange={handleSelected} type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
          <label htmlFor="vehicle2"> I have a car</label>
          <br />
          <input onChange={handleSelected} type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
          <label htmlFor="vehicle3"> I have a boat</label>
        </div>
        {/* Sending login data */}
        <form className={"border"}>
          <h2>STUDENTS Login</h2>
          <label>Email</label>
          <input onChange={handleLoginInputs} type="email" name="email" />
          <label>Password</label>
          <input onChange={handleLoginInputs} type="password" name="password" />
          <button onClick={handleLogin} name="students">
            Login
          </button>
        </form>
        <form className={"border"}>
          <h2>TEACHERS Login</h2>
          <label>Email</label>
          <input onChange={handleLoginInputs} type="email" name="email" />
          <label>Password</label>
          <input onChange={handleLoginInputs} type="password" name="password" />
          <button onClick={handleLogin} name="teachers">
            Login
          </button>
        </form>
        {/* Optional Chaining example */}
        <p>Optional Chaining example:</p>
        <p>
          Opening time on Thursday: <b>{openingTimeThursday}</b>
        </p>
        <p>
          Opening time on Friday: <b>{openingTimeFriday}</b>
        </p>
      </div>
    </div>
  );
}

export default App;
