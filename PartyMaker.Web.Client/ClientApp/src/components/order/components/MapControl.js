import { IconButton } from '@mui/material'
import React, { useState } from 'react'
import SimpleModal from '../../ui/SimpleModal';

const MapControl = () => {
    const [open,setOpen] = useState(false);
    const handleOpen=()=>{
        setOpen(true);
    }
  return (
    <div className = 'd-flex'>
        <IconButton color= "primary" onClick ={handleOpen}>
            <i className = "fas fa-map" style={{fontSize : "40px"}}></i>
        </IconButton>
        {
            open ?  <SimpleModal open = {open} close={()=>setOpen(false)} title = {"Delivery address"}>
                <div className = 'w-75 p-3'>
                    
                </div>
                
            </SimpleModal> : null
        }
    </div>
  )
}

export default MapControl