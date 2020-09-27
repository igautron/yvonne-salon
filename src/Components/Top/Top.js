import React, { Component, useState }  from 'react'
import './TopStyle.css'
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBIcon,MDBContainer, MDBNavbarToggler, MDBCollapse } from 'mdbreact';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Link} from 'react-router-dom'

// import Main from '../Path/main/Main';
// import AboutSalon from "../Path/about/AboutSalon";
// import AboutSalon from "../Path/about/AboutSalon";
// import Service from "../Path/service/Service";
// import Shop from "../Path/shop/Shop";
// import Contacts from "../Path/contacts/Contacts";


class Top extends React.Component {

    state = {
        collapseID: ''
    };

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ''
        }));
    };

    render() {
        return(
            <div>
                <Router>
                    <header>
                        <MDBNavbar className='p-3 navbar-block' white expand="md" scrolling fixed="top">
                            <div className="container h-100">
                                <MDBNavbar left>
                                    <MDBNavItem active >
                                        <Link to="/main"  className='white-text text-decoration-none d-inline p-3 font-weight-normal nav-item' >Головна</Link>
                                    </MDBNavItem>
                                    <MDBNavItem >
                                        <Link  to="/about" className='white-text text-decoration-none d-inline p-3 font-weight-normal nav-item' >Про салон</Link>
                                    </MDBNavItem>
                                    <MDBNavItem >
                                        <Link  to="/services"  className='white-text text-decoration-none d-inline p-3 font-weight-normal nav-item' >Послуги</Link>
                                    </MDBNavItem>
                                    <MDBNavItem active >
                                        <Link to="/shop"  className='white-text text-decoration-none d-inline p-3 font-weight-normal nav-item' >Магазин</Link>
                                    </MDBNavItem>
                                    <MDBNavItem >
                                        <Link to="/contacts" className='white-text text-decoration-none d-inline p-3 font-weight-normal nav-item' >Контакти</Link>
                                    </MDBNavItem>
                                </MDBNavbar>
                                <MDBNavbarNav right className='pr-3'>
                                    <MDBNavItem  className='w-25 d-inline p-3 pt-2 pb-2 white-text font-weight-normal'>
                                        <MDBIcon fab icon="facebook-f"  />
                                    </MDBNavItem>
                                    <MDBNavItem className='w-25 d-inline p-3 pt-2 pb-2 white-text font-weight-normal'>
                                        <MDBIcon fab icon="instagram" />
                                    </MDBNavItem>
                                    <MDBNavItem  className='w-25 d-inline p-3 pt-2 pb-2 white-text font-weight-normal'>
                                        <MDBIcon far icon="envelope" />
                                    </MDBNavItem>
                                    <MDBNavItem  className='w-25 d-inline p-3 pt-2 pb-2 white-text font-weight-normal'>
                                        <MDBIcon icon="user-circle" />
                                    </MDBNavItem>
                                </MDBNavbarNav>
                            </div>
                        </MDBNavbar>
                        <div id='navigation-mobile'>
                                <MDBContainer className='m-auto w-100'>
                                    <MDBNavbar
                                        light
                                        className='z-depth-0 w-100 pt-sm-0 pt-md-2 pb-sm-0 pb-md-0 pt-0 pb-0 m-0'
                                    >
                                        <MDBContainer className='m-0 justify-content-center w-100'>
                                            <MDBNavbarToggler
                                                onClick={this.toggleCollapse('navbarCollapse1')}
                                            />
                                            <MDBNavbarNav right className='nav-hidden d-inline'>
                                                <MDBNavItem className='w-25 d-inline pl-2 pr-2 pt-2 pb-2 pl-sm-2 pr-sm-3 pt-sm-2 pb-sm-2 pr-md-4 pl-md-2 white-text nav-icon'>
                                                    <MDBIcon fab icon='facebook-f'/>
                                                </MDBNavItem>
                                                <MDBNavItem className='w-25 d-inline pl-2 pr-2 pt-2 pb-2 pl-sm-2 pr-sm-3 pt-sm-2 pb-sm-2 pr-md-4 pl-md-2 white-text nav-icon'>
                                                    <MDBIcon fab icon='instagram'/>
                                                </MDBNavItem>
                                                <MDBNavItem className='w-25 d-inline pl-2 pr-2 pt-2 pb-2 pl-sm-2 pr-sm-3 pt-sm-2 pb-sm-2 pr-md-4 pl-md-2 white-text nav-icon'>
                                                    <MDBIcon far icon='envelope'/>
                                                </MDBNavItem>
                                                <MDBNavItem className='w-25 d-inline pl-2 pr-2 pt-2 pb-2 pl-sm-2 pr-sm-2 pt-sm-2 pb-sm-2 pr-md-1 pl-md-2 white-text nav-icon'>
                                                    <MDBIcon icon='user-circle'  className='border-left pl-4 pl-sm-3 pl-md-3'/>
                                                </MDBNavItem>
                                            </MDBNavbarNav>
                                            <MDBCollapse
                                                id='navbarCollapse1'
                                                isOpen={this.state.collapseID}
                                                navbar
                                                className='shop-nav-navbar'
                                            >
                                                <MDBNavbarNav left>
                                                    <MDBNavItem active>
                                                        <MDBNavLink to='#!' className='pl-3 p-2 font-weight-normal text-white'>Головна</MDBNavLink>
                                                    </MDBNavItem>
                                                    <MDBNavItem>
                                                        <MDBNavLink to='#!' className='pl-3 p-2 font-weight-normal text-white'>Про салон</MDBNavLink>
                                                    </MDBNavItem>
                                                    <MDBNavItem>
                                                        <MDBNavLink to='#!' className='pl-3 p-2 font-weight-normal text-white'>Послуги</MDBNavLink>
                                                    </MDBNavItem>
                                                    <MDBNavItem>
                                                        <MDBNavLink to='#!' className='pl-3 p-2 font-weight-normal text-white'>Магазин</MDBNavLink>
                                                    </MDBNavItem>
                                                    <MDBNavItem>
                                                        <MDBNavLink to='#!' className='pl-3 p-2 font-weight-normal text-white'>Контакти</MDBNavLink>
                                                    </MDBNavItem>
                                                </MDBNavbarNav>
                                            </MDBCollapse>
                                        </MDBContainer>
                                    </MDBNavbar>
                                </MDBContainer>
                        </div>
                    </header>
                </Router>
            </div>
        );
    }
}

export default Top;
