import React from 'react'
import './Cards.css'
import $ from 'jquery';

import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';

const c = {backgroundColor: 'white'}

const pink = {color: 'rgba(255,0,95,0.89)'}

const black = {color: 'black', fontSize: 18}


const Cards = () => {
    return (
      <div className='cards'>
          <div className='container'>
            <h1 className='h1-responsive pt-5 pt-sm-5 pt-md-5 pt-lg-5 pt-xl-5 mb-0 pb-5'>Косметичні засоби</h1>
            <MDBRow className="d-flex m-auto align-content-center mb-5 w-100 px-3 mx-3 pt-0">
                <MDBCol md='12' sm='12' lg='4' className='col-12 mb-5 h-100'>
                    <MDBCard className='m-auto w-100 justify-content-center'>
                        <MDBCardImage
                            top
                            src={require('../../img/salon/19.JPG')}
                            overlay='white-slight'
                            hover
                            waves
                            alt='MDBCard image cap'
                            className="card-image-top w-100"
                        />
                        <MDBCardBody className='white-text rounded-bottom overflow-hidden' style={c}>
                            <MDBCardTitle style={pink}>Догляд за волоссям</MDBCardTitle>
                            <hr className='hr-black' />
                            <MDBCardText className='black-text' >
                                Захист волосся при фарбуванні зробить Оlaplex, лінія Joico відновить пошкоджені локони, вирівняють волосся Homna Tokio та  Felps Brasil, біозавивку зробить Mossa
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md='12' sm='12' lg='4' className='col-12 mb-5'>
                    <MDBCard className='m-auto w-100 justify-content-center'>
                        <MDBCardImage
                            src={require('../../img/salon/15.JPG')}
                            hover
                            waves
                            alt='MDBCard image cap'
                            className="card-image-top w-100"
                        />
                        <MDBCardBody className='white-text rounded-bottom' style={c}>
                            <MDBCardTitle style={pink}>Фарбування</MDBCardTitle>
                            <hr className='hr-black' />
                            <MDBCardText className='black-text' >
                                Натуральні відтінки представлені у професійній лінії фарб Davines. Підсилює блиск і глибину кольору натуральних або пофарбованих пасом.
                            </MDBCardText >
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md='12' sm='12' lg='4' className='col-12 mb-5'>
                    <MDBCard className='m-auto w-100 justify-content-center'>
                        <MDBCardImage
                            top
                            src={require('../../img/works/1.jpg')}
                            overlay='white-slight'
                            hover
                            waves
                            alt='MDBCard image cap'
                            className="card-image-top"
                        />
                        <MDBCardBody className='white-text rounded-bottom' style={c}>
                            <MDBCardTitle style={pink}>Лаки та шеллаки</MDBCardTitle>
                            <hr className='hr-black' />
                            <MDBCardText className='black-text' >
                                Якісні шеллаки та лаки від Komilfo, Kodi та Luxio подарують бездоганний манікюр та педикюр. Безліч відтінків можливо підібрати саме під ваш образ.
                            </MDBCardText >
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
          </div>
      </div>
    )
}

export default Cards;
