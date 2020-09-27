import React from 'react'
import './AboutSalon.css'
import {BrowserRouter as Router} from 'react-router-dom';
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from 'mdbreact';

const AboutSalon = () => {
    return (
    <Router>
        <MDBCard className="container mt-5 pb-3 border-0 pb-lg-0 pb-sm-0 pb-md-0 pl-2">
            <MDBCardBody className="mb-0 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5 m-auto pt-0" >
                <h2 className="h1-responsive font-weight-bold text-center my-5">
                    Про салон
                </h2>
                <MDBRow className='mb-sm-0 mb-lg-0 mb-xl-0  m-0 w-100 w-responsive'>
                            <MDBView className="rounded z-depth-2  salon-image w-100 overflow-hidden w-responsive h-auto" hover waves>
                                <img
                                    className="img-fluid w-responsive"
                                    style={{width: '100%'}}
                                    src={require('./../../../img/aboutsalonimg.jpg')}
                                    alt=""
                                />
                                <div className="card-img-overlay m-auto justify-content-center h-75">
                                    <MDBMask overlay="pink-light">
                                        <a href="#!" className='pt-xl-5'>
                                            <p  className='w-responsive mx-auto text-center h1-responsive white-text pt-5 hover-text pl-4 pr-4 pl-sm-1 pr-sm-1 mt-xl-4 mt-lg-4'>
                                                <span className='yellow-text'>САЛОН КРАСИ</span><span className='pink-text'><span className='white-text'> ТА</span> МАГАЗИН ІВОН</span> <br/> знаходиться у спальному районі Києва по вулиці Данченко 32 та має головні переваги, такі, як вишуканий та приємний інтер'єр, висока якість послуг та приваблиці ціни.
                                            </p>
                                        </a>
                                    </MDBMask>
                                </div>
                            </MDBView>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        <div className="overflow-hidden">
          <img src={require('../../../img/salon/pion11.png')} className='position-absolute img-fluid m-auto justify-content-center w-100 h-auto' />
            <MDBCard className="m-0 pb-0 border-0 pink-bg pl-2">
                <MDBCardBody className="container pt-5">
                    <MDBRow className="m-0">
                        <MDBCol lg="5" className='mb-sm-4 mb-4 mb-lg-0 mb-xl-0'>
                            <MDBView className="rounded z-depth-2 mb-0 h1 w-100 h-auto image-view ">
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
                        <MDBCol lg="7" className="as-block-first">
                            <a href="#!" className="blue-text">
                                <h6 className="font-weight-bold mb-3">
                                    <MDBIcon icon="cut" className="pr-2" />
                                    Послуги
                                </h6>
                            </a>
                            <h3 className="font-weight-bold mb-3 p-0 h3-responsive">
                                <strong>Послуги салону</strong>
                            </h3>
                            <p className="mb-5 float-right h5-responsive aboutsalon-p">
                                Бездоганні стрижки, зачіски, фарбування волосся - ось що складає перукарський зал. Манікюрний зал пропонує послуги манікюру та педікюру, прибере Ваші нігтики покриття лаком та шеллаком. Безлічь кольорів та відтінків та засоби для різних типів волосся.
                            </p>
                            <MDBBtn color="light-blue" size="h1" className="waves-light m-0 btn-as position-absolute">
                                Детально
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                    <hr className="my-5" />
                </MDBCardBody>
                <MDBCardBody className="container">
                    <MDBRow className="m-0">
                        <MDBCol lg="7" className="change-place-2">
                            <a href="#!" className="pink-text">
                                <h6 className="font-weight-bold mb-3">
                                    <MDBIcon icon="male" className="pr-2" />
                                    Персонал
                                </h6>
                            </a>
                            <h3 className="font-weight-bold mb-3 p-0 h3-responsive">
                                <strong>Майстри салону</strong>
                            </h3>
                            <p className="mb-5 h5-responsive aboutsalon-p">
                                Майстри салону із досвідом роботи більше 10 років акцентують увагу на сучасних зачісках та стрижках, виконують роботу орієнтуючись на довготривалу якість, піклуючись про кожного клієнта. Мають індивідуальний підхід. Охайність та пристрасть - ось наш козирь.
                            </p>
                            <MDBBtn
                                color="pink"
                                size="h1"
                                className="mb-lg-0 mb-4 waves-light mt-4 btn-as position-absolute"
                            >
                                Детально
                            </MDBBtn>
                        </MDBCol>
                        <MDBCol lg="5" className="change-place-1 mb-sm-4 mb-4 mb-lg-0 mb-xl-0">
                            <MDBView className="rounded z-depth-2 mb-lg-0 h1-responsive w-100" hover waves>
                                <img
                                    className="img-fluid w-responsive m-0 w-100 p-3"
                                    src={require('../../../img/salon/45.jpg')}
                                    alt=""
                                />
                                <a href="#!">
                                    <MDBMask overlay="white-slight" />
                                </a>
                            </MDBView>
                        </MDBCol>
                    </MDBRow>
                    <hr className="my-5" />
                </MDBCardBody>
            </MDBCard>
        </div>
        <div className="overflow-hidden">
            <img src={require('../../../img/salon/pion11.png')} className='position-absolute img-fluid m-auto justify-content-center w-100 h-auto' />
               <MDBCard className="m-0 pb-5 pt-5 border-0 pink-bg pl-2">
                <MDBCardBody className="container">
                    <MDBRow className="m-0">
                        <MDBCol lg="5" className='mb-sm-4 mb-4 mb-lg-0 mb-xl-0' >
                            <MDBView className="rounded z-depth-2 mb-lg-0 h1 w-100 h-auto " hover waves>
                                <img
                                    className="img-fluid h1 m-0 w-100 h-auto p-3"
                                    src={require('../../../img/salon/9.JPG')}
                                    alt=""
                                    style={{height: '19rem', width: '100%', overflow: 'hidden'}}
                                />
                                <a href="#!">
                                    <MDBMask overlay="white-slight" />
                                </a>
                            </MDBView>
                        </MDBCol>
                        <MDBCol lg="7" className="as-block" >
                            <a href="#!" className="light-blue-text">
                                <h6 className="font-weight-bold mb-3">
                                    <MDBIcon icon="suitcase" className="pr-2" />
                                    Косметика
                                </h6>
                            </a>
                            <h3 className="font-weight-bold mb-3 p-0 h3-responsive ">
                                <strong>Догляд за волоссям</strong>
                            </h3>
                            <p className="mb-4 h5-responsive aboutsalon-p">
                                Створити бездоганний стиль - чи то зачіску, чи то укладку допоможуть італійські засоби догляду за волоссям. Краса волосся - це передусім доглянуте волосся та оживлені локони, секрети краси волосся допоможе досвідчений майстер салону краси.
                            </p>
                            <MDBBtn color="light-blue" size="h1" className="waves-light float-right mt-5 btn-as position-absolute">
                                Детально
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                    <hr className="my-5" />
                </MDBCardBody>
                <MDBCardBody className="container pb-5">
                    <MDBRow className="m-0">
                        <MDBCol lg="7" className="change-place-2 m-0">
                            <a href="#!" className="pink-text">
                                <h6 className="font-weight-bold mb-3">
                                    <MDBIcon icon="male" className="pr-2" />
                                    Нігтьовий сервіс
                                </h6>
                            </a>
                            <h3 className="font-weight-bold mb-3 p-0 h3-responsive">
                                <strong>Манікюр та педикюр</strong>
                            </h3>
                                <p className="h5-responsive aboutsalon-p">
                                    Доглянути за нігтями допоможе майстер манікюру та педикюру,  використовуючи техніки обрізного манікюру та за допомогою машинки. Виробники шеллаків та лаків українського походження Komilfo окрім довготривалого покриття подарує безліч відтінків.
                                </p>
                            <MDBBtn
                                color="pink"
                                size="h1"
                                className="mb-lg-0 mb-4 waves-light mt-5 btn-as position-absolute"
                            >
                                Детально
                            </MDBBtn>
                        </MDBCol>
                        <MDBCol lg="5" className="change-place-1 mb-sm-4 mb-4 mb-lg-0 mb-xl-0">
                            <MDBView className="rounded z-depth-2 mb-lg-0  h1-responsive " hover waves>
                                <img
                                    className="img-fluid h1-responsive m-0 w-100 p-3"
                                    src={require('../../../img/works/123.jpg')}
                                    alt=""
                                    style={{ overflow: 'hidden'}}

                                />
                                <a href="#!">
                                    <MDBMask overlay="white-slight" />
                                </a>
                            </MDBView>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </div>
    </Router>
    )
}

export default AboutSalon;

















