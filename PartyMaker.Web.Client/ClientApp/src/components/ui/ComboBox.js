import React from 'react'
import { FormControl, InputLabel, Select,MenuItem } from '@mui/material'

const ComboBox = ({label, defaultValue, handleChange, arrayData}) => {
  return <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">{label}</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={defaultValue}
    label={label}
    onChange={handleChange}
  >
    {
      arrayData?.map((item)=>(
        <MenuItem value={item}>{item}</MenuItem>
      ))
    } 
  </Select>
</FormControl>
}

export default ComboBox