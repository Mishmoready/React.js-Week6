import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [weatherData, setWeatherData] = useState();
  const [currentCity, setCurrentCity] = useState("Auckland");
  const [userEnteredCity, setUserEnteredCity] = useState();

  useEffect(
    function () {
      fetch(`http://api.weatherapi.com/v1/current.json?key=4f9c22730fd0481780f41108220607&q=${currentCity}&aqi=no`)
        .then((res) => res.json())
        .then((response) => {
          console.log(response);
          setWeatherData(response);
        });
    },
    [currentCity]
  );

  const handleCityInput = (event) => {
    setUserEnteredCity(event.target.value);
  };

  const handleSubmit = () => {
    setCurrentCity(userEnteredCity);
  };

  return (
    <div className="App">
      The temp in {currentCity} is {weatherData && weatherData.current.temp_c}. Type in your city:{" "}
      <input onChange={handleCityInput} type="text"></input>
      <button onClick={handleSubmit}>search!</button>
    </div>
  );
}

export default App;
