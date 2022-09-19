import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const DetailsDialog = (props) => {
    const {description} = props;

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Details
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="details-dialog-title"
                aria-describedby="details-dialog-description"
                >
                <DialogTitle id="details-dialog-title">
                    {"Details"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="details-dialog-description">
                        {description}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    
                    <Button onClick={handleClose} autoFocus>
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default DetailsDialog
