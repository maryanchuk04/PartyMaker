import React, { useState, useEffect } from "react";
import { OrderService } from "../../../services/OrderService";
import { generateItemShortInfo } from "../../../utils/helpers";
import DetailsWrapper from "./DetailsWrapper";
import {Button} from "@mui/material";
import SimpleModal from "../SimpleModal";

const OtherOrderInfoField = ({ item }) => {
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
        <Button variant = 'contained' onClick = {()=>{}}>Finished</Button>
      </div>
      <hr />
    </div>
  );
};

export default OtherOrderInfoField;
