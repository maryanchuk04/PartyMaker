import React from "react";
import { TextField } from "@mui/material";
const DetailsField = ({ label, defaultValue, handleChooseDetails,disabled = false }) => {
  return (
    <TextField
      id="outlined-textarea"
      label={label}
      multiline
      maxRows={8}
      minRows={8}
      defaultValue={defaultValue}
      sx={{ width: "100%"}}
      onChange={(e) => handleChooseDetails(e.target.value)}
      disabled = {disabled}
    />
  );
};

export default DetailsField;
