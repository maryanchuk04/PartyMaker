import React from 'react'
import { Button } from '@mui/material'

const SampleButton = (props) => {
    const { children, onChange } = props;
    return (
        <Button variant="contained" component="label">
        {children}
        <input hidden
            type="file"
            accept='image/*'
            onChange={onChange}
        />
    </Button>)
}

export default SampleButton