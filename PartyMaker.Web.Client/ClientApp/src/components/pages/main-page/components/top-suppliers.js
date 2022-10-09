import React, { useEffect, useState } from 'react'
import {useMedia} from 'use-media';
import { SupplierService } from '../../../../services/SupplierService';
import SupplierShortInfo from "../../../supplier-short-info";

const TopSuppliers = ({suppliers}) => {
  const services = new SupplierService();
  const media = useMedia({maxWidth : "950px"})
    useEffect(()=>{
      console.log(suppliers);
    },[]);


  return suppliers?.length !== 0 &&
    <div style ={{height:"fit-content", backgroundImage :"url('https://i.ibb.co/N7P4g3d/image-13.png')", backgroundSize:'cover', backgroundPosition: "center"}}>
      <div className="container py-2">
        <div className="display-6 text-center">
          <h1 style ={{fontFamily : "'Rubik', sans-serif", fontWeight : "600", color: "#ffd80b"}}>Top Suppliers</h1>
        </div>
          <div className={`${media ? "w-75": "w-50" } m-auto d-flex flex-column my-5`}>
            {
              suppliers?.map((item)=>(
                <SupplierShortInfo supplier = {item}/>
              ))
            }
          </div>

        </div>
    </div>
  
}

export default TopSuppliers