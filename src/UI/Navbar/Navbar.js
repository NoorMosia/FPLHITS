import React, { Component } from "react";
import * as Styles from "./Navbar.module.css";

import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler,
    MDBCollapse, MDBIcon
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

class NavbarPage extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <Router>
                <MDBNavbar color="black" dark expand="md">
                    <MDBNavbarBrand>
                        <div className={Styles.LogoContainer}>
                            <img
                                src={`${process.env.PUBLIC_URL}/images/LOGO-white.png`}
                                alt="pitch"
                            />
                        </div>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav left>
                            <MDBNavItem active>
                                <MDBNavLink to="/game">Game</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/rules">Rules</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/contacts">Contact Us</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/policy">Privacy Policy</MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                            {/* <MDBNavItem>
                                <MDBNavLink className="waves-effect waves-light" to="#!">
                                    <MDBIcon fab icon="twitter" />
                                </MDBNavLink>
                            </MDBNavItem> */}
                            <MDBNavItem>
                                <MDBNavLink className="waves-effect waves-light" to="#!">
                                    Profile <MDBIcon icon="user" />
                                </MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </Router>
        );
    }
}

export default NavbarPage;