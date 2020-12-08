import React from 'react'
import './AboutSalon.css'
import {  MDBRow, MDBCol, MDBMask, MDBIcon, MDBView, MDBBtn } from 'mdbreact';
import {Link} from 'react-router-dom'

class AboutSalon extends React.Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="m-auto px-3 pb-5">
                        <h1 className='h1-responsive py-5 m-0 font-weight-bold text-center'>Салон краси та магазин Iвон</h1>
                        <p className='beauty-descropt text-center mb-4 mb-md-5'>Наш заклад краси знаходиться у спальному районі міста та має вишуканий стиль. Головними перевагами нашого салону є якість, новітність та адекватні ціни. Ми спеціалізуємося на послугах перукарського, нігтьового залу та інших послугах краси. Якщо ми говоримо про перукарські послуги, то ми обіцяємо реалізувати Ваші найкращі побажання та запропонуємо власні модні рішення – вишукану зачіску, модну стрижку та безпечне фарбування. За волоссям доглянуть косметичні засоби італійських брендів.  Манікюрний та педикюрний зал пропонує першокласний манікюр та перикюр із використанням обрізноI та апаратної технік.</p>
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
                            </MDBView>
                        </MDBRow>
               </div>
               <div className='z-index-0 border-0 mb-5'>
                   <h1 className='h1-responsive py-5 m-0 font-weight-bold text-center'>У нас найкращий сервіс</h1>
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
                            Ми створимо для Вас бездоганну зачіску на будь-який захід, чи то на вихід, чи то на кожен день та зробимо безпечне та модне фарбування Італійськими фарбами.
                            Ваші нігтики будуть виглядати дбайливо доглянутими, наші майстри знають, яка техніка підійде саме для Вас. Безлічь кольорів та відтінків лаків та шелаків та засобів для різних
                            типів волосся.
                        </p>
                        <Link to='./items'>
                           <MDBBtn color="pink" size="md" className="waves-light mb-1">
                                Детальніше
                            </MDBBtn>
                        </Link>
                    </MDBCol>
                </MDBRow>
                <hr className="my-4" />
                <MDBRow>
                    <MDBCol lg="5">
                        <MDBView className="rounded  h-100 z-depth-2 mb-lg-0" hover waves>
                            <img
                                className="img-fluid w-responsive m-0 w-100 p-3 h-100"
                                src={require('../../../img/salon/IMG_5745.JPG')}
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
                                <MDBIcon icon="image" className="pr-2" />
                                Персонал
                            </h6>
                        </a>
                        <h3 className="font-weight-bold mb-3 p-0">
                            <strong>Майстри салону</strong>
                        </h3>
                        <p>
                         Майстри салону створюють неперевершені образи опираючись на власний досвід та акцентуючи увагу на сучасних
                         зачісках та стрижках, орієнтуючись на довготривалу якість та бережність вашого волосся,
                         піклуючись про кожного клієнта. Завжди орієнтуэмось на індивідуальний підхід. Охайність та
                         пристрасть - ось наш козирь. Ми дбаємо про кожну Вашу подумку, виконаємо усі Ваші побажання та запропонуємо своє бачення на Ваш образ.
                        </p>
                        <Link to='./personal'>
                            <MDBBtn
                                color="pink"
                                size="md"
                                className="mb-lg-0 mb-1 waves-light"
                            >
                            Детальніше
                            </MDBBtn>
                         </Link>
                    </MDBCol>
                </MDBRow>
                <hr className="my-4" />
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
                            Краса волосся - це передусім безпечний та якісний догляд. Створити бездоганний образ - зачіску або укладку допоможуть італійські
                          засоби догляду за волоссям. У нашому магазині Ви можете придбати усі сучасні брендові засоби догляду. Ви будете захоплені Вашим новим довговічним образом.
                        </p>
                        <Link to='cosmetics'>
                            <MDBBtn
                                color="pink"
                                size="md"
                                className="mb-lg-0 mb-1 waves-light"
                            >
                            Детальніше
                            </MDBBtn>
                        </Link>
                    </MDBCol>
                   </MDBRow>
                </div>
                </div>
            </div>
        )
    }
}

export default AboutSalon;

















