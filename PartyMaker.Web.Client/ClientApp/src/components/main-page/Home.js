import React, { Component, useEffect, useRef, useState } from 'react';
import useMedia from 'use-media';
import './components/home.css'
import HowItWorks from './components/how-it-works';
import SliderComponent from './components/slider';
import TopSuppliers from './components/top-suppliers';

export function Home(){
    const ref = useRef();
    
    useEffect(()=>{
      
    },[]);

    return (
      <div ref = {ref} className = "main-page">
        <SliderComponent/>
        <HowItWorks/>
        <TopSuppliers/> 

      </div>
    );
}
