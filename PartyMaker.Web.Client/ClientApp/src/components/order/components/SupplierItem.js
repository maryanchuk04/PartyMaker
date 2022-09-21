import { Avatar } from '@mui/material'
import React from 'react'
import RatingWrapper from '../../ui/RatingWrapper'
import {Checkbox} from '@mui/material'
const SupplierItem = ({supplier}) => {
  return (
    <div className = 'd-flex justify-content-between align-items-center py-3'>
        <Avatar src = {supplier.image} sx = {{width : 50, height : 50}}/>
        <div className="w-50 d-flex flex-column">
            <h4>{supplier.companyName}</h4>
            <RatingWrapper value = {4} isReadOnly = {true}/>
        </div>
        <Checkbox  defaultChecked />
    </div>
  )
}

export default SupplierItem