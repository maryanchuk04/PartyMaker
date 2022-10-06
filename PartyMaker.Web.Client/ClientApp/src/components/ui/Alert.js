import React, { useEffect } from "react";
import "./alert.css";
import { Alert, IconButton } from "@mui/material";

const AlertWrapper = ({ message, handleClose, type }) => {

  useEffect(()=>{
  },[])
  return (
    <>
      <Alert
        severity={type}
        className="alert"
        onClose={handleClose}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={handleClose}
          >
            <i class="fas fa-times"></i>
          </IconButton>
        }
      >
        {message}
      </Alert>
    </>
  );
};

export default AlertWrapper;
