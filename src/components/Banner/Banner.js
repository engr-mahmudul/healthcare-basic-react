import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/slider1.jpg'
import banner2 from '../../images/slider2.jpg'
import banner3 from '../../images/slider3.jpg'

const Banner = () => {
    return (
        <div id='banner'>
        <Carousel>
        <Carousel.Item>
                <img
                    className="d-block w-100" style={{height:'80vh'}}
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1 className=' google-fonts'>Health is the root of all Happiness</h1>
                    <p className='slider-p'>Take care of your health and lead a happy life.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100" style={{height:'80vh'}}
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1 className=' google-fonts' >We are always ready for you</h1>
                    <p className='slider-p'>Do regular body check-ups and stay away from the risk of major diseases.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100" style={{height:'80vh'}}
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h1 className=' google-fonts' >Experts are Ready to serve you</h1>
                    <p className='slider-p'>If you have any problems, take counseling without delay.</p>
                </Carousel.Caption>
            </Carousel.Item>
            
        </Carousel>
    </div>
    );
};

export default Banner;