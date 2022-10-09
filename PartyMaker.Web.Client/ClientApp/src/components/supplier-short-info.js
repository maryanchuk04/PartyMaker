import { Avatar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Tags from './ui/Tags'
const SupplierShortInfo = ({supplier}) => {  
  return (
    <div  class="card mb-3">
        <div class="row g-0 ">
            <div class="col-md-4 d-flex align-items-center">
                <Avatar src={supplier?.image}   alt={supplier?.companyName}sx={{ width: 120, height: 120 }} className = 'm-auto' />
            </div>
            <div class="col-md-8">
                <div class="card-body d-flex flex-column justify-content-between h-100">
                    <Link to= {`/supplier/${supplier.id}`}><h2>{supplier?.companyName}</h2></Link>
                    <div className = "d-flex flex-wrap text-center">
                        <Tags array = {supplier?.supplierServices} count = {9}/>
                    </div>   
                </div>
            </div>
        </div>
    </div>
  )
}

export default SupplierShortInfo