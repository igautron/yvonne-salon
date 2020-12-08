import React from 'react'

import { MDBBtn, MDBCard  } from "mdbreact";
import './Info.css'

import {Link} from 'react-router-dom'


const Info = () => {
    return (
         <div>
             <MDBCard
                 className='card-image w-100'
             >
                        <div className='text-white h-100 text-center d-flex flex-column align-items-center rgba-purple-light py-5 p-0  px-sm-3 w-100'>
                            <div className='m-0 text-left black-ic'>
                                <p className='shop-logo-name m-0 w-100'>YVONNE</p>
                                <p className='shop-logo-text-name text-left font-weight-normal m-0 my-sm-0 w-100' >BEAUTY SALON & SHOP</p>
                            </div>
                            <div className='pt-4 w-75 m-0 justify-content-center shop-logo-slogan'>
                                Салон краси та магазин Івон об'єднав у собі сучасні послуги краси для жінок та чоловіків: стрижки, різнобарв'я відтінків фарб для волосся, охайний манікюр та педикюр. У поєднанні із теплими відтінками інтер'єру та якісним обладнанням результат від відвідування салону завжди є неперевершеним.
                            </div>
                           <Link to='/photos'>
                                <MDBBtn rounded size='font-small mt-0'>
                                    ГАЛЕРЕЯ
                                </MDBBtn>
                            </Link>
                        </div>
                 </MDBCard>
         </div>
    );
}

export default Info;























