import React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';


export default function DatePicker({disablePast=true,value, handleChange,required}) {

  return <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker c
        displayStaticWrapperAs="desktop"
        openTo="day"
        value={value}
        onChange={(newValue) => {
          handleChange(newValue.$d)
        }}
        disablePast = {disablePast}
        renderInput={(params) => <TextField {...params} required = {required}/>}
      />
    </LocalizationProvider>
}