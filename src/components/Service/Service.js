import React from 'react';
import { Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { id, serviceName, serviceProvider, avaiable, status, image } = props.service;
    return (
        <Col lg={4} md={6} sm={12} xs={12} >
            <div className='mx-1 my-2  card-style'>
                <div>
                    <img src={image} alt="" style={{ width: "100%", height: "250px", borderRadius: '10px', border: '1px solid green' }} />
                </div>
                <div>
                    <h4 style={{ textAlign: 'center', fontWeight: '700' }}>{serviceName}</h4>
                    <h6 style={{ textAlign: 'center' }}>Available : {avaiable}</h6>

                </div>
                <div className="button-class">
                    <Link to={`/details/${id}`}>
                        <Button variant='success' className='px-3 single-button mt-3'>Details {serviceName.toLowerCase()}</Button>
                    </Link>
                </div>
            </div>
        </Col>
    );
};

export default Service;