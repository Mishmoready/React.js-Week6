import { useState } from 'react';

function App() {
  // store the result from the API
  const [weatherInfo, setWeatherInfo] = useState({
    temp: null,
    windSpeed: null,
  });

  // Name of the city entered by the user
  const [cityName, setCityName] = useState('');
  // Maintains the cityName state
  const handleChange = (event) => {
    setCityName(event.target.value);
  };

  const getWeather = () => {
    // Call the API for getting the city's weather
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1d2bfc8b390e7da163843e07f08dc678&units=metric`
    )
      .then((result) => result.json())
      .then((apiWeather) => {
        // Display the weather information on screen
        setWeatherInfo({
          ...weatherInfo,
          temp: apiWeather.main.temp,
          windSpeed: apiWeather.wind.speed,
        });
      });
  };
  
  return (
    <>
      <label>
        Your City <input type="text" onChange={handleChange}></input>
      </label>
      <br></br>
      <br></br>
      <button onClick={getWeather}>Get me the weather </button>
      <h4>Temperature : {weatherInfo.temp} degrees</h4>
      <h4>Wind Speed : {weatherInfo.windSpeed} km/h</h4>
    </>
  );
}

export default App;
