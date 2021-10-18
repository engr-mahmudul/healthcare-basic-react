import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const a =[1,2,3,4,5,4,5,5,6,]
    return (
        <div>
            <Container fluid className='bg-primary'>
            

                <Row className=''>
                    
                    {
                        a.map(i =><Service></Service>)
                    }
                    
                </Row>

            </Container>
        </div>
    );
};

export default Services;