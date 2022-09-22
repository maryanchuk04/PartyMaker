import React from 'react'
import {Rating} from "@mui/material"
const RatingWrapper = ({value, handleChange, isReadOnly}) => {
  return <Rating
  name= {isReadOnly ? "read-only" :"simple-controlled"}
  value={value}
  onChange={handleChange}
  readOnly = {isReadOnly}
/>
}

export default RatingWrapper