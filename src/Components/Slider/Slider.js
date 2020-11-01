import React from 'react'
import './Slider.css'
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from 'mdbreact';

const Slider = () => {
  return (
        <MDBCarousel
            activeItem={1}
            length={5}
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
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2" className='slide'>
              <MDBView>
                <img
                    className="d-block h-100 w-100 slideimage"
                    src={require('../../img/slider/123.jpg')}
                    alt="Slide one"
                />
                <MDBMask  overlay="black"></MDBMask>
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3" className='slide'>
              <MDBView>
                <img
                    className="d-block h-100 w-100 slideimage"
                    src={require('../../img/slider/if-you-love-salon-hair-treatments-this-list-is-for-you-782x439.jpg')}
                    alt="Slide one"
                />
                <MDBMask  overlay="black"></MDBMask>
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="4" className='slide'>
              <MDBView>
                <img
                    className="d-block h-100 w-100 slideimage"
                    src={require('../../img/slider/hairbrush.jpg')}
                    alt="Second slide"
                />
                <MDBMask overlay="black" className="slide2"></MDBMask>
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="5" className='slide'>
              <MDBView>
                <img
                    className="d-block h-100 w-100 slideimage"
                    src={require('../../img/slider/iStock-1018214466.jpg')}
                    alt="Third slide"
                />
                <MDBMask  overlay="black"></MDBMask>
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
  );
}

export default Slider;
