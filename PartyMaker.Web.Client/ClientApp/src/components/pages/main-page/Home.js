import React, { useEffect, useRef, useState } from 'react';
import { ServicesService } from '../../../services/ServicesService';
import './components/home.css'
import HowItWorks from './components/how-it-works';
import SliderComponent from './components/slider';
import TopSuppliers from './components/top-suppliers';
import OurServices from './components/ourservices';
import Footer from './components/footer';

export function Home(){
    const ref = useRef();
    const [services, setServices] =useState([]);
    const service = new ServicesService();
    useEffect(()=>{
      (async()=>{
        const res = await service.getAllServices();
        if(res.ok){
          const response = await res.json();
          console.log(response);
          setServices(response);
        }
      })()
    },[]);

    return (
      <div ref = {ref} className = "main-page">
        <SliderComponent/>
        <HowItWorks/>
        {services?.length !== 0 && <OurServices services = {services}/>}
        <TopSuppliers/> 
        <Footer/>
      </div>
    );
}
