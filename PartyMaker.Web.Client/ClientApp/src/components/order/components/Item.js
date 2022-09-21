import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import ComboBox from '../../ui/ComboBox'
import DatePicker from '../../ui/DatePicker'
import DetailsField from './DetailsField'
import MapControl from './MapControl'
import SuppliersList from './SuppliersList'
const tempTopSuppliers = [
  {
    id : "203210030101020312",
    image : "https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg",
    companyName : "Google",
    supplierServices : [
      "Cakes", "Balls", "Hourse"
    ],
  },
  {
    id : "203210030101020312",
    image : "https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg",
    companyName : "apple",
    supplierServices : [
      "Cakes", "Balls", "Hourse"
    ],
  },{
    id : "203210030101020312",
    image : "https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg",
    companyName : "hello",
    supplierServices : [
      "Cakes", "Balls", "Hourse","Cakes", "Balls", "Hourse","Cakes", "Balls", "Hourse","Cakes", "Balls", "Hourse","Hourse","Cakes", "Balls", "Hourse"
    ],

  },{
    id : "203210030101020312",
    image : "https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg",
    companyName : "Case",
    supplierServices : [
      "Cakes", "Balls", "Hourse"
    ],

  },
  {
    id : "203210030101020312",
    image : "https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg",
    companyName : "Supplier1",
    supplierServices : [
      "Cakes", "Balls", "Hourse"
    ],
  }
] 

const Item = () => {
  const [itemState, setItemState] = useState({
    suppliers : [],

  });

  useEffect(()=>{

  },[])
  const handleChangeComboBox = () =>{
    //get suppliers by category
    setItemState({...itemState, suppliers : tempTopSuppliers});
  }
  return (
    <>
      <div className = "row w-100 m-auto">
          <div className="col col-md-auto">
              <ComboBox label = {"Choose the service"} handleChange = {handleChangeComboBox} arrayData = {["ballons"]}/>
              <DatePicker/>
          </div>
          <div className="col col-md-3">
              <DetailsField label ={"Service details"}/>
              <MapControl/>
          </div>
          <div className="col">
              <SuppliersList suppliers = {itemState.suppliers} />
          </div>
          
      </div>
      <div className = "d-flex justify-content-between m-2">
          <Button variant = 'outlined' color="error">Clear</Button>
          <Button variant = 'outlined'>Submit</Button>
      </div>
    </>
  )
}

export default Item