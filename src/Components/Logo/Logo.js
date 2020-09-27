import React from 'react'
import './Logo.css'
import {BrowserRouter as Router} from 'react-router-dom';

import {
    MDBBtn,
    MDBIcon, MDBNavbarNav, MDBNavItem
} from 'mdbreact'

const LogoS = () => {
    return (
        <div className='shop-bg-nav h-100' >
            <div className='container m-auto justify-content-center h-100 '>
                <div className='px-3 mx-3 h-100'>
                    <div className='w-100 d-inline-flex pt-lg-5 pt-xl-5 pt-md-5 pt-sm-0 pt-2 h-100'>
                        <div left className='col-4 col-sm-5 col-md-5 col-lg-5 col-xl-5 w-responsive shop-logo-div ml-5 ml-sm-4 ml-md-4 ml-lg-5 ml-xl-5 px-0 my-0 py-3 pl-sm-5 pr-sm-0 py-sm-4 my-0 px-md-2 pt-md-2 pb-md-3 float-left pl-lg-5 pt-lg-4 pb-lg-5 pt-sm-4 pb-sm-3 py-xl-4 mt-xl-3 pr-md-0' style={{zIndex: '1'}}>
                            <div className='shop-logo-img black-text ml-lg-0 w-auto pl-lg-0' >
                                <img
                                    className='flower'
                                    src={require('../../img/slider/IMGBIN_pink-flowers-pink-flowers-watercolor-painting-png_STw63vwG.png')}
                                    alt='fl1'
                                />
                                <a href='./Top.js' className='black-text w-auto shop-logo pl-lg-0 pl-md-4'>YVONNE</a>
                            </div>
                            <div className='ml-lg-0 m-0 w-auto text-left black-text pl-0 pl-sm-0 pl-xl-0 pl-lg-0 pl-md-0'><a href='./Top' className='shop-logo-text text-left black-text pl-3 pl-sm-0 pl-md-4 pl-lg-0 pl-xl-0 pl-lg-0 ml-lg-0 ml-md-0 font-weight-normal m-0 my-sm-0 w-100' >BEAUTY SALON & SHOP</a>
                            </div>
                        </div>
                        <div right className='d-sm-flex h-100 col-4 col-lg-3 col-md-3 col-sm-3 col-xl-3 w-responsive shop-logo-div d-inline-flex float-right mx-0 py-3 my-xl-5 mx-xl-0 my-lg-4 mx-lg-2 p-0 mx-md-1 my-md-3 mx-sm-0 my-sm-4'>
                            <ul className='p-0 w-100 pr-xl-5 pr-lg-5 pr-md-2 mb-0 mb-0 pt-lg-3 pt-xl-0 pt-md-0 pt-sm-0 pt-0 py-1 pr-sm-3'>
                                <li className="list-unstyled text-right">
                                    <a href="#!" className='logo-tell pink-text font-weight-normal text-right'>+38 073 500 55 33</a>
                                </li>
                                <li className="list-unstyled text-right">
                                    <a href="#!" className='logo-tell black-text font-weight-normal text-right'>+38 098 500 55 33</a>
                                </li>
                            </ul>
                        </div>
                        <div right id='shop-logo' className='d-sm-flex h-100 col-4 col-lg-3 col-md-4 col-sm-4 col-xl-3 w-responsive shop-logo-div d-inline-flex p-0 mx-0 py-3 my-4 my-xl-5 mx-xl-0 my-lg-4 mx-lg-0 mx-md-1 my-md-3 mx-sm-0 my-sm-4'>
                            <ul className='p-0 w-100 mb-0 h-100 pt-lg-3 pt-xl-0 pt-md-0 pt-sm-0 pt-0'>
                                <li className="list-unstyled text-right">
                                    <a href="#!" className='logo-tell pink-text font-weight-normal text-right pr-1 pr-sm-3 pr-md-4 pr-lg-0 pr-xl-0'>м.Київ, вулиця Данченко 32</a>
                                </li>
                                <li className="list-unstyled text-right">
                                    <a href="#!" className='logo-tell black-text font-weight-normal text-right pr-1 pr-sm-3 pr-md-4 pr-lg-0 pr-xl-0'>09:00 — 20:00 (без вихідних)</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogoS;
