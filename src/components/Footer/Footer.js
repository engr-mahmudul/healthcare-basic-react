import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchLocation, faSms, faPhone, faCopyright } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import locationImg from '../../images/loaction.png'
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    const location = <FontAwesomeIcon icon={faSearchLocation} />
    const message = <FontAwesomeIcon icon={faSms} />
    const phone = <FontAwesomeIcon icon={faPhone} />
    const copyright = <FontAwesomeIcon icon={faCopyright} />
    return (
        <Container fluid className='text-white p-4 nav-bg mt-5'>
            <Row  className=''>
                <Col lg={8} md={6} sm={12} xs={12}>
                    <h4 style={{fontWeight:"700"}}>Contact</h4>
                    <p className='mt-4'>{location} Level-5, 34, Concord Tower, Dhanmonddi, Dhaka</p>
                    <p>{message} 17101120@uap-bd.edu</p>
                    <p>{phone} Emergency: 01618-183418</p>
                </Col>
                <Col lg={4} md={6} sm={12} xs={12}>
                    <h4 style={{textAlign:'center',fontWeight:"700"}} >Location</h4>
                    <img src={locationImg} alt="" height='250' width='400' />
                </Col>
            </Row >

            <div className='d-flex justify-content-center'>
                <p className='mt-4'>Copyright {copyright} 2021 intensive-care-hospital.com</p>
            </div>
        </Container>

    );
};

export default Footer;
