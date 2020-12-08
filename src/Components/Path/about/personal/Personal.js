import React from 'react'

import {MDBRow, MDBCol, MDBMask, MDBView} from 'mdbreact';


class Personal extends React.Component {

    render() {
        return (
            <div>
                <div className="text-center mb-5">
                    <h2 className="h1-responsive font-weight-bold text-center my-5 pt-5">
                        Майстри салону
                    </h2>
                    <div className='w-100 container d-block position-relative'>
                        <MDBRow>
                            <MDBCol lg="6" xl="6" className=''>
                                <MDBView hover className="rounded z-depth-0 border-0 mb-lg-0 h-100">
                                    <img
                                        className="img-fluid"
                                        src={require('./../../../../img/45.jpg')}
                                        alt=""
                                    />
                                    <a href="#!">
                                        <MDBMask overlay="white-slight" />
                                    </a>
                                </MDBView>
                            </MDBCol>
                            <MDBCol lg="6" xl="6">
                                <p className="dark-grey-text text-left font-weight-normal pt-3">
                                    Ваш чудовий манікюр та неабиякої краси зачіска, де волосся щойно пофарбоване італійською фарбою скаже про Вас усе без жодного слова. Якщо рука майстра доторкнеться вдало до Вашого образу, - Ви стовідсотково будете бездоганно виглядати на Вашому майбутньому побаченні або іншому заході.
                                    Майстри нашого салону пройшли неабияку підготовку та являються професійними майстрами своєї справи. Безліч виконаних робіт та неабиякий досвід дають можливість за декілька секунд з'ясувати Ваш майбутній образ, чи то манікюр, чи то педікюр, чи то зачіска.<br/>

                                    <i className="fa fa-check pr-3 green-text" aria-hidden="true"></i>Майстер манікюрного залу Наталья дасть найкращі поради у створенні зачіски або нового образу - стрижки.<br/>
                                    <i className="fa fa-check pr-3 green-text" aria-hidden="true"></i>Майстер перукарського залу Вікторія нагадає найостанніші тренди кольорів та відтінків шеллаків, також наймодерновіші техніки манікюру та педикюру.<br/>
                                    <i className="fa fa-check pr-3 green-text" aria-hidden="true"></i> Майстер перукарського залу Ілля завжди знає що саме потрібно тобі сьогодні та як освіжити минулу зачіску.<br/>
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </div>
                </div>
            </div>
        )
    }
}

export default Personal;