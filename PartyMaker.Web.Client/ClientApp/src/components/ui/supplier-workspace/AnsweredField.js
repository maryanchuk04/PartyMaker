import React, { useEffect } from 'react'
import { generateItemShortInfo } from '../../../utils/helpers'
import { Divider } from '@mui/material'
const AnsweredField = ({item}) => {
    useEffect(()=>{
        console.log(item)
    },[])
  return (
    <div className ='my-4'>
        <h3>Service:</h3>
        <p>{generateItemShortInfo({
        service : item?.itemRequestDtos[0]?.supplierService.service.name,
        date : item?.dateExecution.toLocaleString(),
        qty : item?.qty,
        price : item?.price
      })}</p>
      <p>Your answer : {item.itemRequestDtos[0].response}</p>
      <p>Your total price : {item.itemRequestDtos[0].price}</p>
      <Divider/>
    </div>
  )
}

export default AnsweredField