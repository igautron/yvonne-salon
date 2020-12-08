import React from 'react'
import './Cards.css'

import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol} from 'mdbreact';


const Cards = () => {
    return (
      <div className='cards'>
          <div className='container p-0'>
              <h1 className='h1-responsive py-5 m-0 font-weight-bold text-center'>Наші цілі</h1>
            <MDBRow className="d-flex m-auto align-content-center mb-5 w-100 mx-3 pt-0">
                <MDBCol md='12' sm='12' lg='4' className='col-12 mb-5 h-100'>
                    <MDBCard className='m-auto w-100 justify-content-center'>
                        <MDBCardImage
                            top
                            src={require('../../img/salon/19.JPG')}
                            overlay='white-slight'
                            hover
                            alt='MDBCard image cap'
                            className="card-image-top w-100 h-100"
                        />
                        <MDBCardBody className='white-text rounded-bottom overflow-hidden card-body-block'>
                            <MDBCardTitle className='pink-ic cards-name'>Здорове волосся</MDBCardTitle>
                            <hr className='hr-black' />
                            <MDBCardText className='black-text' >
                                Основними критеріями здорового волосся є постійний правильний догляд за ним, якісні косметичні засоби та здорове харчування. Важливо обрати для себе саме ті косметичні засоби, які підійдуть саме Вам. Індустрія краси завжди піклується про ваш вигляд. Наші спеціалісти дадуть Вам свої рекомендації та зроблять все для того, щоб ваш вигляд був чудовим.
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md='12' sm='12' lg='4' className='col-12 mb-5'>
                    <MDBCard className='m-auto w-100 justify-content-center'>
                        <MDBCardImage
                            src={require('../../img/salon/15.JPG')}
                            hover
                            alt='MDBCard image cap'
                            className="card-image-top w-100 h-100"
                        />
                        <MDBCardBody className='white-text rounded-bottom card-body-block'>
                            <MDBCardTitle className='pink-ic cards-name'>Безпечне фарбування</MDBCardTitle>
                            <hr className='hr-black' />
                            <MDBCardText className='black-text' >
                                 Ми завжди піклуємось про наш вигляд та красу. Краса волосся - це здоров'я. Найбільше шкодить здоров'ю волосся фарбування та освітлення. Важливо правильно змішувати та наносити фарбу. А головне - обирати спеціаліста, який підбере для Вас саме той продукт, який найбільше Вам підходитиме. Важливо обирати фарби без аміаку та агресивних компонентів.
                            </MDBCardText >
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md='12' sm='12' lg='4' className='col-12 mb-5'>
                    <MDBCard className='m-auto w-100 justify-content-center'>
                        <MDBCardImage
                            src={require('../../img/slider/1.jpg')}
                            overlay='white-slight'
                            hover
                            alt='MDBCard image cap'
                            className="card-image-top h-100 w-100"
                        />
                        <MDBCardBody className='white-text rounded-bottom card-body-block'>
                            <MDBCardTitle className='pink-ic cards-name'>Доглянуті пальчики</MDBCardTitle>
                            <hr className='hr-black' />
                            <MDBCardText className='black-text' >
                                Сьогодні індустрія краси переходить на механічний манікюр та педикюр, але також використовує обрізний. Головне доглядати за нігтиками правильно та охайно. Лаки від Komilfo, Kodi та Luxio подарують бездоганний вигляд нігтикам. Саме під ваш образ можливо підібрати безліч відтінків. Любов до себе принесе Вам великі плоди. А найголовніше - це красивий вигляд.
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
