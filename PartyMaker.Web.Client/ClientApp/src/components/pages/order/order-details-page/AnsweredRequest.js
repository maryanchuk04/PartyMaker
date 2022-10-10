import { Button, Divider, TextField } from '@mui/material'
import React, { useEffect, useState} from 'react'
import DetailsField from '../components/DetailsField'
import {CustomerService} from '../../../../services/CustomerService'
import AlertWrapper from '../../../ui/AvatarWrapper'
import './answered.css'
const AnsweredRequest = ({item, Item, approve, index, disabled = false}) => {
    const [alert, setAlert] = useState({ show: false, message: "", type: "" });
    const service = new CustomerService();
    useEffect(()=>{
    },[])

    const handleCancelRequest = async() =>{
        const res = service.cancelResult(item.id)
        if(res.ok){
            setAlert({ show: true, message: "Request refused!", type: "success" });
            setTimeout(() =>{
               setAlert({ ...alert, show: false }); 
            }, 3000);
        }
    }

    const handleApproveRequest = async() =>{
        console.log(index,item.id)
        const res = service.approveRequest(item.id)
        approve(index,item.id); 
        if(res.ok){
            setAlert({ show: true, message: "Request approved!", type: "success" });
            setTimeout(() =>{
               setAlert({ ...alert, show: false });
              
            }, 3000);
        }
    }
  return (
      <>
    <div className = "w-100 my-2 p-3" style= {{maxHeight : "500px", overflowY: "scroll", position : "relative"}}>
        <p style = {{color : '#1aa94b'}}>Company : {item?.supplierService?.supplierCompanyName}</p>
        <div className = 'row'>
            <div className = 'col'>
            <TextField
                id="outlined-multiline-static"
                label={"Responce"}
                multiline
                maxRows={8}
                minRows={8}
                defaultValue={item?.response}
                sx={{ width: "100%"}}
                disabled
                onChange={(e) => {}}
            />
            </div>
            <div className = 'col col-lg-3 d-flex flex-column justify-content-between'>
                <div className = 'text-rigth'>
                    <h4>Your total price: {Item.totalPrice}</h4>
                    <p>Quantity : {Item.qty}</p>
                    <p>Price for 1 : {Item.price}</p>
                </div>
                <div>
                    <h2 className = 'd-flex w-100 align-items-center justify-content-end'>
                        {item.price || 0}
                        <i className = 'fas fa-money-bill'></i>
                    </h2>
                    <div className = 'd-flex'>
                        <Button variant = 'contained' color = 'error' className ='w-50' onClick = {handleCancelRequest}>Refuse</Button>
                        <Button variant = 'contained' className ='w-50 mx-1' onClick = {handleApproveRequest}>Approve</Button>
                    </div>
                </div> 
            </div>
        </div>
        <Divider sx = {{marginY : "20px"}}/>
        {disabled && <div className = 'disabled-answer'>
            <h1 className = 'm-auto'>You already choose another supplier!</h1>
        </div>}
    </div>
    {alert.show && (
      <AlertWrapper
        message={alert.message}
        type={alert.type}
        onClose={() => setAlert({ ...alert, show: false })}
      />)}
    </>
  )
}

export default AnsweredRequest