import React, { useState, useEffect } from "react";
import { OrderService } from "../../../services/OrderService";
import { generateItemShortInfo } from "../../../utils/helpers";
import DetailsWrapper from "./DetailsWrapper";
import {Button} from "@mui/material";
import SimpleModal from "../SimpleModal";
import AlertWrapper from "../Alert";

const OtherOrderInfoField = ({ item }) => {
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });
  const service = new OrderService();
  const [customer, setCustomer] = useState({});
  const [open, setOpen] = useState(false);
  useEffect(()=>{
    (async()=>{
      const res = await service.getCustomerByOrderId(item.orderId);
      if(res.ok){
        const response = await res.json();
        setCustomer(response);
      }
    })()
  },[])

  const handleDelivery = async() =>{
    const res =await service.deliveryItem(item.itemRequestDtos[0].id)
    if(res.ok){
      setAlert({ show: true, message: "Item was delivered!", type: "success" });
      setTimeout(() =>{
         setAlert({ ...alert, show: false }); 
      }, 3000);
    }
    else{
      setAlert({ show: true, message: "Something was wrong", type: "error" });
      setTimeout(() =>{
         setAlert({ ...alert, show: false }); 
      }, 3000);
    }
  }
  
  return (
    <div>
      <p>{generateItemShortInfo({
        service : item?.itemRequestDtos[0]?.supplierService.service.name,
        date : item?.dateExecution.toLocaleString(),
        qty : item?.qty,
        price : item?.price
      })}</p>
       {open  && <SimpleModal open = {open} close ={()=>setOpen(false)} title = {"Details"} oneButton = {true} handleSubmit = {()=>setOpen(false)}>
            <DetailsWrapper item = {item} customer = {customer}/>
      </SimpleModal>}
      <div className = 'd-flex justify-content-between'>
        <Button variant = 'outlined' onClick = {()=>setOpen(true)}>Details</Button>
        <Button variant = 'contained' disabled = {item.itemStatus === 2} onClick = {()=>{handleDelivery()}}>Delivery</Button>
      </div>
      <hr />
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

export default OtherOrderInfoField;
