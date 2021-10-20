import React from 'react';
import { Col } from 'react-bootstrap';
import './SingleDoctor.css'

const SingleDoctor = (props) => {
    const {name,dept,hospital,img} = props.doctor;
    return (
        <Col lg={3} md={6} sm={12} xs={12} className='my-4' >
            <div className='doctor-card'>
                <img src={img} alt="" />
                <h4 style={{fontWeight:"700"}}>{name}</h4>
                <p style={{color:'black'}}>Dept: <span style={{fontWeight:"700"}}>{dept}</span></p>
                <h6>In <span style={{fontWeight:"700"}}>{hospital}</span></h6>
            </div>

        </Col>
    );
};

export default SingleDoctor;