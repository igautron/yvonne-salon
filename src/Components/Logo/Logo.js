import React from 'react'
import './Logo.css'


const LogoS = () => {
    return (
       <div>
        <div className='shop-bg-nav h-100 border-bottom z-depth-1' >
            <div className='container m-auto justify-content-center h-100 p-0'>
                <div className='h-100 p-0 m-0 px-sm-3'>
                    <div className='w-100 h-100 d-inline-flex '>
                        <div className='d-inline-flex float-left p-3'>
                                <img
                                    className='flower my-3'
                                    src={require('../../img/slider/IMGBIN_pink-flowers-pink-flowers-watercolor-painting-png_STw63vwG.png')}
                                    alt='fl1'
                                />
                            <div className='m-0 text-left black-text py-md-3 py-sm-3 py-3'>
                           <img className='w-100 logo-img py-md-3 py-2' src={require('../../img/slider/yvonne.png')}/>
                            </div>
                        </div>
                        <div className='float-right tell-info p-3 ml-auto mr-0'>
                            <ul className='m-0 py-md-5 py-sm-4 py-3 px-0'>
                                <li className="list-unstyled text-right py-1">
                                    <a href='tell:+38(073) 500-55-33' className='logo-tell pink-text font-weight-bold text-right '>+38 073 500 55 33</a>
                                </li>
                                <li className="list-unstyled text-right py-1">
                                    <a href='tell:+38(098) 500-55-33' className='logo-tell black-ic  font-weight-bold text-right'>+38 098 500 55 33</a>
                                </li>
                            </ul>
                        </div>
                        <div className='float-right adress-info p-3 '>
                            <ul className='m-0 py-5 px-0'>
                                <li className="list-unstyled text-right py-1">
                                    <a href="#!" className='logo-tell pink-text font-weight-bold text-right'>м.Київ, вулиця Данченко 32</a>
                                </li>
                                <li className="list-unstyled text-right py-1">
                                    <a href="#!" className='logo-tell black-ic font-weight-bold text-right'>09:00 — 20:00 (без вихідних)</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
          </div>
       </div>
    )
}

export default LogoS;
