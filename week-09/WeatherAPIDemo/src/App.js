import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [currentTemp, setCurrentTemp] = useState("");
  const [placeName, setPlaceName] = useState("");

  // We put the API inside a useEffect to be called on application load only (because of zero dependencies)
  useEffect(function () {
    fetch(
      "http://api.weatherapi.com/v1/current.json?key=4f9c22730fd0481780f41108220607&q=Auckland&aqi=no"
    )
      .then((res1) => res1.json())
      .then((res2) => {
        console.log(res2);
        setCurrentTemp(res2.current.temp_c);
        setPlaceName(res2.location.name);
      });
  }, []);
  //

  return (
    // Our content to render
    <div className="App">
      Current temp is: {currentTemp}°C in {placeName}
    </div>
  );
}

export default App;
