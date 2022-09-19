import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';


import './custom.css'

import CustomerLogin from './components/pages/customerLogin';
import SupplierLogin from './components/pages/supplier-page/supplierLogin';
import SupplierWorkspace from './components/ui/supplier-workspace/SideMenu';


import AuthPreviewPage from './components/auth-pages/auth-preview-page/auth-preview';
import SingInPage from './components/auth-pages/sign-in/sign-in';


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/auth/suppliers' component={SupplierLogin} />
        <Route path='/supplierWorkspace' component={SupplierWorkspace} />
        <Route path='/auth/customers' component={CustomerLogin} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path = "/create-account" component = {AuthPreviewPage}/>
        <Route path = "/auth/login" component = {SingInPage}/>  
      </Layout>
    );
  }
}
