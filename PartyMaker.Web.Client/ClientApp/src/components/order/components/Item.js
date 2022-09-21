import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import ComboBox from '../../ui/ComboBox'
import DatePicker from '../../ui/DatePicker'
import DetailsField from './DetailsField'
import MapControl from './MapControl'
import SuppliersList from './SuppliersList'
import NumberField from '../../ui/NumberField'
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

const Item = ({submitItem}) => {
  const [itemState, setItemState] = useState({
    suppliers : [],
    service : null,
    address : {
      location : '',
      longitude : 0,
      latitude : 0
    },
    details : '',
    date : '',
    qty : 0
  });

  const handleSubmitItem = () =>{
    console.log(itemState);
    submitItem(itemState);
  }

  useEffect(()=>{
    //get services from db
  },[])
  const handleChangeComboBox = (itemId) =>{
    setItemState({...itemState,
       suppliers : tempTopSuppliers,
       service :  itemId,
    });
  }

  const handleChooseLocation = (location) => setItemState({...itemState, address : location})
  const handleChooseDetails = (details) => setItemState({...itemState, details : details})
  const handleQty = (number) => setItemState({...itemState,qty : number })
  const handleDate = (date) => setItemState({...itemState, date : date});
  return (
    <>
      <div className = "row w-100 m-auto">
          <div className="col col-md-auto">
              <ComboBox label = {"Choose the service"} handleChange = {handleChangeComboBox} arrayData = {[{id : 12,name : "ballons"}]}/>
              <DatePicker handleChange = {handleDate} value ={itemState.date}/>
          </div>
          <div className="col col-md-3">
              <NumberField label ={"Count"} handleChange = {handleQty}/>
              <DetailsField label ={"Service details"} handleChooseDetails = {handleChooseDetails}/>
              <MapControl handleChooseLocation = {handleChooseLocation}/>
          </div>
          <div className="col">
              <SuppliersList suppliers = {itemState.suppliers} />
          </div>
          
      </div>
      <div className = "d-flex justify-content-between m-2">
          <Button variant = 'outlined' color="error">Clear</Button>
          <Button variant = 'outlined' onClick = {handleSubmitItem}>Submit</Button>
      </div>
    </>
  )
}

export default Item