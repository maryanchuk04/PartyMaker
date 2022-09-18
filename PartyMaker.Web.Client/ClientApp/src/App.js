import React, { useState, useEffect } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/main-page/Home';
import { FetchData } from './components/FetchData';
import { Container } from 'reactstrap';

import './custom.css'

import CustomerLogin from './components/pages/customerLogin';
import SupplierLogin from './components/pages/supplier-page/supplierLogin';

import AuthPreviewPage from './components/auth-pages/auth-preview-page/auth-preview';
import SingInPage from './components/auth-pages/sign-in/sign-in';
import TopButton from './components/ui/TopButton';


export default function App(){
  const [showButton, setShowButton] = useState();

    useEffect(()=>{
      window.addEventListener("scroll", handleVisibleButton);
    },[]);

    function handleVisibleButton(){
      const scrollHeight = window.pageYOffset;
      if(scrollHeight > 200){
        console.log("HI");
        return setShowButton(true);
      }
      else if(scrollHeight <= 200) {
        return setShowButton(false);
      } 
    }
    function handleScrollUp(){
      window.scrollTo({top: 0, left : 0, behavior : "smooth"})
    }

    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Container>
        <Route path='/auth/suppliers' component={SupplierLogin} />
        <Route path='/auth/customers' component={CustomerLogin} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path = "/create-account" component = {AuthPreviewPage}/>
        <Route path = "/auth/login" component = {SingInPage}/>
        <TopButton handleScrollUp = {handleScrollUp} showButton = {showButton}/>
        </Container>
      </Layout>
    );
}
