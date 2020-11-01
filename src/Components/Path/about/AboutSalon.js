import React from 'react'
import './AboutSalon.css'
import {BrowserRouter as Router} from 'react-router-dom';
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from 'mdbreact';
import {Link} from 'react-router-dom'

class AboutSalon extends React.Component {

    render() {
        return (
            <div>
                <MDBCard className=" container mt-5 pb-3 border-0 pb-lg-0 pb-sm-0 pb-md-0 pl-2 mb-5">
                    <div className="mb-0 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5 m-auto pt-0">
                        <h2 className="h1-responsive font-weight-bold text-center my-5">
                            Про салон
                        </h2>
                        <MDBRow className='mb-sm-0 mb-lg-0 mb-xl-0  m-0 w-100 w-responsive'>
                            <MDBView
                                className="rounded z-depth-2 salon-image h-100 w-100 overflow-hidden w-responsive"
                                hover waves>
                                <img
                                    className="img-fluid h-100 w-responsive"
                                    style={{width: '100%'}}
                                    src={require('./../../../img/aboutsalonimg.jpg')}
                                    alt=""
                                />
                                <div className="card-img-overlay m-auto justify-content-center">
                                    <MDBMask overlay="pink-light">
                                        <a href="#!" className='pt-xl-5'>
                                            <p className='w-responsive mx-auto text-center h1-responsive white-text pt-5 hover-text pl-4 pr-4 pl-sm-1 pr-sm-1 mt-xl-4 mt-lg-4'>
                                                <span className='yellow-text'>САЛОН КРАСИ</span><span
                                                className='pink-text'><span className='white-text'> ТА</span> МАГАЗИН ІВОН</span>
                                                <br/> знаходиться у спальному районі Києва по вулиці Данченко 32 та має
                                                головні переваги, такі, як вишуканий та приємний інтер'єр, висока якість
                                                послуг та приваблиці ціни.
                                            </p>
                                        </a>
                                    </MDBMask>
                                </div>
                            </MDBView>
                        </MDBRow>
                    </div>
                </MDBCard>
                <MDBCard  className='container z-index-0 border-0'>
                  <MDBRow>
                    <MDBCol lg="5" >
                        <MDBView className="rounded  h-100 z-depth-2 mb-lg-0" hover waves>
                            <img
                                className="img-fluid h1-responsive m-0 p-3"
                                src={require('../../../img/services.jpg')}
                                alt=""
                            />
                            <a href="#!">
                                <MDBMask overlay="white-slight" />
                            </a>
                        </MDBView>
                    </MDBCol>
                    <MDBCol lg="7">
                        <a href="#!" className="pink-text">
                            <h6 className="font-weight-bold mt-5">
                                <MDBIcon icon="cut" className="pr-2"/>
                                Послуги
                            </h6>
                        </a>
                        <h3 className="font-weight-bold mb-3 p-0">
                            <strong>Послуги салону</strong>
                        </h3>
                        <p>
                            Бездоганні стрижки, зачіски, фарбування волосся - ось що складає перукарський
                            зал. Манікюрний зал пропонує послуги манікюру та педікюру, прибере Ваші нігтики
                            покриття лаком та шеллаком. Безлічь кольорів та відтінків та засоби для різних
                            типів волосся.
                        </p>
                        <Link to='./items'>
                           <MDBBtn color="pink" size="md" className="waves-light ">
                                Детальніше
                            </MDBBtn>
                        </Link>
                    </MDBCol>
                </MDBRow>
                <hr className="my-5" />
                <MDBRow>
                    <MDBCol lg="7">
                        <a href="#!" className="pink-text">
                            <h6 className="font-weight-bold mb-3">
                                <MDBIcon icon="image" className="pr-2" />
                                Персонал
                            </h6>
                        </a>
                        <h3 className="font-weight-bold mb-3 p-0">
                            <strong>Майстри салону</strong>
                        </h3>
                        <p>
                         Майстри салону із досвідом роботи більше 10 років акцентують увагу на сучасних
                         зачісках та стрижках, виконують роботу орієнтуючись на довготривалу якість,
                         піклуючись про кожного клієнта. Мають індивідуальний підхід. Охайність та
                         пристрасть - ось наш козирь.
                        </p>
                        <Link to='./personal'>
                            <MDBBtn
                                color="pink"
                                size="md"
                                className="mb-lg-0 mb-4 waves-light"
                            >
                            Детальніше
                            </MDBBtn>
                         </Link>
                    </MDBCol>
                    <MDBCol lg="5">
                        <MDBView className="rounded  h-100 z-depth-2 mb-lg-0" hover waves>
                            <img
                                className="img-fluid w-responsive m-0 w-100 p-3"
                                src={require('../../../img/salon/IMG_5745.JPG')}
                                alt=""
                            />
                            <a href="#!">
                                <MDBMask overlay="white-slight" />
                            </a>
                        </MDBView>
                    </MDBCol>
                </MDBRow>
                <hr className="my-5" />
                <MDBRow>
                    <MDBCol lg="5" className='mb-5'>
                        <MDBView className="rounded z-depth-2 h-100 mb-lg-0" hover waves>
                            <img
                                className="img-fluid h1-responsive m-0 w-100 h-auto p-3 pb-0"
                                src={require('../../../img/salon/3.JPG')}
                                alt=""
                                style={{height: '19rem', width: '100%', overflow: 'hidden'}}
                            />
                            <a href="#!">
                                <MDBMask overlay="white-slight" />
                            </a>
                        </MDBView>
                    </MDBCol>
                    <MDBCol lg="7">
                        <a href="#!" className="pink-text">
                            <h6 className="font-weight-bold mb-3">
                                <MDBIcon icon="suitcase" className="pr-2" />
                                Косметика
                            </h6>
                        </a>
                        <h3 className="font-weight-bold mb-3 p-0">
                            <strong>Догляд за волоссям</strong>
                        </h3>
                        <p>
                            Створити бездоганний стиль - чи то зачіску, чи то укладку допоможуть італійські
                          засоби догляду за волоссям. Краса волосся - це передусім доглянуте волосся та
                          оживлені локони, секрети краси волосся допоможе досвідчений майстер салону
                          краси.
                        </p>
                        <Link to='cosmetics'>
                            <MDBBtn
                                color="pink"
                                size="md"
                                className="mb-lg-0 mb-4 waves-light"
                            >
                            Детальніше
                            </MDBBtn>
                        </Link>
                    </MDBCol>
                   </MDBRow>
                </MDBCard>
            </div>
        )
    }
}

export default AboutSalon;

















