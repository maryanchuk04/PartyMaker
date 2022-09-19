import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material'
const SimpleModal = ({children, title, open, close}) => {
    const handleClose=()=>{
        close();
    }
  return <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    >
    <DialogTitle id="alert-dialog-title">
        {title}
    </DialogTitle>
    <DialogContent dividers>
        {children}
    </DialogContent>
    <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
        <Button onClick={handleClose} autoFocus>
        Agree
        </Button>
    </DialogActions>
    </Dialog>
}


export default SimpleModal