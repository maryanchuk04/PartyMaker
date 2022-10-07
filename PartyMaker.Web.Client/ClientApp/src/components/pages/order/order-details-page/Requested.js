import { Divider } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { convertDate } from '../../../../utils/helpers';

const Requested = ({item, Item}) => {
    useEffect(()=>{
    },[])
  return (
    <div className = 'w-100'>
        <p style = {{color : "#1aa94b"}}>Company : {item?.supplierService?.supplierCompanyName}</p>
        <p>Sent : {convertDate(item?.dateCreated)}</p>
        <p>Service : {item?.supplierService?.service.name}</p>
        <Divider/>
    </div>
  )
}

export default Requested