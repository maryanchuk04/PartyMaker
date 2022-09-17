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


    render() {
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white  box-shadow h-100" >
                    <Container>
                        <NavbarBrand tag={Link} to="/"><h1>Party<span style ={{color : "#1aa94b"}}>Maker</span></h1></NavbarBrand>

                        <ul className="navbar-nav">
                            <NavItem style = {{display : "contents"}}>
                                <NavLink tag={Link} className="text-light m-1" to="/">Home</NavLink>
                            </NavItem>
                            <NavItem style = {{display : "contents"}}>
                                <NavLink tag={Link} className="text-light m-1" to="/сontact">Contact Us</NavLink>
                            </NavItem>
                            <NavItem style = {{display : "contents"}}>
                                <NavLink tag={Link} className="text-light sing-in m-1" to="/auth/login">Sing In</NavLink>

                            </NavItem>
                            <NavItem style = {{display : "contents"}}>
                                <NavLink tag={Link} className="text-light  create-account-li ms-1" to="/create-account">Sign Up</NavLink>
                            </NavItem>
                        </ul>
                    </Container>
                </Navbar>
            </header >
        );
    }
}
