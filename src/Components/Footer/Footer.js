import React from 'react'
import './FooterStyle.css'
import {MDBCol, MDBContainer, MDBRow, MDBFooter, MDBNavItem, MDBIcon, MDBNavbarNav} from 'mdbreact';
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <MDBFooter className='font-small pt-4'>
            <MDBContainer fluid className='container pl-sm-0 pr-sm-0 text-center text-md-left p-0'>
                <MDBRow className='w-100 pt-4 px-0 px-sm-3 px-3 h-100'>
                    <MDBCol xl='3' lg='3' md="4" sm='4' className='col-4 p-lg-0 p-md-0 p-sm-0 p-0 m-0'>
                        <div>
                            <img
                                className='flower-footer'
                                src={require('../../img/slider/IMGBIN_pink-flowers-pink-flowers-watercolor-painting-png_STw63vwG.png')}
                                alt="fl1"
                            />
                            <img
                                className='logo-white'
                                src={require('./../../img/slider/yvonne-white.png')}
                                alt="fl1"
                            />
                        </div>
                            <p className="logo-text pt-4">Початкова краса - це те, як</p>
                            <p className="logo-text">людина виглядає вранці,</p>
                            <p className="logo-text">ледь встав з ліжка, тобто</p>
                            <p className="logo-text">природно, але бездоганно.</p>
                            <p className="logo-text-cr">Сьюзен Коллінз, "Голодні ігри"</p>
                    </MDBCol>
                    <MDBCol xl='3' lg='3' md="4" sm='4' className='col-6 pl-xl-5 p-lg-0 p-md-0 p-sm-0 pl-5 m-0 pb-5 '>
                        <h5 className='title footer-nav font-weight-normal pl-0 pl-sm-3 pl-md-5 pl-lg-5 pl-xl-5 text-left pt-3'>Навігація</h5>
                        <ul className='pl-0 pl-sm-3 pl-md-5 pl-lg-5 pl-xl-5 text-left list-group'>
                            <Link to='/' className="list-unstyled footer-nav py-1">
                                Головна
                            </Link>
                            <Link to='./aboutSalon' className="list-unstyled footer-nav py-1">Про салон</Link>
                            <Link to='./service' className="list-unstyled footer-nav py-1">Послуги</Link>
                            <Link to='./photos' className="list-unstyled footer-nav py-1">Галерея</Link>
                            <Link to='./price' className="list-unstyled footer-nav py-1">Ціни</Link>
                            <Link to='./contacts' className="list-unstyled footer-nav py-1">Контакти</Link>

                        </ul>
                    </MDBCol>
                    <MDBCol xl='3' lg='3' md="4" sm='4' className='col-4 pl-xl-5 p-lg-0 p-md-0 pl-0 d-md-none d-sm-none m-0 d-lg-block d-xl-block '>
                        <h5 className='title font-weight-normal footer-nav pl-md-5 ml-0 text-left w-100 float-left pt-3'>Інформація</h5>
                        <ul className='pl-0'>
                            <Link to='./Job' className="list-unstyled footer-nav pl-md-5 py-1 m-0 text-left float-left ">Співпраця</Link>
                        </ul>
                        <ul className='pl-0'>
                            <Link to='./Writetous' className="list-unstyled footer-nav pl-md-5 py-1 m-0 text-left float-left ">Форма зв'язку</Link>
                        </ul>
                    </MDBCol>
                    <MDBCol xl='3' lg='3' md="4" sm='4' className='col-6 p-lg-0 p-md-0 p-sm-0 p-0 pl-5 m-0'>
                        <h5 className='title font-weight-normal footer-items text-left pl-xl-5 pl-lg-2 pl-md-2 pl-sm-2 pl-2 ml-xl-4 pt-3'>Контакти</h5>
                        <ul className='text-left pl-xl-5 pl-lg-2 pl-md-2 pl-sm-2 pl-2 ml-xl-4'>
                            <li className="list-unstyled py-1">
                                <a href="#!" className='footer-items '>м.Київ, вул. Данченко 32</a>
                            </li>
                            <li className="list-unstyled py-1">
                                <a href='tell:+38(073) 500-55-33' className='footer-items'>+38 073 500 55 33</a>
                            </li>
                            <li className="list-unstyled py-1">
                                <a href='tell:+38(098) 500-55-33' className='footer-items'>+38 098 500 55 33</a>
                            </li>
                            <li className="list-unstyled py-1">
                                <a href="#!" className='footer-items'>Графік роботи:</a>
                            </li>
                            <li className="list-unstyled py-1">
                                <a href="#!" className='footer-items'>09:00-20:00 (без вихідних)</a>
                            </li>
                            <MDBNavbarNav className="footer-ic mb-4 float-right d-inline-flex">
                                <MDBNavItem  className='p-3' >
                                    <a href='https://www.facebook.com/yvonnemultibrands/?view_public_for=101844278443757' className='text-white' >
                                        <MDBIcon fab icon="facebook-f"  className="footer-icons"/>
                                    </a>
                                </MDBNavItem>
                                <MDBNavItem className='p-3' >
                                    <a href='https://www.instagram.com/yvonne__salon/?r=nametag'>
                                        <MDBIcon fab icon="instagram" className="footer-icons"/>
                                    </a>
                                </MDBNavItem>
                                <MDBNavItem  className='p-3' >
                                        <Link to='./Writetous' className="list-unstyled footer-nav white-ic m-0 ">
                                            <MDBIcon far icon="envelope" className="footer-icons"/>
                                        </Link>
                                </MDBNavItem>
                            </MDBNavbarNav>
                        </ul>
                    </MDBCol>
               </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3 px-0">
                <MDBContainer style={{textAlign: 'center'}}>
                    &copy;  Copyright {new Date().getFullYear()} <a className="salon" href="https://www.mdbootstrap.com"> YVONNE SALON & SHOP - All Rights Reserved </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default Footer;
