import { IconButton } from '@mui/material'
import React, { useState } from 'react'
import GoogleMap from '../../ui/map';
import SimpleModal from '../../ui/SimpleModal';
import AutoComplete from './AutoComplete';

const MapControl = ({handleChooseLocation}) => {
    const [open,setOpen] = useState(false);
    const [locationState, setLocationState] =useState({
        location : "",
        latitude : 0,
        longitude : 0
      })
    
    const handleOpen=()=>{
        setOpen(true);
    }
    function handleSubmit(){
        handleChooseLocation(locationState);
    }
  return (
    <div className = 'd-flex align-items-center'>
        <IconButton color= "primary" onClick ={handleOpen}>
            <i className = "fas fa-map" style={{fontSize : "30px"}}></i>
        </IconButton>
        {
            open ?  <SimpleModal open = {open} close={()=>setOpen(false)} title = {"Delivery address"} handleSubmit={handleSubmit}>
                <div>
                    <GoogleMap handleSelect = {setLocationState}/>
                </div>
            </SimpleModal> : null
        }
        <AutoComplete/>
    </div>
  )
}

export default MapControl