import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
const SimpleModal = ({
  children,
  title,
  open,
  close,
  handleSubmit,
  oneButton = false,
}) => {
  const handleClose = () => {
    close();
  };
  return (
    <Dialog
      open={open}
      maxWidth={"md"}
      fullWidth={true}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
      <DialogActions>
        {oneButton ? (
          <Button onClick={() => handleSubmit()}>Ok</Button>
        ) : (
          <>
            <Button onClick={handleClose}>Disagree</Button>
            <Button
              onClick={() => {
                handleSubmit();
                handleClose();
              }}
              autoFocus
            >
              Agree
            </Button>
          </>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default SimpleModal;
