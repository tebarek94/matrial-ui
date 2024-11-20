import React, { useState } from "react";
import {
  TextField,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  FormLabel,
  Radio,
} from "@mui/material";

function Test() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    subscribe: false,
    age: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      subscribe: e.target.checked,
    }));
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmission}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <TextField
          type="text"
          onChange={handleChange}
          name="name"
          value={input.name}
          placeholder="Enter name"
          sx={{ margin: 3 }}
        />
        <TextField
          type="email"
          name="email"
          onChange={handleChange}
          value={input.email}
          placeholder="Enter email"
          sx={{ margin: 3 }}
        />
        <TextField
          type="password"
          name="password"
          onChange={handleChange}
          value={input.password}
          placeholder="Enter password"
          sx={{ margin: 3 }}
        />
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={input.subscribe}
                onChange={handleCheckboxChange}
              />
            }
            label="Subscribe to Newsletter"
          />
        </FormGroup>
        <FormControl fullWidth sx={{ margin: 3 }}>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="age"
            value={input.age}
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ margin: 3 }}>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="gender"
            value={input.gender}
            onChange={handleChange}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
        <Button type="submit" variant="contained" sx={{ margin: 3 }}>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Test;
