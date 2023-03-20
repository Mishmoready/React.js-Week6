import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  // https://reqres.in/api/users
  // fetch("https://reqres.in/api/users")
  //   .then((response) => response.json())
  //   .then((response) => console.log(response.data));

  // axios
  useEffect(() => {
    axios.get("https://reqres.in/api/users").then((response) => {
      console.log(response);
      setUsers(response.data.data);
    });
  }, []);

  return (
    <div className="App">
      {users.map(function (user, index) {
        return (
          <div key={user.id}>
            <h3>
              {user.first_name} {user.last_name}
            </h3>
            <img src={user.avatar} alt="" />
          </div>
        );
      })}
    </div>
  );
}

export default App;
