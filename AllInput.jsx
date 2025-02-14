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
    date: "",
    time: "",
    file: null,
    textarea: "",
    dropdown: "",
  });
  const [error, seterror] = useState({});

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

      seterror({ ...error, checkboxes: "" });
    } else {
      setformdata({ ...formdata, [name]: value });
    }
    seterror({ ...error, [name]: "" });
  };

  const handleFilechange = (e) => {
    const file = e.target.files[0];
    setformdata({ ...formdata, file: file });
    seterror({ ...error, file: "" });
  };

  const validate = () => {
    const newErrors = {};
    // name
    if (!/^[A-Z][a-zA-Z]{1,49}$/.test(formdata.name))
      newErrors.name = "name is not a valid";
    // email
    if (!/\S+@\S+\.\S+/.test(formdata.email))
      newErrors.email = "Enter a valid email address";
    //passworde
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        formdata.Password
      )
    )
      newErrors.Password = "password is not a valid";
    // number
    if (!/^\d+$/.test(formdata.phonenumber))
      newErrors.phonenumber = "number is not a valid";
    //checkbox
    if (
      !formdata.checkboxes.option1 &&
      !formdata.checkboxes.option2 &&
      !formdata.checkboxes.option3
    ) {
      newErrors.checkboxes = "Please select at least one option";
    }
    //radio
    if (!formdata.selectRadio)
      newErrors.selectRadio = "Please select a radio option.";
    //  date
    if (!formdata.date) {
      newErrors.date = "Please select a date.";
    } else if (new Date(formdata.data) > new Date()) {
      newErrors.date = "Date cannot be in the future.";
    }

    //   time
    if (!formdata.time) {
      newErrors.time = "Please select a time.";
    }
    //image
    if (!formdata.file) {
      newErrors.file = "Please select an image.";
    } else if (!/\.(jpg|jpeg|png|gif)$/i.test(formdata.file.name)) {
      newErrors.file = "Please select a valid image file (jpg,jpeg, png, gif).";
    }
    // textarea
    if (formdata.textarea.length < 10) {
      newErrors.textarea = "Textarea must have at least 10 characters.";
    }

    //dropdown
    if (!formdata.dropdown)
      newErrors.dropdown = " please  select  an option form the dropdown";

    seterror(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleformsubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    console.log(formdata);
    if (formdata.file) {
      console.log("Selected file:", formdata.file.name);
    }

    // Reset all fields after form submission
    setformdata({
      name: "",
      email: "",
      Password: "",
      phonenumber: "",
      checkboxes: { option1: false, option2: false, option3: false },
      selectRadio: "",
      date: "",
      time: "",
      file: null,
      textarea: "",
      dropdown: "",
    });
    seterror({});
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
      <span style={{ color: "red" }}>{error.name}</span>
      <TextField
        label="Email"
        type="email"
        fullWidth
        value={formdata.email}
        onChange={handlechange}
        margin="dense"
        name="email"
      />
      <span style={{ color: "red" }}>{error.email}</span>

      <TextField
        label="Password"
        type="Password"
        fullWidth
        value={formdata.Password}
        onChange={handlechange}
        margin="dense"
        name="Password"
      />
      <span style={{ color: "red" }}>{error.Password}</span>

      <TextField
        label="Number"
        type="number"
        fullWidth
        value={formdata.phonenumber}
        onChange={handlechange}
        margin="dense"
        name="phonenumber"
      />
      <span style={{ color: "red" }}>{error.phonenumber}</span>
      <br></br>
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
      <span style={{ color: "red" }}>{error.checkboxes}</span>

      {/* Radio buttons */}
      <RadioGroup
        row
        name="selectRadio"
        value={formdata.selectRadio}
        onChange={handlechange}
      >
        <FormControlLabel
          value="option1"
          control={<Radio />}
          label="Option 1"
        />
        <FormControlLabel
          value="option2"
          control={<Radio />}
          label="Option 2"
        />
      </RadioGroup>
      <span style={{ color: "red" }}>{error.selectRadio}</span>

      <TextField
        label="Date"
        type="date"
        name="date"
        value={formdata.data}
        onChange={handlechange}
        fullWidth
        margin="dense"
        InputLabelProps={{ shrink: true }}
      />
      <span style={{ color: "red" }}>{error.date}</span>

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
      <span style={{ color: "red" }}>{error.time}</span>

      <InputLabel>Upload File</InputLabel>
      <input type="file" name="file" onChange={handleFilechange} />
      {formdata.file && <p>Selected File: {formdata.file.name}</p>}
      <span style={{ color: "red" }}>{error.file}</span>

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
      <span style={{ color: "red" }}>{error.textarea}</span>

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
      <span style={{ color: "red" }}>{error.dropdown}</span>

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




























// checkbox bank code 
// const handlechange = (e) => {
//   const { name, value, type, checked } = e.target;

//   if (type === "checkbox") {
//     const updatedCheckboxes = {
//       ...formdata.checkboxes,
//       [name]: checked,
//     };

//     setformdata((prevdata) => ({
//       ...prevdata,
//       checkboxes: updatedCheckboxes,
//     }));

//     // Check if at least one checkbox is selected before clearing the error
//     const isAnyChecked = Object.values(updatedCheckboxes).some(Boolean);
//     seterror((prevErrors) => ({
//       ...prevErrors,
//       checkboxes: isAnyChecked ? "" : "Please select at least one option",
//     }));
//   } else {
//     setformdata({ ...formdata, [name]: value });
//     seterror((prevErrors) => ({
//       ...prevErrors,
//       [name]: "",
//     }));
//   }
// };