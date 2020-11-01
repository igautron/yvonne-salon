import React from 'react'
import './Contacts.css'
import {MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBMask} from 'mdbreact';


class Contacts extends React.Component {
    render() {
        return (
            <div className="  blue-grey">
                <MDBMask overlay="white-strong ">
                    <MDBCard className="contacts-card pt-0">
                        <h1 className='h1-responsive pt-5 pt-sm-5 pt-md-5 pt-lg-5 pt-xl-5 font-weight-bold my-5 pb-0'>Контакти</h1>
                        <MDBMask overlay="white-strong pt-5 pb-5 container">

                            <MDBRow
                                className=" contacts-row m-auto justify-content-center p-0  contacts-row pl-5 pr-5 bg-transparent">
                                <MDBCol className="contacts-col chp-2">
                                    <div
                                        id="map-container"
                                        className="rounded z-depth-1-half map-container"
                                        style={{height: '400px'}}
                                    >
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-73.96694563267306!3d40.751663750099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494"
                                            title="This is a unique title"
                                            width="100%"
                                            height="100%"
                                            frameBorder="0"
                                            style={{border: 0}}
                                        />
                                    </div>
                                </MDBCol>
                                <MDBCol className="info w-responsive chp-1">
                                    <MDBCardBody className="contact text-center h-100 black-text p-0">
                                        <h3 className="pt-4 pb-3 pl-0 pr-0 text-center h2-responsive">Контактна
                                            інформація</h3>
                                        <ul className="text-lg-left list-unstyled ml-0">
                                            <li>
                                                <p className="h5-responsive text-left">
                                                    <MDBIcon icon="map-marker-alt" className="pr-3"/>
                                                    вулиця Данченко 32, м. Київ
                                                    (вхід з двору)
                                                </p>
                                            </li>
                                            <li>
                                                <p className="h5-responsive text-left">
                                                    <MDBIcon icon="phone" className="pr-3"/>
                                                    +38 073 500 55 33
                                                </p>
                                            </li>
                                            <li>
                                                <p className="h5-responsive text-left">
                                                    <MDBIcon icon="phone" className="pr-3"/>
                                                    +38 098 500 55 33
                                                </p>
                                            </li>
                                            <li>
                                                <p className="h5-responsive text-left">
                                                    <MDBIcon icon="clock" className="pr-3"/>
                                                    Графік роботи: 09:00-20:00 (без вихідних)
                                                </p>
                                            </li>
                                            <li>
                                                <a href='https://www.instagram.com/yvonne__salon/?r=nametag' className="h5-responsive text-left">
                                                    <MDBIcon fab icon="instagram" className='pr-3'/>

                                                      yvonne__salon
                                                </a>
                                            </li>
                                        </ul>
                                        <hr className="hr-light my-2 mt-0 mb-0 p-0"/>
                                    </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBMask>
                    </MDBCard>
                </MDBMask>
            </div>
        );
    }
}

export default Contacts;