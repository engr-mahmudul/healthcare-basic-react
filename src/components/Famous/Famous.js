import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import nero from '../../images/doctors/neuro.jpeg'
import cardio from '../../images/doctors/cardiologist.jpeg'
import laser from '../../images/doctors/Laser.jpeg'
import gyno from '../../images/doctors/gynocologist.jpeg'
import './Famous.css'
const Famous = () => {
    return (
        <Container className="my-5 text-center">
            <h1 className="text-center text-info py-5" style={{fontWeight:'800'}} >Our Famous Bangladeshi Doctors </h1>
            
            <Row>
                <Col lg={3} sm={6} xs={6} >
                    <div className="mx-4" className='galllery'>
                        <div>
                            <img src={cardio} alt="" height="200"/>
                        </div>
                        <div className='mt-3'>
                            <h4>Dr. Sibli Khan</h4>
                            <h6>Cardio Specilist</h6>
                        </div>
                    </div>
                </Col>
                <Col lg={3} sm={6} xs={6} className='galllery'>
                <div className="mx-4" className='galllery'>
                    <div >
                        <img src={nero} alt="" height="200" />
                    </div>
                    <div className='mt-3'>
                        <h4>Dr.Shoikot</h4>
                        <h6>Nero Specilist</h6>
                    </div>
                    </div>
                </Col>
                <Col lg={3} sm={6} xs={6} className='galllery'>
                <div className="mx-4" className='galllery'>
                    <div>
                        <img src={laser} alt="" height="200" />
                    </div>
                    <div className='mt-3'>
                        <h4>Dr. Reduyana</h4>
                        <h6>Laser Specilist</h6>
                    </div>
                    </div>
                </Col>
                <Col lg={3} sm={6} xs={6} className='galllery'>
                <div className="mx-4" className='galllery'>
                    <div>
                        <img src={gyno} alt="" height="200" />
                    </div>
                    <div>
                        <h4 className='mt-3'>Dr. Rafsana</h4>
                        <h6>Gynocologist</h6>
                    </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Famous;