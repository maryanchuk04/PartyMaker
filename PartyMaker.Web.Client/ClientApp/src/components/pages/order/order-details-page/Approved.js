import React, { useEffect, useState } from "react";
import { generateItemShortInfo } from "../../../../utils/helpers";
import { Button } from "@mui/material";
import { useHistory } from "react-router";
import { OrderService } from "../../../../services/OrderService";
import AlertWrapper from "../../../ui/Alert";

const Approved = ({ item, Item }) => {
  const history = useHistory();
  const service = new OrderService();
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });
  useEffect(() => {
    console.log(item);
  }, []);

  const handleRecieve = async () => {
    const res = await service.receiveItem(item.id);
    if (res.ok) {
      setAlert({ show: true, message: "Item was delivered! Go send feedback!", type: "success" });
      setTimeout(() => {
        setAlert({ ...alert, show: false });
        history.push(`/supplier/profile/${item.supplierService.supplierId}`)
      }, 3000);
    } else {
      setAlert({ show: true, message: "Something was wrong", type: "error" });
      setTimeout(() => {
        setAlert({ ...alert, show: false });
      }, 3000);
    }
  };
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h4 className="p-0 m-0">
          Company : {item.supplierService.supplierCompanyName}
        </h4>
        <Button
          variant="outlined"
          onClick={() =>
            history.push(`/supplier/profile/${item.supplierService.supplierId}`)
          }
        >
          {" "}
          profile
        </Button>
      </div>
      <p>
        {generateItemShortInfo({
          service: Item?.itemRequestDtos[0]?.supplierService.service.name,
          date: Item?.dateExecution.toLocaleString(),
          qty: Item?.qty,
          price: Item?.price,
        })}
      </p>
      <p>Response : {item.response}</p>
      <p>Total Price : {item.price} </p>

      <Button variant="contained" disabled={Item.itemStatus <2} onClick = {handleRecieve}>
        Received
      </Button>
      {alert.show && (
        <AlertWrapper
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert({ ...alert, show: false })}
        />
      )}
    </div>
  );
};

export default Approved;
