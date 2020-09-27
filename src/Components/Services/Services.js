import React from 'react';
import './Services.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {MDBView} from 'mdbreact';


const pinkColor = {backgroundColor: '#fbd7db'}

const Service = () => {
    return (
        <div>
               <Router>
                   <div>
                       <div className='block text-center mb-2 mb-xl-5 mb-lg-5 mb-md-2 mb-sm-2 justify-content-center m-auto mx-sm-3 mx-3 mx-lg-auto mx-xl-auto mx-md-auto'>
                           <h1 className='h1-responsive pt-5 pt-sm-5 pt-md-5 pt-lg-5 pt-xl-5'>Актуально зараз</h1>
                           <div className='w-100 mx-lg-auto mx-xl-auto mx-md-auto mb-0'>
                               <div className='container d-flex m-auto flex-wrap justify-content-center px-3 mx-3 pb-2'>
                                   <div className='bl'>
                                       <MDBView hover zoom>
                                           <img
                                               src={require('../../img/slider/3.jpg')}
                                               className='imgBl h-100 w-100'
                                               alt='B1'
                                           />
                                       </MDBView>
                                   </div>
                                   <div className='bl shadow-box-example hoverable' style={pinkColor}>
                                           <p className='serv white-text w-100 text-center'>МАНІКЮР</p>
                                    </div>
                                   <div className='bl'>
                                       <MDBView hover zoom>
                                           <img
                                               src={require('../../img/slider/1.jpg')}
                                               className='imgBl h-100 w-100'
                                               alt='B1'
                                           />
                                       </MDBView>
                                   </div>
                                   <div className='bl shadow-box-example hoverable' style={pinkColor}>
                                           <p className='serv white-text w-100 text-center'>ПЕДИКЮР</p>
                                   </div>
                                   <div className='bl' >
                                       <MDBView hover zoom>
                                           <img
                                               src={require('../../img/slider/4.jpg')}
                                               className='imgBl h-100 w-100'
                                               alt='B1'
                                           />
                                       </MDBView>
                                   </div>
                                   <div className='bl shadow-box-example hoverable' style={pinkColor}>
                                           <p className='serv white-text w-100 text-center'>ЗАЧІСКА</p>
                                   </div>
                                   <div className='bl'>
                                       <MDBView hover zoom>
                                           <img
                                               src={require('../../img/slider/222.jpg')}
                                               className='imgBl h-100 w-100'
                                               alt='B1'
                                           />
                                       </MDBView>
                                   </div>
                                   <div className='bl shadow-box-example hoverable' style={pinkColor}>
                                            <p className='serv white-text w-100 text-center'>СТРИЖКА</p>
                                   </div>
                                   <div className='bl'>
                                       <MDBView hover zoom>
                                           <img
                                               src={require('../../img/slider/5.jpg')}
                                               className='imgBl h-100 w-100'
                                               alt='B1'
                                           />
                                       </MDBView>
                                   </div>
                                   <div className='bl shadow-box-example hoverable' style={pinkColor}>
                                           <p className='serv white-text w-100 text-center'>ШЕЛЛАК</p>
                                   </div>
                                   <div className='bl' >
                                       <MDBView hover zoom>
                                           <img
                                               src={require('../../img/slider/2.jpg')}
                                               className='imgBl h-100 w-100'
                                               alt='B1'
                                           />
                                       </MDBView>
                                   </div>
                                   <div className='bl shadow-box-example hoverable' style={pinkColor}>
                                          <p className='serv white-text w-100 text-center'>ФАРБУВАННЯ</p>
                                   </div>
                                   <div className='bl'>
                                       <MDBView hover zoom>
                                           <img
                                               src={require('../../img/slider/6.jpg')}
                                               className='imgBl h-100 w-100'
                                               alt='B1'
                                           />
                                       </MDBView>
                                   </div>
                                   <div className='bl shadow-box-example hoverable' style={pinkColor}>
                                            <p className='serv white-text w-100 text-center'>ВІДНОВЛЕННЯ</p>
                                   </div>
                                   <div className='bl'>
                                       <MDBView hover zoom>
                                           <img
                                               src={require('../../img/slider/223.jpg')}
                                               className='imgBl h-100 w-100'
                                               alt='B1'
                                           />
                                        </MDBView>
                                   </div>
                               </div>
                         </div>
                      </div>
                   </div>
               </Router>
        </div>
    )
};

export default Service;


