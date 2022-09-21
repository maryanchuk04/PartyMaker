import React, { useEffect, useState } from 'react'
import SupplierItem from './SupplierItem'
import {Divider} from "@mui/material"
import SearchField from '../../ui/SearchField'
import { ClipLoader } from 'react-spinners'

const SuppliersList = ({suppliers}) => {
  const [suppliersFiltred, setSuppliersFiltred] = useState([]);
  const [loading,setLoading] = useState(false);
  
  
  const handleSearch=(text)=>{
    const res = suppliers.filter(el=>{
      if(text === ""){
        return el;
      }
      else{
        console.log(loading)
        return el.companyName.toLowerCase().includes(text);
      }
    });
    setSuppliersFiltred(res);
  }

  useEffect(()=>{
    setSuppliersFiltred(suppliers)
  },[suppliers])

  return (
    <div className = "box-shadow-design p-3 h-100">
        <h4>Suppliers</h4>
        {suppliers?.length === 0 ? 
          <div className = 'd-flex' style = {{height: "300px"}}>
            <p className = 'text-center m-auto'>Choose the services</p>
          </div> : 
          <>
            <SearchField handleSearch = {handleSearch}/>
            <div className = "d-flex flex-column"  style ={{height : "300px", overflowY : "scroll"}}>
              {
                suppliersFiltred?.map((elem, index)=>(
                    <div>
                        <SupplierItem supplier = {elem}/>
                        <Divider/>
                    </div> 
                ))
              }
          </div>
          </> 
        }
    </div>
  )
}

export default SuppliersList