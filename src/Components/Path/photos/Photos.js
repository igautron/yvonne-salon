import React from 'react';
import {
    MDBRow,
    MDBCol,
} from 'mdbreact';
import './Photos.css'

const Photos = () => {
    return (
            <div className='container'>
                <h2 className="h2-responsive font-weight-bold h2-responsive text-center p-5 galery-text">
                    Галерея
                </h2>
                <h4 className="grey-text text-center w-responsive mx-auto mb-5 h4-responsive text-media">
                    Неперевершений інтер'єр виконаний за допомогою найкращого дизайнерського рішення, найсучасніша техніка та обладнання салону краси стали основою для досягнення найвдалішої реалізації усії бажань клієнта.  Індивідуальний підхів та точність - ось наша мета.
                </h4>
                <hr className='light ml-5 mr-5'/>
                <MDBRow className='justify-content-end m-auto p-0 overflow-hidden align-items-stretch shadow-none'>
                    <p className='text-center w-responsive mx-auto mb-5 h2-responsive galery-p'>
                        <a href='#' className='black-text'> Інтер'ер </a>
                    </p>
                        <MDBCol md='12' className='mb-3 int-hide w-responsive'>
                            <img src={require('../../../img/salon/11.JPG')}  className='img-fluid z-depth-2' alt='' />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className='w-responsive m-0 justify-content-center w-100'>
                        <MDBCol lg='4' md='12' className='mb-3'>
                            <img src={require('../../../img/salon/2.JPG')} className='img-fluid z-depth-5 ' alt='' />
                        </MDBCol>
                        <MDBCol lg='4' md='6' className='mb-3'>
                            <img src={require('../../../img/salon/9.JPG')} className='img-fluid z-depth-5 ' alt='' />
                        </MDBCol>
                        <MDBCol lg='4' md='6' className='mb-3'>
                            <img src={require('../../../img/salon/18.JPG')} className='img-fluid z-depth-5 ' alt='' />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className='m-0 justify-content-center'>
                        <MDBCol md='6' className='mb-3'>
                            <img src={require('../../../img/salon/IMG_5746.JPG')} className='img-fluid z-depth-5' alt='' />
                        </MDBCol>
                        <MDBCol md='6' className='mb-3'>
                            <img src={require('../../../img/salon/IMG_5704.JPG')} className='img-fluid z-depth-5' alt='' />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className='m-0 justify-content-center'>
                        <MDBCol md='4' className='mb-3'>
                            <img src={require('../../../img/salon/12.JPG')} className='img-fluid z-depth-5' alt='' />
                        </MDBCol>
                        <MDBCol md='4' className='mb-3'>
                            <img src={require('../../../img/salon/17.JPG')} className='img-fluid z-depth-5' alt=''/>
                        </MDBCol>
                        <MDBCol md='4' className='mb-3'>
                            <img src={require('../../../img/salon/IMG_5789.JPG')} className='img-fluid z-depth-5' alt=''/>
                        </MDBCol>
                    </MDBRow>
                <hr className='my-5 light'/>
                <MDBRow className='justify-content-center p-0  m-auto'>
                    <p className='text-center w-responsive mx-auto mb-5 h2-responsive galery-p'>
                        Манікюр та педикюр
                    </p>
                </MDBRow>
                <MDBRow className='p-0 m-0 justify-content-center'>
                    <MDBCol lg='4' md='12' className='mb-3'>
                        <img src={require('../../../img/salon/manicure/223.jpg')} className='img-fluid z-depth-5' alt='' />
                    </MDBCol>
                    <MDBCol lg='4' md='6' className='mb-3'>
                        <img src={require('../../../img/salon/manicure/229.jpg')} className='img-fluid z-depth-5' alt='' />
                    </MDBCol>
                    <MDBCol lg='4' md='6' className='mb-3'>
                        <img src={require('../../../img/salon/manicure/_190920_000217_592.png')} className='img-fluid z-depth-5' alt='' />
                    </MDBCol>
                </MDBRow>
                <MDBRow className='m-0 justify-content-center'>
                    <MDBCol md='6' className='mb-3'>
                        <img src={require('../../../img/salon/manicure/Френч.jpg')} className='img-fluid z-depth-5' alt='' />
                    </MDBCol>
                    <MDBCol md='6' className='mb-3'>
                        <img src={require('../../../img/salon/manicure/5.jpg')} className='img-fluid z-depth-5' alt='' />
                    </MDBCol>
                </MDBRow>
                <MDBRow className='m-0 justify-content-center'>
                    <MDBCol md='4' className='mb-3'>
                        <img src={require('../../../img/salon/manicure/228.jpg')} className='img-fluid z-depth-5' alt='' />
                    </MDBCol>
                    <MDBCol md='4' className='mb-3'>
                        <img src={require('../../../img/salon/manicure/_190920_000750_346.png')} className='img-fluid z-depth-5' alt=''/>
                    </MDBCol>
                    <MDBCol md='4' className='mb-3'>
                        <img src={require('../../../img/salon/manicure/IMG-20190912-WA0000.jpg')} className='img-fluid z-depth-5' alt=''/>
                    </MDBCol>
                </MDBRow>
                <MDBRow className='m-0 justify-content-center'>
                    <MDBCol md='6' className='mb-3'>
                        <img src={require('../../../img/salon/manicure/1.jpg')} className='img-fluid z-depth-5' alt='' />
                    </MDBCol>
                    <MDBCol md='6' className='mb-3'>
                        <img src={require('../../../img/salon/manicure/2.jpg')} className='img-fluid z-depth-5' alt='' />
                    </MDBCol>
                </MDBRow>
                <MDBRow className='m-0 justify-content-center'>
                    <MDBCol md='6' className='mb-3'>
                        <img src={require('../../../img/salon/manicure/6.jpg')} className='img-fluid z-depth-5' alt='' />
                    </MDBCol>
                    <MDBCol md='6' className='mb-3'>
                        <img src={require('../../../img/salon/manicure/4.jpg')} className='img-fluid z-depth-5' alt='' />
                    </MDBCol>
                </MDBRow>
                <hr className='my-5 light'/>
                <MDBRow className='justify-content-center p-0 m-auto'>
                    <p className='text-center w-responsive mx-auto mb-5 h2-responsive galery-p'>
                        Стрижки
                    </p>
                </MDBRow>
                <MDBRow className='p-0 m-0 justify-content-center'>
                    <MDBCol lg='4' md='12' className='mb-3'>
                        <img src={require('../../../img/salon/strijki/50637204_110884150028796_207598082487468852_n.jpg')} className='img-fluid z-depth-1' alt='' />
                    </MDBCol>
                    <MDBCol lg='4' md='6' className='mb-3'>
                        <img src={require('../../../img/salon/strijki/50227314_326589991288366_2214588650299900698_n.jpg')} className='img-fluid z-depth-1' alt='' />
                    </MDBCol>
                    <MDBCol lg='4' md='6' className='mb-3'>
                        <img src={require('../../../img/salon/strijki/49564348_778065532561230_1351560146581055897_n.jpg')} className='img-fluid z-depth-1' alt='' />
                    </MDBCol>
                </MDBRow>
                <hr className='my-5 light'/>
                <MDBRow className='justify-content-center p-0 m-auto'>
                    <p className='text-center w-responsive mx-auto mb-5 h2-responsive'>
                        Зачіски
                    </p>
                </MDBRow>
                <MDBRow className='p-0 m-0 justify-content-center'>
                    <MDBCol lg='4' md='12' className='mb-3'>
                        <img src={require('../../../img/salon/zachiski/1.jpg')} className='img-fluid z-depth-1' alt='' />
                    </MDBCol>
                    <MDBCol lg='4' md='6' className='mb-3'>
                        <img src={require('../../../img/salon/zachiski/2.jpg')} className='img-fluid z-depth-1' alt='' />
                    </MDBCol>
                    <MDBCol lg='4' md='6' className='mb-3'>
                        <img src={require('../../../img/salon/zachiski/3.jpg')} className='img-fluid z-depth-1' alt='' />
                    </MDBCol>
                </MDBRow>
                <MDBRow className='m-0 justify-content-center'>
                    <MDBCol md='6' className='mb-3'>
                        <img src={require('../../../img/salon/zachiski/12.jpg')} className='img-fluid z-depth-1' alt='' />
                    </MDBCol>
                    <MDBCol md='6' className='mb-3'>
                        <img src={require('../../../img/salon/zachiski/11.jpg')} className='img-fluid z-depth-1' alt='' />
                    </MDBCol>
                </MDBRow>
                <MDBRow className='m-0 justify-content-center'>
                    <MDBCol md='3' className='mb-3'>
                        <img src={require('../../../img/salon/zachiski/4.jpg')} className='img-fluid z-depth-1' alt='' />
                    </MDBCol>
                    <MDBCol md='3' className='mb-3'>
                        <img src={require('../../../img/salon/zachiski/5.jpg')} className='img-fluid z-depth-1' alt='' />
                    </MDBCol>
                    <MDBCol md='3' className='mb-3'>
                        <img src={require('../../../img/salon/zachiski/6.jpg')} className='img-fluid z-depth-1' alt='' />
                    </MDBCol>
                    <MDBCol md='3' className='mb-3'>
                        <img src={require('../../../img/salon/zachiski/13.jpg')} className='img-fluid z-depth-1' alt='' />
                    </MDBCol>
                </MDBRow>
                <hr className='my-5 light'/>
                <MDBRow className='justify-content-center p-0 m-auto'>
                    <p className='text-center w-responsive mx-auto mb-5 h2-responsive galery-p'>
                        Фарбування волосся
                    </p>
                </MDBRow>
                <MDBRow className='p-0 m-0 justify-content-center'>
                    <MDBCol lg='4' md='12' className='mb-3'>
                        <img src={require('../../../img/salon/farb/1.jpg')} className='img-fluid z-depth-1' alt='' />
                    </MDBCol>
                    <MDBCol lg='4' md='6' className='mb-3'>
                        <img src={require('../../../img/salon/farb/2.jpg')} className='img-fluid z-depth-1' alt='' />
                    </MDBCol>
                    <MDBCol lg='4' md='6' className='mb-3'>
                        <img src={require('../../../img/salon/farb/3.jpg')} className='img-fluid z-depth-1' alt='' />
                    </MDBCol>
                </MDBRow>
                <MDBRow className='m-0 justify-content-center'>
                    <MDBCol md='6' className='mb-3'>
                        <img src={require('../../../img/salon/farb/4.jpg')} className='img-fluid z-depth-1' alt='' />
                    </MDBCol>
                    <MDBCol md='6' className='mb-3'>
                        <img src={require('../../../img/salon/farb/5.jpg')} className='img-fluid z-depth-1' alt='' / >
                    </MDBCol>
                </MDBRow>
                <MDBRow className='m-0 justify-content-center'>
                    <MDBCol lg='4' md='12' className='mb-3'>
                        <img src={require('../../../img/salon/farb/6.jpg')} className='img-fluid z-depth-1' alt='' />
                    </MDBCol>
                    <MDBCol lg='4' md='6' className='mb-3'>
                        <img src={require('../../../img/salon/farb/7.jpg')} className='img-fluid z-depth-1' alt='' />
                    </MDBCol>
                    <MDBCol lg='4' md='6' className='mb-3'>
                        <img src={require('../../../img/salon/farb/8.jpg')} className='img-fluid z-depth-1' alt='' />
                    </MDBCol>
                </MDBRow>
                <MDBRow className='m-0 justify-content-center'>
                    <MDBCol md='3' className='mb-3'>
                        <img src={require('../../../img/salon/farb/14.jpg')} className='img-fluid z-depth-1 w-100' alt='' />
                    </MDBCol>
                    <MDBCol md='3' className='mb-3'>
                        <img src={require('../../../img/salon/farb/15.webp')} className='img-fluid z-depth-1 w-100' alt='' />
                    </MDBCol>
                    <MDBCol md='3' className='mb-3'>
                        <img src={require('../../../img/salon/farb/17.jpg')} className='img-fluid z-depth-1 w-100' alt='' />
                    </MDBCol>
                    <MDBCol md='3' className='mb-3'>
                        <img src={require('../../../img/salon/farb/16 (2).jpg')} className='img-fluid z-depth-1 w-100' alt='' />
                    </MDBCol>
                </MDBRow>
                <hr className='my-5 light'/>
                <MDBRow className='justify-content-center p-0 m-auto'>
                    <p className='text-center w-responsive mx-auto mb-5  h2-responsive galery-p'>
                        Для чоловіків
                    </p>
                </MDBRow>
                <MDBRow className='p-0 m-0 justify-content-center'>
                    <MDBCol lg='4' md='12' className='mb-3'>
                        <img src={require('../../../img/salon/man/1.jpg')} className='img-fluid z-depth-5' alt='' />
                    </MDBCol>
                    <MDBCol lg='4' md='6' className='mb-3'>
                        <img src={require('../../../img/salon/man/2.jpg')} className='img-fluid z-depth-5' alt='' />
                    </MDBCol>
                    <MDBCol lg='4' md='6' className='mb-3'>
                        <img src={require('../../../img/salon/man/3.jpg')} className='img-fluid z-depth-5' alt='' />
                    </MDBCol>
                </MDBRow>
                <MDBRow className='m-0 justify-content-center'>
                    <MDBCol md='3' className='mb-3'>
                        <img src={require('../../../img/salon/man/6.jpg')} className='img-fluid z-depth-5 w-100' alt='' />
                    </MDBCol>
                    <MDBCol md='3' className='mb-3'>
                        <img src={require('../../../img/salon/man/7.jpg')} className='img-fluid z-depth-5 w-100' alt='' />
                    </MDBCol>
                    <MDBCol md='3' className='mb-3'>
                        <img src={require('../../../img/salon/man/8.jpg')} className='img-fluid z-depth-5 w-100' alt='' />
                    </MDBCol>
                    <MDBCol md='3' className='mb-3'>
                        <img src={require('../../../img/salon/man/9.jpg')} className='img-fluid z-depth-5 w-100' alt='' />
                    </MDBCol>
                </MDBRow>
                <MDBRow className='m-0 justify-content-center'>
                    <MDBCol md='6' className='mb-3'>
                        <img src={require('../../../img/salon/man/4 (2).jpg')} className='img-fluid z-depth-5' alt='' />
                    </MDBCol>
                    <MDBCol md='6' className='mb-3'>
                        <img src={require('../../../img/salon/man/5.jpg')} className='img-fluid z-depth-5' alt='' />
                    </MDBCol>
                </MDBRow>
            </div>
    )
};

export default Photos;