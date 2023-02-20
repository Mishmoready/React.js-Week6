// function to be called when the 'Get me the weather' button is clicked
function getWeather() {
  // Get the text in the text box
  const cityName = document.getElementById('cityName').value;
  // Call the API for getting the city's weather
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1d2bfc8b390e7da163843e07f08dc678&units=metric`
  )
    .then((result) => result.json())
    .then((weatherInfo) => {
      // Display the weather information on screen
      displayWeather(weatherInfo.main.temp, weatherInfo.wind.speed);
    });
}

// update the page with the given weather
function displayWeather(temp, windSpeed) {
  const resultDiv = document.getElementById('resultDiv');
  resultDiv.innerHTML = `
    <h4>Temperature : ${temp} degrees</h4>
    <h4>Wind Speed : ${windSpeed} km/h</h4>
  `;
}
