import { Button, Divider, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import DetailsField from '../components/DetailsField'

const AnsweredRequest = ({item, Item}) => {
    useEffect(()=>{
    },[])
  return (
    <div className = "w-100" style= {{maxHeight : "500px", overflowY: "scroll"}}>
        <p style = {{color : '#1aa94b'}}>Company : {item?.supplierService?.supplierCompanyName}</p>
        <div className = 'row'>
            <div className = 'col'>
            <TextField
                id="outlined-multiline-static"
                label={"Responce"}
                multiline
                maxRows={8}
                minRows={8}
                defaultValue={"asdasd"}
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
                    <h1 className = 'd-flex w-100 align-items-center justify-content-end'>
                        {item.price || 0}
                        <i className = 'fas fa-money-bill'></i>
                    </h1>
                    <Button variant = 'contained' className ='w-100'>Submit</Button>
                </div> 
            </div>
        </div>
        <Divider sx = {{marginY : "20px"}}/>
    </div>
  )
}

export default AnsweredRequest