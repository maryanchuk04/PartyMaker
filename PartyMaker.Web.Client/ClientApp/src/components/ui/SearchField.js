import React from 'react'
import { TextField, IconButton} from '@mui/material'
const SearchField = ({handleSearch}) => {
  return  <div className = 'd-flex my-1 px-1'>
    <TextField
    id="outlined-required"
    label="Search"
    placeholder="Search..."
    fullWidth ={true}
    onChange = {({target})=> handleSearch(target.value)}
    />
    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <i class="fas fa-search"></i>
    </IconButton>
</div>
}

export default SearchField