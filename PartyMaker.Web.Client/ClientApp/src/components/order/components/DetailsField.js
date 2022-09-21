import React from 'react'
import { TextField } from '@mui/material'
const DetailsField = ({label, defaultValue, handleChooseDetails}) => {
  return <TextField
  id="outlined-multiline-static"
  label={label}
  multiline
  maxRows= {8}
  minRows = {8}
  defaultValue={defaultValue}
  sx={{width : "100%"}}
  onChange = {(e)=>handleChooseDetails(e.target.value)}
/>
}

export default DetailsField