import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SingleDoctor from '../SingleDoctor/SingleDoctor';
import './Famous.css'
const Famous = () => {
    const famousDoctors = [
        { name: 'Dr. Saliha Khatun', dept: 'Cardiologist', hospital: 'Dhaka Medical', img: 'https://raw.githubusercontent.com/mahmudul-11/assignment-10-doctor-photos/main/1.png' },
        { name: 'Dr. Jiaual Hauque', dept: 'Nurologist', hospital: 'BSRMC', img: 'https://raw.githubusercontent.com/mahmudul-11/assignment-10-doctor-photos/main/2.png' },
        { name: 'Dr. Sohana Rahman', dept: 'Laser Specialist', hospital: 'BSRMC', img: 'https://raw.githubusercontent.com/mahmudul-11/assignment-10-doctor-photos/main/3.png' },
        { name: 'Dr. Sujata Islam', dept: 'Gynocologist', hospital: 'Dhaka Medical', img: 'https://raw.githubusercontent.com/mahmudul-11/assignment-10-doctor-photos/main/4.png' },
    ]
    return (
        <Container className="my-5 text-center">
            <h1 className="text-center text-info pt-5" style={{ fontWeight: '800' }} >Famous Bangladeshi Doctors You Find Here</h1>

            <Row className="mt-5">

                {
                    famousDoctors.map(doctor =><SingleDoctor key={doctor.name} doctor={doctor}></SingleDoctor>)
                }

            </Row>
        </Container>
    );
};

export default Famous;