import axios from "axios";
import { useState, useEffect } from "react";
function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => {
      setPokemon(res.data.results);
      console.log(res.data.results);
    });
  }, []);

  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   axios.get("https://reqres.in/api/users").then((res) => {
  //     setUsers(res.data.data);
  //   });
  // }, []);

  // axios.get("https://reqres.in/api/users").then((res) => console.log(res));
  // the below fetch is same as the above
  // fetch("https://reqres.in/api/users")
  //   .then((res) => res.json())
  //   .then((finalData) => console.log(finalData));

  // Pokemon Exercise:
  // https://pokeapi.co/api/v2/pokemon

  return (
    <div className="App">
      {/* {users.map((user) => (
        <h3 key={user.id}>
          {user.first_name} {user.last_name}
        </h3>
      ))} */}
      {pokemon.map((pokemonObj) => (
        <h3 key={pokemonObj.name}>{pokemonObj.name}</h3>
      ))}
    </div>
  );
}

export default App;
//
