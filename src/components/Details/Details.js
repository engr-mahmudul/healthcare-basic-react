import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useData from '../../hooks/useData';
import useFakeData from '../../hooks/useFakeData';
import './Details.css'

const Details = () => {
    const { services } = useData()
    console.log("Contex", services)
    const { detailsId } = useParams();

    // console.log('fake', services)
    // const [info, setInfo] = useState([]);
    // useEffect(() => {
    //     fetch('https://raw.githubusercontent.com/mahmudul-11/assignment-10-data/main/services.json')
    //         .then(res => res.json())
    //         .then(data => setInfo(data))
    // }, [])
    // console.log('Contex competetor')
    // let slectedService={};

    const slectedService = services.filter(s => s.id === parseInt(detailsId));
    console.log(slectedService[0].serviceName)

    // 

    // console.log("ckeck or not", slectedService);
    return (

        <Container >
            <Row className='details-page-style'>
                <Col lg={6} sm={12} xs={12} className='details'>
                    <img src={slectedService[0]?.image} alt="" />
                </Col>
                <Col lg={6} sm={12} xs={12} className='details' >
                    <div >
                        <h3>Service Name: <span style={{fontWeight:'800'}}>{slectedService[0]?.serviceName}</span></h3>
                        <h5>We have: <span style={{fontWeight:'800'}}>{slectedService[0]?.serviceProvider} experts for this field</span> </h5>
                        <h5>We are available: <span style={{fontWeight:'800'}}>{slectedService[0]?.avaiable}</span> </h5>
                        <h5>Booking Procedure: <span style={{fontWeight:'800'}}>{slectedService[0]?.status}</span> </h5>
                        
                    </div>
                </Col>

                <div className='details'>
                    <Link to='/'><button className='btn px-5 mt-3 btn-success '>Go Back Home</button></Link>
                </div>
            </Row>
        </Container>
    );
};

export default Details;