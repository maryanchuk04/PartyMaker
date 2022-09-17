import React, { useEffect, useState } from 'react'
import SupplierShortInfo from '../../supplier-short-info';

const tempTopSuppliers = [
  {
    id : "203210030101020312",
    image : "https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg",
    companyName : "Supplier1",
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
  },{
    id : "203210030101020312",
    image : "https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg",
    companyName : "Supplier1",
    supplierServices : [
      "Cakes", "Balls", "Hourse","Cakes", "Balls", "Hourse","Cakes", "Balls", "Hourse","Cakes", "Balls", "Hourse","Hourse","Cakes", "Balls", "Hourse"
    ],

  },{
    id : "203210030101020312",
    image : "https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg",
    companyName : "Supplier1",
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

const TopSuppliers = () => {
  const [suppliers, setSuppliers] = useState(tempTopSuppliers);
    useEffect(()=>{

    },[]);

    
  return (
    <div style ={{height:"fit-content", backgroundImage :"url('https://i.ibb.co/N7P4g3d/image-13.png')", backgroundSize:'cover', backgroundPosition: "center"}}>
      <div className="container py-2">
        <div className="display-6 text-center">
          <h1 style ={{fontFamily : "'Rubik', sans-serif", fontWeight : "600", color: "#ffd80b"}}>Top Suppliers</h1>
        </div>
          <div className="w-50 m-auto d-flex flex-column my-5">
            {
              suppliers?.map((item)=>(
                <SupplierShortInfo supplier = {item}/>
              ))
            }
          </div>
          
        </div>
    </div>
  )
}

export default TopSuppliers