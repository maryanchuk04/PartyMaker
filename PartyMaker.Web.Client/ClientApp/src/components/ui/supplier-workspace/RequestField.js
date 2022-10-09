import React, { useEffect, useState } from "react";
import { TextareaAutosize, TextField, Button } from "@mui/material";
import SimpleModal from "../SimpleModal";
import DetailsWrapper from "./DetailsWrapper";
import { getAuthState, generateItemShortInfo } from "../../../utils/helpers";
import { OrderService } from "../../../services/OrderService";
import {SupplierService} from  "../../../services/SupplierService";
import AlertWrapper from "../Alert";

const RequestField = ({ item, setLoading}) => {
  const service = new OrderService();
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });
  const supplierService = new SupplierService();
  const [open,setOpen] = useState(false);
  const [customer, setCustomer] = useState({});
  const [rejected, setRejected] = useState('');
  const [response, setResponse] = useState({
    response: "",
    price: 0,
    itemId : "",
    supplierId : getAuthState().supplierId
  });

  useEffect(()=>{
    (async()=>{
      const res = await service.getCustomerByOrderId(item.orderId);
      if(res.ok){
        const response = await res.json();
        setCustomer(response);
      }
    })()
  },[])

  async function sendResponse(e) {
    e.preventDefault();
    const res = await supplierService.sendResponse(item?.itemRequestDtos[0]?.id,{
      response : response.response,
      totalPrice : response.price
    });
    if(res.ok){
      setAlert({ show: true, message: "Request sending!", type: "success" });
      setTimeout(() =>{
         setAlert({ ...alert, show: false }); 
      }, 3000);
      setLoading(0);
    }
  }

  const handleRejected = (e) =>{
    e.preventDefault();
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
      <Button variant = 'outlined' onClick = {()=>setOpen(true)}>Details</Button>
      <form onSubmit={sendResponse}>
        <TextareaAutosize
          placeholder="Response..."
          minRows={3}
          className="response-field w-100 my-1"
          required
          onChange={(e) =>
            setResponse({ ...response, response: e.target.value })
          }
        />
        <form className="price-field d-flex w-100 my-1 mb-4" onSubmit = {handleRejected}>
          <TextField
          className = 'w-100'
            size="small"
            label="Rejected message"
            variant="outlined"
            required
            type = 'number'
            onChange={(e) =>
              setRejected(e.target.value)
            }
          />
          <Button type="submit" variant="outlined" color = 'error' sx={{ marginLeft: "10px" }}>
            Reject
          </Button>
        </form>
        <div className="price-field d-flex w-100 justify-content-end my-1">
          <TextField
            size="small"
            label="Total price $"
            variant="outlined"
            required
            type = 'number'
            onChange={(e) =>
              setResponse({ ...response, price: e.target.value })
            }
          />
          <Button type="submit" variant="contained" sx={{ marginLeft: "10px" }}>
            Send
          </Button>
        </div>
      </form>

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

export default RequestField;
