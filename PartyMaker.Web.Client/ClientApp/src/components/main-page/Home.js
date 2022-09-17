import React, { Component } from 'react';
import HowItWorks from './components/how-it-works';
import SliderComponent from './components/slider';
import TopSuppliers from './components/top-suppliers';

export class Home extends Component {
  render () {
    return (
      <div>
        <SliderComponent/>
        <HowItWorks/>
        <TopSuppliers/> 
      </div>
    );
  }
}
