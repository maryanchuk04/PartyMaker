import * as React from "react";

const DetailsDialog = (props) => {
  const { description } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

    </div>
  );
};
export default DetailsDialog;
