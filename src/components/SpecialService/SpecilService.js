import React from 'react';
import specialImage from '../../images/special.jpeg'
import { Col, Container, Row } from 'react-bootstrap';
import './SpecialService.css'

const SpecilService = () => {
    return (
        <Container fluid className="mt-5">
            <div className='pt-4'>
                <h1 style={{ fontWeight: "800" }} className="text-info text-center pb-4">Our Special Service</h1>
            </div>
            <Row style={{ backgroundColor: '#1B92AA', borderRadius: "15px" }} className="mt-4">
                <Col lg={7} sm={12} xs={12} className='special-service'>
                    <img src={specialImage} alt="" width="100%" height="400" className="py-3" />
                </Col>

                <Col lg={5} sm={12} xs={12} className="text-white">
                    <div className='mt-3'>
                        <h3 style={{ fontWeight: "800" }}>Covid-19 Treatment Services</h3>
                    </div>

                    <div className='mt-4'>
                        <h6> ► Covid Test</h6>
                        <h6> ► Plagma Donate and Collection</h6>
                        <h6> ► Afftected People Treatment</h6>
                        <h6> ► Vaccine Providing</h6>
                        <h6> ► Isolation Care</h6>
                        <h6> ► Affected People Online Counceiling</h6>
                    </div>

                </Col>


            </Row>
        </Container>
    );
};

export default SpecilService;