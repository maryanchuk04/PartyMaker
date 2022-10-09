import React, { useState, useEffect } from 'react';
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
import { getAuthState, isAuth } from "../../../utils/helpers";
import SimpleModal from "../SimpleModal";
import { CustomerLoginService } from "../../../services/CustomerProfileService";
import { useHistory } from "react-router";

const ContentTable = ({state}) => {
  const service = new CustomerLoginService();
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [customer, setCustomer] = useState({});

  const [ordersInfo, setOrdersInfo] = useState([]);


  useEffect(() => {
    (async () => {
        const res = await service.getCustomerById(
            getAuthState().customerId
        );
        if (res.ok) {
            const response = await res.json();
            setCustomer(response);
            console.log(response)
            setLoading(false);
        }
    })();
}, []);

useEffect(() => {
  (async () => {
      const res = await service.getFilteredOrders(
        getAuthState().customerId,
        state

      );
      if (res.ok) {
          const response = await res.json();
          console.log(response)
          setOrdersInfo(response);
          setLoading(false);
      }
  })();
}, [state]);

  function createData(order) {
    return {order};
  }

  const rows = [
    createData(),

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

  const [selectedOrder, setSelectedOrder] = useState({});

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>

        </TableHead>
        <TableBody>
          {ordersInfo?.map((row) => (
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.orderShortInfo.slice(0, row.orderShortInfo.length-2)}
              </TableCell>
              
              <TableCell align="right" className="mt-2 display-4">
                <Button onClick={() => history.push(`/order/${row.id}`)}>Show</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContentTable;
