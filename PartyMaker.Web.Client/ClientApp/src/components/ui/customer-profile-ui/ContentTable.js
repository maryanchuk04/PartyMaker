import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import OrderDetails from "./OrderDetails";
import SimpleModal from "../SimpleModal";

const ContentTable = () => {
  function createData(type, product, date, performer) {
    return { type, product, date, performer };
  }

  const rows = [
    createData("Balls", 50, "09/09/2022", "Ivan"),
    createData("Balls", 50, "09/09/2022", "Ivan"),
    createData("Falls", 50, "09/09/2022", "Ivan"),
    createData("Balls", 50, "09/09/2022", "Ivan"),
    createData("Balls", 50, "09/09/2022", "Ivan"),
  ];

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = (obj) => {
    setSelectedOrder(obj);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const [selectedOrder, setSelectedOrder] = useState({});

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Type of item</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Date&nbsp;</TableCell>
            <TableCell align="right">Performer&nbsp;</TableCell>
            <TableCell align="right">Details of the order</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell key={row.type} component="th" scope="row">
                {row.type}
              </TableCell>
              <TableCell key={row.product} align="right">
                {row.product}
              </TableCell>
              <TableCell key={row.date} align="right">
                {row.date}
              </TableCell>
              <TableCell key={row.performer} align="right">
                {row.performer}
              </TableCell>
              <TableCell align="right" className="mt-2 display-4">
                <Button onClick={() => handleOpen(row)}>Show</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {open ? (
        <SimpleModal open={open} close={handleClose}>
          <Box sx={style}>
            <OrderDetails order={selectedOrder} />
          </Box>
        </SimpleModal>
      ) : null}
    </TableContainer>
  );
};

export default ContentTable;
