import React from 'react'
import './Partners.css'

const color = {backgroundColor: 'rgba(255, 219, 222, 0.74)'}

const Partners = () => {
    return (
        <div style={color}>
            <div className='container partners m-auto justify-content-center p-0'>
                <div className='w-100 d-flex flex-wrap h-100'>
                    <h1 className='h1-responsive py-5 m-0 font-weight-bold w-100 text-center'>Наші партнери</h1>
                    <div className='container p-0'>
                        <div className='partn-block mb-xl-5 mb-lg-2 mb-md-0 mb-sm-0 mb-5 m-auto justify-content-center px-3 d-flex flex-wrap'>
                            <img className='col-3 partn-img m-auto justify-content-around' alt="partners"  src={require('./../../img/partners/1371035413_amathyste-logo.jpg')} />
                            <img className='col-3 partn-img m-auto justify-content-around' alt="partners"  src={require('./../../img/partners/felps.png')} />
                            <img className='col-3 partn-img m-auto justify-content-around' alt="partners"  src={require('./../../img/partners/kisspng-beauty-parlour-hair-care-cosmetologist-sustainabil-5b2bba78048a94.7431551115295924400186 (1).png')} />
                            <img className='col-3 partn-img m-auto justify-content-around' alt="partners"  src={require('./../../img/partners/unnamed.png')} />
                            <img className='col-3 partn-img m-auto justify-content-around' alt="partners"  src={require('./../../img/partners/kodi.png')} />
                            <img className='col-3 partn-img m-auto justify-content-around' alt="partners"  src={require('./../../img/partners/komilfo.jpg')} />
                            <img className='col-3 partn-img m-auto justify-content-around' alt="partners"  src={require('./../../img/partners/luxio.jpg')} />
                            <img className='col-3 partn-img m-auto justify-content-around' alt="partners"  src={require('./../../img/partners/honmatokyo.jpg')} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Partners;
