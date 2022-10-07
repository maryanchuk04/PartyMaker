import React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker, } from "@mui/x-date-pickers/StaticDatePicker";
import {DateTimePicker} from '@mui/x-date-pickers'

export default function DatePicker({
  disablePast = true,
  value,
  handleChange,
  required,
  disabled = false
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
          disabled = {disabled}
          openTo = 'day'
          value={value}
          onChange={(newValue) =>{
            handleChange(newValue.$d)
          }  
            }
          renderInput={(params) => (
            <TextField {...params} label = "Date and time" className = 'w-100 my-3'/>
          )}
        />
    </LocalizationProvider>
  );
}
