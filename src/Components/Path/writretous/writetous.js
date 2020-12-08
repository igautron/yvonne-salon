import React from 'react';

import {  MDBRow,  MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";

import './Writetous.css'

class Contactform extends React.Component {


    render() {
        return (
            <div>
                <div className='container  justify-content-center m-auto pb-5 contacts'>
                    <div className='price w-100 m-auto justify-content-center'>
                        <h1 className='h1-responsive py-5 m-0 font-weight-bold text-center'>Форма зв'язку</h1>
                        <MDBCard className='p-3 m-auto justify-content-center contact-card'>
                            <MDBRow className='pt-0'>
                                <div lg="12" className='w-100'>
                                    <MDBCardBody className="form">
                                        <p className='text-center contact-text'>
                                            <MDBIcon icon="envelope" className="pr-2 pt-3" />
                                            Напишіть нам:
                                        </p>
                                        <div className='d-inline-flex w-100'>
                                            <div className='w-50 h-100 col-contact px-3'>
                                                <div className=" mb-0 mt-2">
                                                    <MDBInput
                                                        type="text"
                                                        id="form-contact-name"
                                                        label="Ваше ім'я"
                                                    />
                                                </div>
                                            </div>
                                            <div className='w-50 h-100 col-contact px-3'>
                                                <div className="md-form mb-0 mt-2 ">
                                                    <MDBInput
                                                        type="text"
                                                        id="form-contact-email"
                                                        label="Email"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='d-inline-flex w-100'>
                                            <div className='w-50 h-100 col-contact px-3'>
                                                <div className=" mb-0 mt-2">
                                                    <MDBInput
                                                        type="text"
                                                        id="form-contact-phone"
                                                        label="Номер телефону"
                                                    />
                                                </div>
                                            </div>
                                            <div className='w-50 h-100 col-contact px-3'>
                                                <div className="md-form mb-0 mt-2 ">
                                                    <MDBInput
                                                        type="text"
                                                        id="form-contact-company"
                                                        label="Ваша компанія"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='px-3'>
                                            <div md="12">
                                                <div className="md-form mb-0">
                                                    <MDBInput
                                                        type="textarea"
                                                        id="form-contact-message"
                                                        label="Ваше повідомлення"
                                                    />
                                                    <MDBBtn rounded color="pink" className='mb-3 justify-content-center m-auto d-block'>
                                                        Надіслати
                                                    </MDBBtn>
                                                </div>
                                            </div>
                                        </div>
                                    </MDBCardBody>
                                </div>
                            </MDBRow>
                        </MDBCard>
                    </div>
                </div>
            </div>
        )
    }
};

export default Contactform;