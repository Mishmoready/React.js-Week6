import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import "./FormExercise.css";

export default function FormExercise() {
  const [domain, setDomain] = useState("placeholder");
  const [gender, setGender] = useState("");
  const [value, setValue] = useState(true);

  function handleDomainChange(event) {
    setDomain(event.target.value);
  }

  function handleGenderChange(event) {
    setGender(event.target.value);
  }

  function handleCheckBox(event) {
    setValue(event.target.checked);
  }

  return (
    <div className="formContainer">
      <h1>Sign Up</h1>
      <FormControl>
        <div className="email">
          <TextField
            variant="outlined"
            size="small"
            placeholder="Email Address"
          />

          <Select
            variant="standard"
            sx={{ m: 1 }}
            placeholder="Choose domain"
            value={domain}
            onChange={handleDomainChange}
          >
            <MenuItem value="placeholder" disabled>
              Choose domain
            </MenuItem>
            <MenuItem value="gmail.com">@gmail.com</MenuItem>
            <MenuItem value="@yahoo.com">@yahoo.com</MenuItem>
            <MenuItem value="@hotmail.co.nz">@hotmail.co.nz</MenuItem>
            <MenuItem value="@missionreadyhq.com">@missionreadyhq.com</MenuItem>
          </Select>
        </div>

        <TextField
          variant="outlined"
          size="small"
          placeholder="Password"
          type="password"
          className="passwordField"
        />

        <div className="genderCheckboxSubmitDiv">
          <RadioGroup row value={gender} onChange={handleGenderChange}>
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
          </RadioGroup>

          <FormControlLabel
            control={
              <Checkbox
                value={value}
                onChange={handleCheckBox}
                color="primary"
              />
            }
            label="I want to recieve emails from your website"
          />

          <Button variant="contained" color="primary" href="/">
            Submit
          </Button>
        </div>
      </FormControl>
    </div>
  );
}
