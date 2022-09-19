import { Divider } from '@mui/material'
import React from 'react'
import ComboBox from '../../ui/ComboBox'
import DatePicker from '../../ui/DatePicker'
import DetailsField from './DetailsField'
import MapControl from './MapControl'


const Item = () => {

  return (
    <div className = "row w-100 p-2">
        <div className="col col-md-auto">
            <ComboBox label = {"Choose the service"}/>
            <DatePicker/>
        </div>
        <div className="col col-md-3">
            <DetailsField label ={"Service details"}/>
            <MapControl/>
        </div>
        <div className="col">
            <ComboBox label = {"Choose the service"}/>
            <DatePicker/>
        </div>
    </div>
    
  )
}

export default Item