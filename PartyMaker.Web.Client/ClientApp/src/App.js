import React, { useState, useEffect } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/main-page/Home';
import { FetchData } from './components/FetchData';
import './custom.css'
import CustomerLogin from './components/pages/customerLogin';
import SupplierLogin from './components/pages/supplier-page/supplierLogin';

import AuthPreviewPage from './components/auth-pages/auth-preview-page/auth-preview';
import SingInPage from './components/auth-pages/sign-in/sign-in';
import TopButton from './components/ui/TopButton';
import CreateOrder from './components/order/create-order-page/create-order'
import { green } from '@mui/material/colors';
import { createTheme ,ThemeProvider} from '@mui/material/styles';



export default function App(){
  const muiTheme = createTheme({
    palette : {
        primary : {
            main : green[500]
        }
    }
})
  const [showButton, setShowButton] = useState();
  const HEADER_HEIGHT = 134.4;
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
        <ThemeProvider theme = {muiTheme}>
        <div style = {{height : window.innerHeight-HEADER_HEIGHT}}>
            <Route exact path='/' component={Home} /> 
            <Route path='/auth/suppliers' component={SupplierLogin} />
            <Route path='/auth/customers' component={CustomerLogin} />
            <Route path='/fetch-data' component={FetchData} />
            <Route path = "/create-account" component = {AuthPreviewPage}/>
            <Route path = "/auth/login" component = {SingInPage}/>
            <Route path = "/create-order" component ={CreateOrder}/>
            <TopButton handleScrollUp = {handleScrollUp} showButton = {showButton}/>
        </div>
        </ThemeProvider>
      </Layout>
    );
}
