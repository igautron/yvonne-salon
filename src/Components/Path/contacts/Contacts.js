import React from 'react'
import './Contacts.css'
import {MDBIcon} from 'mdbreact';


class Contacts extends React.Component {
    render() {
        return (
            <div>
                    <div className="container pt-0 h-100">
                        <h1 className='h1-responsive py-5 m-0 font-weight-bold text-center'>Контакти</h1>
                                    <div className="text-center h-100 black-text p-3">
                                        <ul className="text-lg-left list-unstyled ml-0">
                                            <li>
                                                <p className="text-center contact-text">
                                                    <MDBIcon icon="map-marker-alt" className="pr-3"/>
                                                    вулиця Данченко 32, м. Київ
                                                    (вхід з двору)
                                                </p>
                                            </li>
                                            <li>
                                                <p className="text-center contact-text">
                                                    <MDBIcon icon="clock" className="pr-3"/>
                                                    Графік роботи: 09:00-20:00 (без вихідних)
                                                </p>
                                            </li>
                                            <li>
                                                <p className="text-center contact-text">
                                                    <MDBIcon icon="phone" className="pr-3"/>
                                                    +38 073 500 55 33
                                                </p>
                                            </li>
                                            <li>
                                                <p className="text-center contact-text">
                                                    <MDBIcon icon="phone" className="pr-3"/>
                                                    +38 098 500 55 33
                                                </p>
                                            </li>
                                            <li className='text-center justify-content-center'>
                                                <a href='https://www.instagram.com/yvonne__salon/?r=nametag' className="contact-text text-center justify-content-center">
                                                    <MDBIcon fab icon="instagram" className='pr-3'/>
                                                      yvonne__salon
                                                </a>
                                            </li>
                                        </ul>
                                        <hr className="hr-light my-2 mt-0 mb-0 p-0"/>
                                    </div>
                                    <div className='p-3'>
                                        <div
                                            id="map-container"
                                            className="rounded z-depth-1-half map-container mb-5"
                                            style={{height: '400px'}}
                                        >
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2537.969770113671!2d30.438142415733022!3d50.49752037948187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cd75cbff97fd%3A0x8ac0784da6eb1d7d!2z0LLRg9C7LiDQodC10YDQs9GW0Y8g0JTQsNC90YfQtdC90LrQsCwgMzIsINCa0LjRl9CyLCAwMjAwMA!5e0!3m2!1suk!2sua!4v1607354523859!5m2!1suk!2sua"
                                                width="600"
                                                height="450"
                                                frameBorder="0"
                                                allowFullScreen=""
                                                aria-hidden="false"
                                                tabIndex="0"
                                                className="w-100 h-100 border-0 z-depth-1">
                                            </iframe>
                                        </div>
                                    </div>
                          </div>
            </div>
        );
    }
}

export default Contacts;