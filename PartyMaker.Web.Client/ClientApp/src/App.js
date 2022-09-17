import React, { Component } from 'react';
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


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Container>
        <Route path='/auth/suppliers' component={SupplierLogin} />
        <Route path='/auth/customers' component={CustomerLogin} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path = "/create-account" component = {AuthPreviewPage}/>
        <Route path = "/auth/login" component = {SingInPage}/>  
        </Container>
      </Layout>
    );
  }
}
