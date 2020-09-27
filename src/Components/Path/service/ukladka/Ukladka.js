import React from 'react'
import './Service.css'
import { MDBRow, MDBCol, MDBCard, MDBIcon, MDBMask } from 'mdbreact';

const Ukladka = () => {
    return (
        <div className='container'>
            <h2 className="h1-responsive font-weight-bold text-center my-5">
                Укладка
            </h2>
            <MDBRow>
                <MDBCol lg="3" md="6" className="mb-lg-5 mb-md-4 mb-sm-3">
                    <MDBCard collection className="z-depth-1-half">
                        <div className="view zoom">
                            <img
                                src={require('../../../img/salon/service/zach.jpg')}
                                className="img-fluid w-100"
                                alt=""
                            />

                            <div className="dark card-img-overlay h-50 text-center h4-responsive p-0 m-auto ">
                                <MDBMask className="flex-center" overlay="pink-light">
                                    <a href="#!">
                                        <p className="black-text opacity-100 pt-5 pb-5 pl-0 pr-0 font-weight-bold">
                                            Укладка<MDBIcon icon="angle-right" className="pl-3 fa-w-1"/>
                                        </p>
                                    </a>
                                </MDBMask>
                            </div>
                        </div>
                    </MDBCard>
                </MDBCol>
                <MDBCol lg="3" md="6" className="mb-lg-5 mb-md-4 mb-sm-3">
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
        </div>
    );
}

export default Ukladka;