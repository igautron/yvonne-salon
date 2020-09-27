import React from 'react'
import './Info.css'
import {  MDBIcon, MDBBtn, MDBCard  } from "mdbreact";
import '../../img/salon/salon.JPG'

const st = {fontSize: 50, fontWeight: 400, height:75, letterSpacing: 6, width: 330, color: 'white'}
const stn = {fontSize: 15, fontWeight: 200, fontStretch: 30, letterSpacing: 3, width: 330, color: 'white', textAlign: 'center', marginBottom: 25}
const p = {padding: 65, paddingBottom: 30}
const bl = {color: 'white'}

const Info = () => {
    return (
         <div className='info h-100'>
             <MDBCard
                 className='card-image w-100'
             >
                        <div className='text-white text-center d-flex flex-column align-items-center rgba-black-strong py-5 px-4 rounded w-100'>
                            <div className='purple-text'>
                                <a href="./Top.js" style={st}>YVONNE</a>
                                <div style={stn}><a href="./Top.js" style={bl}>BEAUTY SALON & SHOP</a></div>
                            </div>
                            <h6 className='h4-responsive salon-info-text'>Салон краси та магазин Івон об'єднав у собі сучасні </h6>
                            <h6 className='h4-responsive salon-info-text salon-info-text'>послуги краси для жінок та чоловіків: стрижки, різнобарв'я </h6>
                            <h6 className='h4-responsive salon-info-text salon-info-text'>відтінків фарб для волосся, охайний манікюр та педикюр. </h6>
                            <h6 className='h4-responsive salon-info-text salon-info-text'>У поєднанні із теплими відтінками інтер'єру та якісним </h6>
                            <h6 className='h4-responsive salon-info-text salon-info-text'>обладнанням результат від відвідування салону </h6>
                            <h6 className='h4-responsive salon-info-text salon-info-text'>завжди є неперевершеним.</h6>
                            <MDBBtn rounded size='md-3 font-small'>
                                <MDBIcon className='left ' /> ІНТЕР'ЕР
                            </MDBBtn>
                        </div>
                 </MDBCard>
         </div>
    );
}

export default Info;























