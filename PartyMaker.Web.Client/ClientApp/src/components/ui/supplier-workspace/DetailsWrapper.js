import React, { useEffect } from 'react'
import {Divider} from '@mui/material'
const DetailsWrapper = ({item, customer}) => {
    useEffect(()=>{
    },[])
  return (
    <div className = 'w-100'>
        <h1 className = 'text-uppercase'>Service : {item?.itemRequestDtos[0]?.supplierService.service?.name}</h1>
        <div className = 'text-end'>
          <Divider/>
          <h2 className = 'text-center'>Cusstomer Info</h2>
          <h4>Customer : {customer.fullName}</h4>
          <h4>Email : {customer.email}</h4>
          <Divider/>
        </div>
        <p><span className = 'text-uppercase' style={{fontWeight : "800"}}>Location : </span>{item?.addressDto?.location}</p>
        <p><span className = 'text-uppercase' style={{fontWeight : "800"}}>Date create order : </span>{new Date(item?.dateCreated).toLocaleString()}</p>
        <p><span className = 'text-uppercase ' style={{fontWeight : "800"}}>Date execution order : </span>{new Date(item?.dateExecution).toLocaleString()}</p>
        <p><span className = 'text-uppercase ' style={{fontWeight : "800"}}>Total Price : </span>{item.totalPrice}</p>
        <p><span className = 'text-uppercase ' style={{fontWeight : "800"}}>Price for one : </span>{item.price}</p>
        <p><span className = 'text-uppercase ' style={{fontWeight : "800"}}>Count : </span>{item.qty}</p>
        <p className = 'text-uppercase' style={{fontWeight : "800"}}>Description: </p>
        <p style = {{fontStyle : "italic"}}>{item.description}</p>
    </div>
  )
}

export default DetailsWrapper