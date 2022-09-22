import React from 'react'
import DetailsDialog from './DetailsDialog'
const OtherOrderInfoField = ({item}) => {
  return (
    <div>
        <p>Balls 50, 20:30 09/09/22, Supplier: PartyMaker_SupplierName</p>
        <DetailsDialog description = "Hello world"/>
        <hr />
    </div>
  )
}

export default OtherOrderInfoField