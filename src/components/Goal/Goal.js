import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import './Goal.css'
import gbanner1 from '../../images/goalbannner.jpg'
import gbanner2 from '../../images/goalbanner2.jpg'

const Goal = () => {
    return (
        <Carousel>
        <Carousel.Item>
                <img
                    className="d-block w-100 goal-banner" style={{height:'90vh'}}
                    src={gbanner1}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1 className=' google-fonts'>Our Goal is to increase your family Happiness</h1>
                    <p className='slider-p'>Take care of your health and lead a happy life.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 goal-banner" style={{height:'90vh'}}
                    src={gbanner2}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1 className=' google-fonts' >We are commited to provide you the health support </h1>
                    <p className='slider-p'>Do regular body check-ups and stay away from the risk of major diseases.</p>
                </Carousel.Caption>
            </Carousel.Item>
            
            
        </Carousel>
    );
};

export default Goal;