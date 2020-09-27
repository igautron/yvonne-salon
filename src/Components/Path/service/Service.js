import React from 'react'
import './Service.css'
import { MDBRow, MDBCol, MDBCard, MDBIcon, MDBMask } from 'mdbreact';


const Service = () => {
    return (
        <div className='container'>
            <h2 className="h2-responsive font-weight-bold text-center p-5 galery-text">
                Наші послуги
            </h2>
            <h4 className="grey-text text-center h4-responsive mx-auto mb-5 text-media">
                Наші майстри створюють неперевершений образ для жінок, чоловіків та дітей. Нові тренди та широкий спектр послуг робить ваш салон одним із успішних бізнес-моделей індустрії краси.
            </h4>
            <MDBRow>
                <MDBCol lg="3" md="6" className="mb-lg-5 mb-md-4 mb-sm-3 service-col">
                    <MDBCard collection className="z-depth-1-half">
                        <div className="view zoom">
                            <img
                                src={require('../../../img/salon/service/zach.jpg')}
                                className="img-fluid w-100"
                                alt=""
                            />

                            <div className="dark card-img-overlay h-50 text-center h4-responsive p-0 m-auto ">
                                <MDBMask className="flex-center" overlay="pink-light">
                                <a href="">
                                    <p className="black-text opacity-100 pt-5 pb-5 pl-0 pr-0 font-weight-bold">
                                        Укладка<MDBIcon icon="angle-right" className="pl-3 fa-w-1"/>
                                    </p>
                                </a>
                                </MDBMask>
                            </div>
                        </div>
                    </MDBCard>
                </MDBCol>
                <MDBCol lg="3" md="6" className="mb-lg-5 mb-md-4 mb-sm-3 service-col">
                    <MDBCard collection className="z-depth-1-half">
                        <div className="view zoom">
                            <img
                                src={require('../../../img/salon/service/strizki.jpg')}
                                className="img-fluid w-100"
                                alt=""
                            />
                            <div className="dark card-img-overlay h-50 text-center h4-responsive p-0 m-auto">
                                <MDBMask className="flex-center" overlay="pink-light">
                                <a href="#!">
                                    <p className="black-text opacity-100 pt-5 pb-5 pl-0 pr-0 font-weight-bold">
                                        Стрижки <MDBIcon icon="angle-right" />
                                    </p>
                                </a>
                                </MDBMask>
                            </div>
                        </div>
                    </MDBCard>
                </MDBCol>
                <MDBCol lg="3" md="6" className="mb-lg-5 mb-md-4 mb-sm-3 service-col">
                    <MDBCard collection className="z-depth-1-half">
                        <div className="view zoom">
                            <img
                                src={require('../../../img/salon/service/zatch2.jpg')}
                                className="img-fluid w-100"
                                alt=""
                            />
                            <div className="dark card-img-overlay h-50 text-center h4-responsive p-0 m-auto">
                                <MDBMask className="flex-center" overlay="pink-light">
                                <a href="#!">
                                    <p className="black-text opacity-100 pt-5 pb-5 pl-0 pr-0 font-weight-bold">
                                        Зачіски <MDBIcon icon="angle-right" />
                                    </p>
                                </a>
                                </MDBMask>
                            </div>
                        </div>
                    </MDBCard>
                </MDBCol>
                <MDBCol lg="3" md="6" className="mb-lg-5 mb-md-4 mb-sm-3 service-col">
                    <MDBCard collection className="z-depth-1-half">
                        <div className="view zoom">
                            <img
                                src={require('../../../img/salon/service/pletinia.jpg')}
                                className="img-fluid w-100"
                                alt=""
                            />
                            <div className="dark card-img-overlay h-50 text-center h4-responsive p-0 m-auto">
                                <MDBMask className="flex-center" overlay="pink-light">
                                <a href="#!">
                                    <p className="black-text opacity-100 pt-5 pb-5 pl-0 pr-0 font-weight-bold">
                                        Плетіння <MDBIcon icon="angle-right" />
                                    </p>
                                </a>
                                </MDBMask>
                            </div>
                        </div>
                    </MDBCard>
                </MDBCol>
                <MDBCol lg="3" md="6" className="mb-lg-5 mb-md-4 mb-sm-3 service-col">
                    <MDBCard collection className="z-depth-1-half">
                        <div className="view zoom">
                            <img
                                src={require('../../../img/salon/service/biozavivka.jpg')}
                                className="img-fluid w-100"
                                alt=""
                            />
                            <div className="dark card-img-overlay h-50 text-center h4-responsive p-0 m-auto">
                                <MDBMask className="flex-center" overlay="pink-light">
                                <a href="#!">
                                    <p className="black-text opacity-100 pt-5 pb-5 pl-0 pr-0 font-weight-bold">
                                        Завивка волосся<MDBIcon icon="angle-right" />
                                    </p>
                                </a>
                                </MDBMask>
                            </div>
                        </div>
                    </MDBCard>
                </MDBCol>
                <MDBCol lg="3" md="6" className="mb-lg-5 mb-md-4 mb-sm-3 service-col">
                    <MDBCard collection className="z-depth-1-half">
                        <div className="view zoom">
                            <img
                                src={require('../../../img/salon/service/farb.jpg')}
                                className="img-fluid w-100"
                                alt=""
                            />
                            <div className="stripe dark card-img-overlay h-50 text-center h4-responsive p-0 m-auto">
                                <MDBMask className="flex-center" overlay="pink-light">
                                <a href="#!">
                                    <p className="black-text opacity-100 pt-5 pb-5 pl-0 pr-0 font-weight-bold">
                                        Фарбування <MDBIcon icon="angle-right" />
                                    </p>
                                </a>
                                </MDBMask>
                            </div>
                        </div>
                    </MDBCard>
                </MDBCol>
                <MDBCol lg="3" md="6" className="mb-lg-5 mb-md-4 mb-sm-3 service-col">
                    <MDBCard collection className="z-depth-1-half">
                        <div className="view zoom">
                            <img
                                src={require('../../../img/salon/service/koloruvania.jpg')}
                                className="img-fluid w-100"
                                alt=""
                            />
                            <div className="dark card-img-overlay h-50 text-center h4-responsive p-0 m-auto">
                                <MDBMask className="flex-center" overlay="pink-light">
                                <a href="#!">
                                    <p className="black-text opacity-100 pt-5 pb-5 pl-0 pr-0 font-weight-bold">
                                        Колорування <MDBIcon icon="angle-right" />
                                    </p>
                                </a>
                                </MDBMask>
                            </div>
                        </div>
                    </MDBCard>
                </MDBCol>
                <MDBCol lg="3" md="6" className="mb-lg-5 mb-md-4 mb-sm-3 service-col">
                    <MDBCard collection className="z-depth-1-half">
                        <div className="view zoom">
                            <img
                                src={require('../../../img/salon/service/laminuvania.png')}
                                className="img-fluid w-100"
                                alt=""
                            />
                            <div className="dark card-img-overlay h-50 text-center h4-responsive p-0 m-auto">
                                <MDBMask className="flex-center" overlay="pink-light">
                                <a href="#!">
                                    <p className="black-text opacity-100 pt-5 pb-5 pl-0 pr-0 font-weight-bold">
                                        Ламінування волосся<MDBIcon icon="angle-right" />
                                    </p>
                                </a>
                                </MDBMask>
                            </div>
                        </div>
                    </MDBCard>
                </MDBCol>
                <MDBCol lg="3" md="6" className="mb-lg-5 mb-md-4 mb-sm-3 service-col">
                    <MDBCard collection className="z-depth-1-half">
                        <div className="view zoom">
                            <img
                                src={require('../../../img/salon/service/farbuvania.jpg')}
                                className="img-fluid w-100"
                                alt=""
                            />
                            <div className="dark card-img-overlay h-50 text-center h4-responsive p-0 m-auto">
                                <MDBMask className="flex-center" overlay="pink-light">
                                <a href="#!">
                                    <p className="black-text opacity-100 pt-5 pb-5 pl-0 pr-0 font-weight-bold">
                                        Комплексний догляд за волоссям<MDBIcon icon="angle-right" />
                                    </p>
                                </a>
                                </MDBMask>
                            </div>
                        </div>
                    </MDBCard>
                </MDBCol>
                <MDBCol lg="3" md="6" className="mb-lg-5 mb-md-4 mb-sm-3 service-col">
                    <MDBCard collection className="z-depth-1-half">
                        <div className="view zoom">
                            <img
                                src={require('../../../img/salon/service/3.jpg')}
                                className="img-fluid w-100"
                                alt=""
                            />
                            <div className="dark card-img-overlay h-50 text-center h4-responsive p-0 m-auto">
                                <MDBMask className="flex-center" overlay="pink-light">
                                <a href="#!">
                                    <p className="black-text opacity-100 pt-5 pb-5 pl-0 pr-0 font-weight-bold">
                                        Чоловічі стрижки <MDBIcon icon="angle-right" />
                                    </p>
                                </a>
                                </MDBMask>
                            </div>
                        </div>
                    </MDBCard>
                </MDBCol>
                <MDBCol lg="3" md="6" className="mb-lg-5 mb-md-4 mb-sm-3 service-col">
                    <MDBCard collection className="z-depth-1-half">
                        <div className="view zoom">
                            <img
                                src={require('../../../img/salon/service/child.jpg')}
                                className="img-fluid w-100"
                                alt=""
                            />
                            <div className="dark card-img-overlay h-50 text-center h4-responsive p-0 m-auto">
                                <MDBMask className="flex-center" overlay="pink-light">
                                <a href="#!">
                                    <p className="black-text opacity-100 pt-5 pb-5 pl-0 pr-0 font-weight-bold">
                                        Дитячі стрижки <MDBIcon icon="angle-right" />
                                    </p>
                                </a>
                                </MDBMask>
                            </div>
                        </div>
                    </MDBCard>
                </MDBCol>
                <MDBCol lg="3" md="6" className="mb-lg-5 mb-md-4 mb-sm-3 service-col">
                    <MDBCard collection className="z-depth-1-half">
                        <div className="view zoom">
                            <img
                                src={require('../../../img/salon/service/manikureobreznoi.jpg')}
                                className="img-fluid w-100"
                                alt=""
                            />
                            <div className="dark card-img-overlay h-50 text-center h4-responsive p-0 m-auto">
                                <MDBMask className="flex-center" overlay="pink-light">
                                <a href="#!">
                                    <p className="black-text opacity-100 pt-5 pb-5 pl-0 pr-0 font-weight-bold">
                                        Манікюр класичний <MDBIcon icon="angle-right" />
                                    </p>
                                </a>
                                </MDBMask>
                            </div>
                        </div>
                    </MDBCard>
                </MDBCol>
                <MDBCol lg="3" md="6" className="mb-lg-5 mb-md-4 mb-sm-3 service-col">
                    <MDBCard collection className="z-depth-1-half">
                        <div className="view zoom">
                            <img
                                src={require('../../../img/salon/service/manikmechan.jpg')}
                                className="img-fluid w-100"
                                alt=""
                            />
                            <div className="dark card-img-overlay h-50 text-center h4-responsive p-0 m-auto">
                                <MDBMask className="flex-center" overlay="pink-light">
                                <a href="#!">
                                    <p className="black-text opacity-100 pt-5 pb-5 pl-0 pr-0 font-weight-bold">
                                        Манікюр механічний <MDBIcon icon="angle-right" />
                                    </p>
                                </a>
                                </MDBMask>
                            </div>
                        </div>
                    </MDBCard>
                </MDBCol>
                <MDBCol lg="3" md="6" className="mb-lg-5 mb-md-4 mb-sm-3 service-col">
                    <MDBCard collection className="z-depth-1-half">
                        <div className="view zoom">
                            <img
                                src={require('../../../img/salon/service/pedicureobr.jpg')}
                                className="img-fluid w-100"
                                alt=""
                            />
                            <div className="dark card-img-overlay h-50 text-center h4-responsive p-0 m-auto ">
                                <MDBMask className="flex-center" overlay="pink-light">
                                <a href="#!">
                                    <p className="black-text opacity-100 pt-5 pb-5 pl-0 pr-0 font-weight-bold">
                                         Педикюр класичний<MDBIcon icon="angle-right" />
                                    </p>
                                </a>
                                </MDBMask>
                            </div>
                        </div>
                    </MDBCard>
                </MDBCol>
                <MDBCol lg="3" md="6" className="mb-lg-5 mb-md-4 mb-sm-3 service-col">
                    <MDBCard collection className="z-depth-1-half">
                        <div className="view zoom">
                            <img
                                src={require('../../../img/salon/service/mehanicheskii.jpg')}
                                className="img-fluid w-100"
                                alt=""
                            />
                            <div className="dark card-img-overlay h-50 text-center h4-responsive p-0 m-auto ">
                                <MDBMask className="flex-center" overlay="pink-light">
                                <a href="#!">
                                    <p className="black-text opacity-100 pt-5 pb-5 pl-0 pr-0 font-weight-bold">
                                        Педикюр механічний<MDBIcon icon="angle-right" />
                                    </p>
                                </a>
                                </MDBMask>
                            </div>
                        </div>
                    </MDBCard>
                </MDBCol>
                <MDBCol lg="3" md="6" className="mb-lg-5 mb-md-4 mb-sm-5 service-col">
                    <MDBCard collection className="z-depth-1-half">
                        <div className="view zoom">
                            <img
                                src={require('../../../img/salon/service/lack.jpg')}
                                className="img-fluid w-100"
                                alt=""
                            />
                            <div className="dark card-img-overlay h-50 text-center h4-responsive p-0 m-auto ">
                                <MDBMask className="flex-center" overlay="pink-light">
                                <a href="#!">
                                    <p className="black-text opacity-100 pt-5 pb-5 pl-0 pr-0 font-weight-bold">
                                        Покриття лаком<MDBIcon icon="angle-right" />
                                    </p>
                                </a>
                                </MDBMask>
                            </div>
                        </div>
                    </MDBCard>
                </MDBCol>
                <MDBCol lg="3" md="6" className="mb-lg-5 mb-md-4 mb-sm-5 service-col">
                    <MDBCard collection className="z-depth-1-half">
                        <div className="view zoom">
                            <img
                                src={require('../../../img/salon/service/gellack.jpg')}
                                className="img-fluid"
                                alt=""
                            />
                            <div className="dark card-img-overlay h-50 text-center h4-responsive p-0 m-auto ">
                                <MDBMask className="flex-center" overlay="pink-light">
                                <a href="#!">
                                    <p className="black-text opacity-100 pt-5 pb-5 pl-0 pr-0 font-weight-bold">
                                        Покриття гель-лаком<MDBIcon icon="angle-right" />
                                    </p>
                                </a>
                                </MDBMask>
                            </div>
                        </div>
                    </MDBCard>
                </MDBCol>
                <MDBCol lg="3" md="6" className="mb-lg-5 mb-md-4 mb-sm-5 service-col">
                    <MDBCard collection className="z-depth-1-half">
                        <div className="view zoom">
                            <img
                                src={require('../../../img/salon/service/narowuvanie.jpg')}
                                className="img-fluid w-100"
                                alt=""
                            />
                            <div className="dark card-img-overlay h-50 text-center h4-responsive p-0 m-auto">
                                <MDBMask className="flex-center" overlay="pink-light">
                                <a href="#!">
                                    <p className="black-text opacity-100 pt-5 pb-5 pl-0 pr-0 font-weight-bold">
                                        Нарощування нігтів<MDBIcon icon="angle-right" />
                                    </p>
                                </a>
                                </MDBMask>
                            </div>
                        </div>
                    </MDBCard>
                </MDBCol>
                <MDBCol lg="3" md="6" className="mb-lg-5 mb-md-4 mb-sm-5 service-col">
                    <MDBCard collection className="z-depth-1-half">
                        <div className="view zoom">
                            <img
                                src={require('../../../img/salon/service/parafinoterapia.jpg')}
                                className="img-fluid w-100"
                                alt=""
                            />
                            <div className="dark card-img-overlay h-50 text-center h4-responsive p-0 m-auto">
                                <MDBMask className="flex-center" overlay="pink-light">
                                <a href="#!">
                                    <p className="black-text opacity-100 pt-5 pb-5 pl-0 pr-0 font-weight-bold">
                                        Парафінотерапія<MDBIcon icon="angle-right" />
                                    </p>
                                </a>
                                </MDBMask>
                            </div>
                        </div>
                    </MDBCard>
                </MDBCol>
                <MDBCol lg="3" md="6" className="mb-lg-5 mb-md-4 mb-sm-5 service-col">
                    <MDBCard collection className="z-depth-1-half">
                        <div className="view zoom">
                            <img
                                src={require('../../../img/salon/service/parafinoterapia2.jpg')}
                                className="img-fluid w-100"
                                alt=""
                            />
                            <div className="dark card-img-overlay h-50 text-center h4-responsive p-0 m-auto">
                                <MDBMask className="flex-center" overlay="pink-light">
                                <a href="#!">
                                    <p className="black-text opacity-100 pt-5 pb-5 pl-0 pr-0 font-weight-bold">
                                        Парафінотерапія<MDBIcon icon="angle-right" />
                                    </p>
                                </a>
                                </MDBMask>
                            </div>
                        </div>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </div>
    );
}

export default Service;