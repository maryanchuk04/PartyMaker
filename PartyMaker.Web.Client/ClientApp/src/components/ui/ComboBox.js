import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const ComboBox = ({ label, defaultValue, handleChange, arrayData }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={defaultValue}
        label={label}
        onChange={(e) => {handleChange(e.target.value)}}
      >
        {arrayData?.map((item) => (
          <MenuItem value={item.id}>{item.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ComboBox;
