import "./App.css";

import Button from "@mui/material/Button";

function App() {
  return (
    <div className="App">
      <Button variant="outlined">Contained</Button>
      <Button href="https://www.google.com" color="secondary" variant="outlined">
        Google.com
      </Button>
    </div>
  );
}

export default App;
