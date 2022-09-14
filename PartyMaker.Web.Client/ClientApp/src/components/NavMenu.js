import React, { Component } from 'react';
import {  Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { isAuth } from '../utils/helpers';

export class NavMenu extends Component {
  constructor (props) {
    super(props);

    this.state = {
      userAuth : false
    };
  }

  componentDidMount(){
    if(isAuth()){
      this.setState({
        userAuth : true
      });
    }
  }


  render () {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3 h-100" >
          <Container>
            <NavbarBrand tag={Link} to="/"><h1>PartyMaker</h1></NavbarBrand>
            <NavbarToggler  className="mr-2" />
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-light" to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-light" to="/сontact">Contact Us</NavLink>
                </NavItem>
                <NavItem>

                  <NavLink tag={Link} className="text-dark" to="/customerLogin">Register Customer</NavLink>

                  <NavLink tag={Link} className="text-light sing-in" to="/auth/login">Sing In</NavLink>

                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-light create-account-li" to="/create-account">Sign Up</NavLink>
                </NavItem>
              </ul>
          </Container>
        </Navbar>
      </header>
    );
  }
}
