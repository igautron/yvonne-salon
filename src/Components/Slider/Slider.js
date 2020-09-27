import React from 'react'
import './Slider.css'
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from 'mdbreact';

const Slider = () => {
  return (
        <MDBCarousel
            activeItem={1}
            length={3}
            showControls={true}
            showIndicators={true}
            className="z-depth-1 slider"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1" className='slide'>
              <MDBView>
                <img
                    className="d-block h-100 w-100 slideimage"
                    src={require('../../img/slider/iStock-1180279728.jpg')}
                    alt="Slide one"
                />
                <MDBMask  overlay="black"></MDBMask>
              </MDBView>
              <MDBCarouselCaption className='slide h-100 float-right w-25 text-left mr-5 pr-5 girl-slide'>
                <h3 className='h3-responsive pt-xl-5 pt-lg-4 pt-md-3 pt-sm-3 corousel-slogan font-weight-bold text-left'>ЗАЧІСКА НА БУДЬ-ЯКИЙ СМАК</h3>
                <h5 className='font-weight-light corousel-text white-text text-left'>В цьому знається топ-мастер</h5>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2" className='slide'>
              <MDBView>
                <img
                    className="d-block h-100 w-100 slideimage"
                    src={require('../../img/slider/hairbrush.jpg')}
                    alt="Second slide"
                />
                <MDBMask overlay="black" className="slide2"></MDBMask>
              </MDBView>
              <MDBCarouselCaption className='slide h-100'>
                <h3 className='h3-responsive pt-xl-5 pt-lg-4 pt-md-3 pt-sm-3 corousel-slogan font-weight-bold'>САЛОН ЗАЧІСОК ТА СТРИЖОК</h3>
                <h5 className='font-weight-light corousel-text pink-text'>Доглянуте волосся - це твоя краса</h5>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3" className='slide'>
              <MDBView>
                <img
                    className="d-block h-100 w-100 slideimage"
                    src={require('../../img/slider/iStock-1018214466.jpg')}
                    alt="Third slide"
                />
                <MDBMask  overlay="black"></MDBMask>
              </MDBView>
              <MDBCarouselCaption className='slide h-100'>
                <h3 className='h3-responsive pt-xl-5 pt-lg-4 pt-md-3 pt-sm-3 corousel-slogan font-weight-light font-weight-bold'>БЕЗДОГАННІ ПАЛЬЧИКИ</h3>
                <h5 className='font-weight-light corousel-text pink-text'>Безліч кольорових лаків та гель-лаків</h5>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
  );
}

export default Slider;
