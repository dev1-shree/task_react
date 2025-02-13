import React, { useState } from "react";
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  Select,
  MenuItem,
  Button,
  Slider,
  InputLabel,
} from "@mui/material";

const AllInput = () => {
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    Password: "",
    phonenumber: "",
    checkboxes: {
      option1: false,
      option2: false,
      option3: false,
    },
    selectRadio: "",
    data: "",
    time: "",
    file: null,
    textarea: "",
    dropdown: "",
  });

  const handlechange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setformdata((prevdata) => ({
        ...prevdata,
        checkboxes: {
          ...prevdata.checkboxes,
          [name]: checked,
        },
      }));
    } else {
      setformdata({ ...formdata, [name]: value });
    }
  };

  const handleFilechange = (e) => {
    const file = e.target.files[0];
    setformdata({ ...formdata, file: file });
  };

  const handleformsubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
    if (formdata.file) {
      console.log("Selected file:", formdata.file.name);
    }

    // Reset all fields after form submission
    setformdata({
      name: "",  email: "",  Password: "", phonenumber: "", checkboxes: {  option1: false, option2: false, option3: false, }, selectRadio: "", data: "", time: "", file: null, textarea: "", dropdown: "", });
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <h3>All Input Types</h3>

      <TextField
        label="name"
        fullWidth
        margin="dense"
        name="name"
        value={formdata.name}
        onChange={handlechange}
      />
      <TextField
        label="Email"
        type="email"
        fullWidth
        value={formdata.email}
        onChange={handlechange}
        margin="dense"
        name="email"
      />
      <TextField
        label="Password"
        type="Password"
        fullWidth
        value={formdata.Password}
        onChange={handlechange}
        margin="dense"
        name="Password"
      />
      <TextField
        label="Number"
        type="number"
        fullWidth
        value={formdata.phonenumber}
        onChange={handlechange}
        margin="dense"
        name="phonenumber"
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={formdata.checkboxes.option1}
            onChange={handlechange}
            name="option1"
          />
        }
        label="Option 1"
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={formdata.checkboxes.option2}
            onChange={handlechange}
            name="option2"
          />
        }
        label="Option 2"
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={formdata.checkboxes.option3}
            onChange={handlechange}
            name="option3"
          />
        }
        label="Option 3"
      />

      {/* Radio buttons */}
      <RadioGroup
        row
        name="selectRadio"
        value={formdata.selectRadio}
        onChange={handlechange}
      >
        <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
        <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
      </RadioGroup>

      <TextField
        label="Date"
        type="date"
        name="data"
        value={formdata.data}
        onChange={handlechange}
        fullWidth
        margin="dense"
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        label="Time"
        type="time"
        fullWidth
        name="time"
        value={formdata.time}
        onChange={handlechange}
        margin="dense"
        InputLabelProps={{ shrink: true }}
      />

      <InputLabel>Upload File</InputLabel>
      <input type="file" name="file" onChange={handleFilechange} />
      {formdata.file && <p>Selected File: {formdata.file.name}</p>}

      <InputLabel>Range</InputLabel>
      <Slider min={0} max={100} />

      <TextField
        label="Textarea"
        multiline
        rows={3}
        fullWidth
        margin="dense"
        name="textarea"
        value={formdata.textarea}
        onChange={handlechange}
      />

      <InputLabel>Dropdown</InputLabel>
      <Select
        fullWidth
        name="dropdown"
        value={formdata.dropdown}
        onChange={handlechange}
      >
        <MenuItem value="">Select an option</MenuItem>
        <MenuItem value="value1">Value 1</MenuItem>
        <MenuItem value="value2">Value 2</MenuItem>
      </Select>

      <Button
        variant="contained"
        color="primary"
        fullWidth
        style={{ marginTop: "10px" }}
        onClick={handleformsubmit}
      >
        Submit
      </Button>
    </div>
  );
};

export default AllInput;
