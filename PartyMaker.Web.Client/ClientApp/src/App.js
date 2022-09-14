import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';


import './custom.css'
import CustomerLogin from './components/pages/customerLogin';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/customerLogin' component={CustomerLogin} />
        <Route path='/fetch-data' component={FetchData} />
      </Layout>
    );
  }
}
