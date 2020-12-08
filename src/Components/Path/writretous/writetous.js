import React from 'react';

import {  MDBRow,  MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";

import './Writetous.css'

class Contactform extends React.Component {

    state = {
        form: {
            name: 'Lena',
            email: 'example@gmail.com',
            phone: '234234234',
            company: 'Yvonne',
            message: 'How can get ypur product?',
            'send-telegram':1,
        },
        alert: ''
    }

    initial_state = {
        form: {
            name: '',
            email: '',
            phone: '',
            company: '',
            message: '',
            'send-telegram':1,
        },
        alert: ''
    }

    changeInputHandler = (event) => {
        let formData = {...this.state.form}
        formData[event.target.name] = event.target.value
        this.setState({form: formData})
    }

    formSubmit = () => {

        if (this.state.form.name.trim() === '') {
            this.setState({alert: 'Введите имя!'})
            return false
        }
        if (this.state.form.email.trim() === '') {
            this.setState({alert: 'Введите email!'})
            return false
        }

        let url = 'http://yvonne.com.ua/telegram/'
        fetch(url, {
            method: 'POST', // или 'PUT'
            body: new URLSearchParams(this.state.form).toString(), // данные могут быть 'строкой' или {объектом}!
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            if (data.ok) {
                this.setState({form:this.initial_state.form, alert: 'Сообщение отправлено!'})
            }
        });
    }

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
                                        <p style={{color:'red'}}>{this.state.alert}</p>
                                        <div className='d-inline-flex w-100'>
                                            <div className='w-50 h-100 col-contact px-3'>
                                                <div className=" mb-0 mt-2">
                                                    <MDBInput
                                                        type="text"
                                                        id="form-contact-name"
                                                        label="Ваше ім'я"
                                                        name="name"
                                                        value={this.state.form.name}
                                                        onChange={this.changeInputHandler}
                                                    />
                                                </div>
                                            </div>
                                            <div className='w-50 h-100 col-contact px-3'>
                                                <div className="md-form mb-0 mt-2 ">
                                                    <MDBInput
                                                        type="text"
                                                        id="form-contact-email"
                                                        label="Email"
                                                        name="email"
                                                        value={this.state.form.email}
                                                        onChange={this.changeInputHandler}
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
                                                        name="phone"
                                                        value={this.state.form.phone}
                                                        onChange={this.changeInputHandler}
                                                    />
                                                </div>
                                            </div>
                                            <div className='w-50 h-100 col-contact px-3'>
                                                <div className="md-form mb-0 mt-2 ">
                                                    <MDBInput
                                                        type="text"
                                                        id="form-contact-company"
                                                        label="Ваша компанія"
                                                        name="company"
                                                        value={this.state.form.company}
                                                        onChange={this.changeInputHandler}
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
                                                        name="message"
                                                        value={this.state.form.message}
                                                        onChange={this.changeInputHandler}
                                                    />
                                                    <MDBBtn onClick={this.formSubmit} rounded color="pink" className='mb-3 justify-content-center m-auto d-block'>
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