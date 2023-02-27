import { useState, useEffect } from 'react';

function App() {
  const [favColor, setFavColor] = useState('red');

  useEffect(() => {
    console.log(`The color of the h1 element changed to ${favColor}`)
  }, [favColor]);

  function changeColor() {
    switch (favColor) {
      case 'red':
        setFavColor('blue');
        break;
      case 'blue':
        setFavColor('green');
        break;
      case 'green':
        setFavColor('orange');
        break;
      case 'orange':
        setFavColor('yellow');
        break;
      default:
        setFavColor('red');
    }
  }

  return (
    <div>
      <h1>Hello World</h1>
      <h1 style={{ backgroundColor: favColor, fontFamily: 'Sans' }}>
        This element is going to change color
      </h1>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default App;

/*
switch (3) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
}

*/
