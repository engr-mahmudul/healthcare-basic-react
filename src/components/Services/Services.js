import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useFakeData from '../../hooks/useFakeData';
import Service from '../Service/Service';

const Services = () => {
    const {services} = useFakeData();
    return (
        <div id= 'services' className="mt-5">
            <Container fluid >
                    <h1 style={{textAlign:'center',fontSize:'45px',color:"#1b92aa",fontWeight:"800" }} >Our Services</h1>
                <Row className="mt-5">
                    
                    {
                        services.map(service =><Service key={service.id} service={service}></Service>)
                    }
                    
                </Row>

            </Container>
        </div>
    );
};

export default Services;