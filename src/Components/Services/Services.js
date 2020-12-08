import React from 'react';
import './Services.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {MDBView} from 'mdbreact';


const pinkColor = {backgroundColor: '#fbd7db'}

const Services = () => {
    return (
        <div>
               <Router>
                   <div>
                       <div className='container block text-center justify-content-center m-auto pb-5 p-0 px-sm-3'>
                           <h1 className='h1-responsive py-5 m-0 font-weight-bold text-center'>Актуально</h1>
                           <div className='w-100 m-auto'>
                               <div className=' d-flex m-auto flex-wrap justify-content-center p-3'>
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

export default Services;


