import { Divider } from '@mui/material'
import React from 'react'
import { generateItemShortInfo } from '../../../utils/helpers'
const Finished = ({item}) => {
  return (
      <div>
        <h6>
            {generateItemShortInfo({
            service: item?.itemRequestDtos[0]?.supplierService.service.name,
            date: item?.dateExecution.toLocaleString(),
            qty: item?.qty,
            price: item?.price,
            })}
        </h6>
        <p>Delivered : {new Date(item.itemRequestDtos[0].dateModified).toLocaleString()}</p>
        <Divider/>
      </div>
  )
}

export default Finished