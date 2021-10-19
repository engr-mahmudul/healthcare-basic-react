import './SpecialService.css'
import React from 'react';
import specialImage from '../../images/special.jpeg'
import { Col, Container, Row } from 'react-bootstrap';

const SpecilService = () => {
    return (
        <Container fluid className="mt-5">
            <div className='pt-4'>
                <h1 style={{ fontWeight: "800" }} className="text-info text-center">Our Special Service</h1>
            </div>
            <Row style={{ backgroundColor: '#1B92AA', borderRadius: "15px" }} className="mt-4"> 
                <Col lg={6} sm={12} xs={12} >
                    <img src={specialImage} alt="" width="90%" height="300" className="py-3" style={{ borderRadius: "15px" }} />
                </Col>
                <Col lg={6} sm={12} xs={12} className="text-white">
                    <h3 style={{ fontWeight: "800" }}>Covid-19 All Types Treatment</h3>
                    <ul>
                        <ul><h5> ► Covid Test</h5></ul>
                        <ul><h5> ► Plagma Donate and Collection</h5></ul>
                        <ul><h5> ► Afftected People Treatment</h5></ul>
                        <ul><h5> ► Vaccine</h5></ul>
                        <ul><h5> ► Isolation Care</h5></ul>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default SpecilService;