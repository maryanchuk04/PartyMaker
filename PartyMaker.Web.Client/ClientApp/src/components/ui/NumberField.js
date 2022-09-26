import React from "react";
import { TextField } from "@mui/material";
const NumberField = ({ label, handleChange, defaultValue = 0, required }) => {
  return (
    <TextField
      id="outlined-number"
      label={label}
      type="number"
      fullWidth={true}
      sx={{ marginBottom: "10px" }}
      defaultValue={defaultValue}
      onChange={(e) => handleChange(e.target.value)}
      inputProps={{ min: 0 }}
      required={required}
    />
  );
};

export default NumberField;
