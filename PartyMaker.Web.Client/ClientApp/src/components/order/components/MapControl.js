import { IconButton } from '@mui/material'
import React, { useState } from 'react'
import GoogleMap from '../../ui/map';
import SimpleModal from '../../ui/SimpleModal';
import AutoComplete from './AutoComplete';

const MapControl = () => {
    const [open,setOpen] = useState(false);
    const handleOpen=()=>{
        setOpen(true);
    }
  return (
    <div className = 'd-flex align-items-center'>
        <IconButton color= "primary" onClick ={handleOpen}>
            <i className = "fas fa-map" style={{fontSize : "30px"}}></i>
        </IconButton>
        {
            open ?  <SimpleModal open = {open} close={()=>setOpen(false)} title = {"Delivery address"}>
                <div>
                    <GoogleMap/>
                </div>
            </SimpleModal> : null
        }
        <AutoComplete/>
    </div>
  )
}

export default MapControl