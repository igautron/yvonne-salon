import React from 'react'
import './FooterStyle.css'
import {MDBCol, MDBContainer, MDBRow, MDBFooter, MDBNavItem, MDBIcon, MDBNavbarNav} from 'mdbreact';

const Footer = () => {
    return (
        <MDBFooter className='font-small pt-4'>
            <MDBContainer fluid className='container pl-sm-0 pr-sm-0 text-center text-md-left pl-3 pr-3'>
                <MDBRow className='w-100 pt-4 px-0 px-sm-3 px-md-3 px-lg-3 px-xl-3 mx-3 h-100'>
                    <MDBCol xl='3' lg='3' md="4" sm='4' className='col-4 p-lg-0 p-md-0 p-sm-0 p-0 m-0'>
                        <div>
                            <img
                                className='flower-footer'
                                src={require('../../img/slider/IMGBIN_pink-flowers-pink-flowers-watercolor-painting-png_STw63vwG.png')}
                                alt="fl1"
                            />
                            <a href='./Top.js' className='font-weight-bolder logo-name text-right text-white w-100'>YVONNE</a></div>
                            <div className=''><a href='./Top' className='logo-slogan text-right text-white w-100'>BEAUTY SALON & SHOP</a></div>
                            <p className="logo-text pt-4">Початкова краса - це те, як</p>
                            <p className="logo-text">людина виглядає вранці,</p>
                            <p className="logo-text">ледь встав з ліжка, тобто</p>
                            <p className="logo-text">природно, але бездоганно.</p>
                            <p className="logo-text-cr">Сьюзен Коллінз, "Голодні ігри"</p>
                    </MDBCol>
                    <MDBCol xl='3' lg='3' md="4" sm='4' className='col-4 pl-xl-5 p-lg-0 p-md-0 p-sm-0 p-0 m-0'>
                        <h5 className='title footer-nav font-weight-normal pl-4 pl-sm-3 pl-md-5 pl-lg-5 pl-xl-5 text-left'>Навігація</h5>
                        <ul className='pl-4 pl-sm-3 pl-md-5 pl-lg-5 pl-xl-5 text-left'>
                            <li className="list-unstyled footer-nav">
                                <a href="#!" className='footer-items'>Головна</a>
                            </li>
                            <li className="list-unstyled footer-nav">
                                <a href="#!" className='footer-items'>Про салон</a>
                            </li>
                            <li className="list-unstyled footer-nav">
                                <a href="#!" className='footer-items'>Послуги</a>
                            </li>
                            <li className="list-unstyled footer-nav">
                                <a href="#!" className='footer-items'>Магазин</a>
                            </li>
                            <li className="list-unstyled footer-nav">
                                <a href="#!" className='footer-items'>Контакти</a>
                            </li>
                        </ul>
                    </MDBCol>
                    <MDBCol xl='3' lg='3' md="4" sm='4' className='pl-xl-5 p-lg-0 p-md-0 d-md-none d-sm-none m-0 d-lg-block d-xl-block d-none'>
                        <h5 className='title font-weight-normal'>Інформація</h5>
                        <ul className=''>
                            <li className="list-unstyled">
                                <a href="#!" className='footer-items'>Ціни</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!" className='footer-items'>Сертифікати</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!"></a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!"></a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!"></a>
                            </li>
                        </ul>
                    </MDBCol>
                    <MDBCol xl='3' lg='3' md="4" sm='4' className='col-4 p-lg-0 p-md-0 p-sm-0 p-0 m-0'>
                        <h5 className='title font-weight-normal text-left pl-xl-5 pl-lg-2 pl-md-2 pl-sm-2 pl-2 ml-xl-4'>Контакти</h5>
                        <ul className='text-left pl-xl-5 pl-lg-2 pl-md-2 pl-sm-2 pl-2 ml-xl-4'>
                            <li className="list-unstyled">
                                <a href="#!" className='footer-items'>м.Київ, вул. Данченко 32</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!" className='footer-items'>+38 073 500 55 33</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!" className='footer-items'>+38 098 500 55 33</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!" className='footer-items'>Графік роботи:</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!" className='footer-items'>09:00-20:00 (без вихідних)</a>
                            </li>
                            <MDBNavbarNav right inline className="footer-ic mb-4">
                                <MDBNavItem  className='inline p-3' >
                                    <MDBIcon fab icon="facebook-f"  className="footer-icons"/>
                                </MDBNavItem>
                                <MDBNavItem className='inline p-3' >
                                    <MDBIcon fab icon="instagram" className="footer-icons"/>
                                </MDBNavItem>
                                <MDBNavItem  className='inline p-3' >
                                    <MDBIcon far icon="envelope" className="footer-icons"/>
                                </MDBNavItem>
                            </MDBNavbarNav>
                        </ul>
                    </MDBCol>
               </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer style={{textAlign: 'center'}}>
                    &copy;  Copyright {new Date().getFullYear()} <a className="salon" href="https://www.mdbootstrap.com"> YVONNE SALON & SHOP - All Rights Reserved </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default Footer;
