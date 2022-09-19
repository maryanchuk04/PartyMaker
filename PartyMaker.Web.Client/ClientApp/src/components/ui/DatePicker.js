import React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';


export default function DatePicker() {
  const [value, setValue] = React.useState();

  return <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker c
        displayStaticWrapperAs="desktop"
        openTo="day"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          console.log(newValue.$d)
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
}