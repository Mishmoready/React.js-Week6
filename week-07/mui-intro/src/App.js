import { useState } from "react";
import Button from "@mui/material/Button";
import { MenuItem, Radio, Select, TextField, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormExercise from "./components/FormExercise";
function App() {
  // My event handler function
  function handleClick() {
    console.log("The button was pressed..");
  }

  const [item, setItem] = useState("");
  console.log(item);
  function handleChange(e) {
    setItem(e.target.value);
  }

  return (
    <div className="App">
      {/*  
      <Button
        onClick={handleClick}
        sx={{ margin: 5 }}
        color="secondary"
        variant="contained"
      >
        Hey I'm a button
      </Button>
      <Checkbox />
      <Radio />
      <Typography variant="subtitle2">Hey how's it going?</Typography>
      <Button disabled={true} color="primary" variant="contained">
        a NEW button
      </Button>

      <Select value={item} onChange={handleChange}>
        <MenuItem value="1">Item 1</MenuItem>
        <MenuItem value="2">Item 2</MenuItem>
        <MenuItem value="3">Item 3</MenuItem>
      </Select>

      <TextField variant="standard" type="password" />*/}
      <FormExercise/>
    </div>
  );
}

export default App;
