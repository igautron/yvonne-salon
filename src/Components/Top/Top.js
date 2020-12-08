import React from 'react'
import './TopStyle.css'
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBIcon,MDBContainer, MDBNavbarToggler, MDBCollapse } from 'mdbreact';
import { Link } from 'react-router-dom'

import Mobile from './../../Components/Path/Mobile/Mobile'

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
                <div className='nav-block' >
                    <MDBNavbar className=' p-0 navbar-block white-ic'  expand="md" scrolling fixed="top" >
                      <div className='container p-0'>
                        <div className="w-100 h-100">
                            <MDBNavbar className='float-left nav-pill'>
                                <MDBNavItem active >
                                    <Link to="/"  className='white-text text-decoration-none d-inline p-3 font-weight-normal nav-item' >Головна</Link>
                                </MDBNavItem>
                                <MDBNavItem >
                                    <Link  to='./aboutSalon' className='white-text text-decoration-none d-inline p-3 font-weight-normal nav-item' >Про салон</Link>
                                </MDBNavItem>
                                <MDBNavItem >
                                    <Link  to='./service' className='white-text text-decoration-none d-inline p-3 font-weight-normal nav-item' >Послуги</Link>
                                </MDBNavItem>
                                <MDBNavItem >
                                    <Link  to='./photos'  className='white-text text-decoration-none d-inline p-3 font-weight-normal nav-item' >Галерея</Link>
                                </MDBNavItem>
                                <MDBNavItem active >
                                    <Link to='./price'  className='white-text text-decoration-none d-inline p-3 font-weight-normal nav-item' >Ціни</Link>
                                </MDBNavItem>
                                <MDBNavItem >
                                    <Link to='./contacts' className='white-text text-decoration-none d-inline p-3 font-weight-normal nav-item' >Контакти</Link>
                                </MDBNavItem>
                            </MDBNavbar>
                            <MDBNavbar className='float-right nav-pill'>
                                <MDBNavItem  className='d-inline px-3 white-text font-weight-normal'>
                                    <a href='https://www.facebook.com/yvonnemultibrands/?view_public_for=101844278443757' className='text-white' >
                                        <MDBIcon fab icon="facebook-f"  />
                                    </a>
                                </MDBNavItem>
                                <MDBNavItem className='d-inline px-3 white-text font-weight-normal'>
                                    <a href='https://www.instagram.com/yvonne__salon/?r=nametag' className='text-white' >
                                        <MDBIcon fab icon="instagram" />
                                    </a>
                                </MDBNavItem>
                                <MDBNavItem  className='d-inline px-3 white-text font-weight-normal'>
                                        <Link to='./Writetous' className="list-unstyled white-ic m-0 ">
                                                <MDBIcon far icon="envelope" />
                                        </Link>
                                </MDBNavItem>
                            </MDBNavbar>
                        </div>
                      </div>
                    </MDBNavbar>
                    <div id='navigation-mobile' expand="md"  fixed="top scrolling">
                        <MDBContainer className='m-auto w-100 p-0'>
                            <MDBNavbar
                                light
                                className='z-depth-0 w-100 p-0 m-0 px-sm-3'
                            >
                                <MDBContainer className='m-0 justify-content-center w-100 p-0'>
                                    <MDBNavbarToggler
                                        onClick={this.toggleCollapse('navbarCollapse1')}
                                    />
                                    <MDBNavbarNav right className='nav-hidden d-inline'>
                                        <MDBNavItem className='w-25 d-inline px-3 white-text nav-icon'>
                                            <a href='https://www.facebook.com/yvonnemultibrands/?view_public_for=101844278443757' className='text-white' >
                                                <MDBIcon fab icon="facebook-f"  />
                                            </a>
                                        </MDBNavItem>
                                        <MDBNavItem className='w-25 d-inline px-3 white-text nav-icon'>
                                            <a href='https://www.instagram.com/yvonne__salon/?r=nametag' className='text-white' >
                                                <MDBIcon fab icon="instagram" />
                                            </a>
                                        </MDBNavItem>
                                        <MDBNavItem className='w-25 d-inline px-3 white-text nav-icon'>
                                                <Link to='./Writetous' className="list-unstyled footer-nav white-ic m-0 ">
                                                    <MDBIcon far icon="envelope" />
                                                </Link>
                                        </MDBNavItem>
                                    </MDBNavbarNav>
                                    <MDBCollapse
                                        id='navbarCollapse1'
                                        isOpen={this.state.collapseID}
                                        navbar
                                        className='shop-nav-navbar'
                                    >
                                        <MDBNavbarNav className='float-left p-3'>
                                            <MDBNavItem className='py-2' active>
                                                <Link to='/' className=' font-weight-normal text-white'>Головна</Link>
                                            </MDBNavItem>
                                            <MDBNavItem className='py-2'>
                                                <Link to='./AboutSalon' className='font-weight-normal text-white'>Про салон</Link>
                                            </MDBNavItem>
                                            <MDBNavItem className='py-2'>
                                                <Link to='./Service' className='font-weight-normal text-white'>Послуги</Link>
                                            </MDBNavItem>
                                            <MDBNavItem className='py-2'>
                                                <Link to='./photos' className='font-weight-normal text-white'>Галерея</Link>
                                            </MDBNavItem>
                                            <MDBNavItem className='py-2'>
                                                <Link to='./price' className='font-weight-normal text-white'>Ціни</Link>
                                            </MDBNavItem>
                                            <MDBNavItem className='py-2'>
                                                <Link to='./contacts' className='font-weight-normal text-white'>Контакти</Link>
                                            </MDBNavItem>
                                        </MDBNavbarNav>
                                    </MDBCollapse>
                                </MDBContainer>
                            </MDBNavbar>
                            <div>
                                 <Mobile />
                            </div>
                         </MDBContainer>
                    </div>
                </div>
            </div>
        );
    }
}

export default Top;
