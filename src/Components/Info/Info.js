import React from 'react'
import './Info.css'
import {  MDBIcon, MDBBtn, MDBCard  } from "mdbreact";
import '../../img/salon/salon.JPG'

import {Link} from 'react-router-dom'


const Info = () => {
    return (
         <div className='info h-100'>
             <MDBCard
                 className='card-image w-100'
             >
                        <div className='text-white text-center d-flex flex-column align-items-center rgba-black-strong py-5 px-4 rounded w-100'>
                            <div className='purple-text'>
                                <h2 href="./Top.js" className='text-white font-weight-bold py-2'>Y V O N N E</h2>
                                <div className='text-white pb-5'><a href="./Top.js" className='text-white'>BEAUTY SALON & SHOP</a></div>
                            </div>
                            <h6 className='h4-responsive salon-info-text'>Салон краси та магазин Івон об'єднав у собі сучасні </h6>
                            <h6 className='h4-responsive salon-info-text salon-info-text'>послуги краси для жінок та чоловіків: стрижки, різнобарв'я </h6>
                            <h6 className='h4-responsive salon-info-text salon-info-text'>відтінків фарб для волосся, охайний манікюр та педикюр. </h6>
                            <h6 className='h4-responsive salon-info-text salon-info-text'>У поєднанні із теплими відтінками інтер'єру та якісним </h6>
                            <h6 className='h4-responsive salon-info-text salon-info-text'>обладнанням результат від відвідування салону </h6>
                            <h6 className='h4-responsive salon-info-text salon-info-text'>завжди є неперевершеним.</h6>
                            <Link to='/photos'>
                                <MDBBtn rounded size='md-3 font-small'>
                                    <MDBIcon className='left' /> ІНТЕР'ЕР
                                </MDBBtn>
                            </Link>
                        </div>
                 </MDBCard>
         </div>
    );
}

export default Info;























