import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './About.css'
import founder from '../../images/founder.jpeg'
import cofounder from '../../images/cofounder.jpg'
import award1 from '../../images/award1.png'
import award2 from '../../images/award2.png'


const About = () => {
    const { user } = useAuth();
    return (
        <div >
            <div className='welcome-part'>
                <h1 className='pt-4'>Welcome  <span style={{ color: 'goldenrod' }}>{user.displayName}</span> sir, </h1>
                <h3>For Investigating Us</h3>
                <Row className='pt-5 intro'>
                    <Col lg={6} sm={12} xs={12}>
                        <img src={founder} alt="" style={{ width: "350px", height: '260px' }} />
                        <div className='mt-4'>
                            <h3 className='mt-4'>Founder</h3>
                            <p>Dr. Smith is the founding chairman of Intensive Care Hospital. The foundation stone of this hospital has been laid under also his planning and supervision. He has been involved in the hospital since its inception and has always been working on its development.</p>
                        </div>
                    </Col>
                    <Col lg={6} sm={12} xs={12}>
                        <img src={cofounder} alt="" style={{ width: "350px", height: '260px' }} />
                        <div className='mt-4'>
                            <h3 className='mt-3'>Co-Founder</h3>
                            <p>Dr. Adam is the Co-Founder  of Intensive Care Hospital. The foundation stone of this hospital has been laid under his planning and supervision. He has been involved in the hospital since its inception and has always been working on its development.</p>
                        </div>
                    </Col>
                </Row>
                <h2 className="mt-5 text-success" style={{ fontWeight: '800' }}>Our Accievements</h2>
                <Row className='py-5 intro'>
                    <Col lg={6} sm={12} xs={12}>
                    <div>
                            <img src={award1} alt="" style={{ width: "350px", height: '300px', border:"2px solid green",borderRadius:"10px" }} />
                            <p>we achieved the best new  hospital award in 2019. At that time we were also gifted 3 Ambulance from Medical Association.</p>
                        </div>
                    </Col>
                    <Col lg={6} sm={12} xs={12}>
                        <div>
                            <img src={award2} alt="" style={{ width: "350px", height: '300px', border:"2px solid green",borderRadius:"10px" }} />
                            <p>we achieved the best new private hospital award in 2020. At that time we were also gifted 3 Ambulance from Medical Association.</p>
                        </div>
                    </Col>
                </Row>
            </div>

        </div>
    );
};

export default About;