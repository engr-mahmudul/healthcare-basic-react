import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import './Goal.css'
import gbanner1 from '../../images/goalbannner.jpg'
import gbanner2 from '../../images/goalbanner2.jpg'
import Branch from '../Branch/Branch';



const Goal = () => {
    const branches = [
        { id: 1, location: "Mirpur", open: "12-10-2021", img:'https://raw.githubusercontent.com/mahmudul-11/assignment-10-image/main/hopital1.jpg' },
        { id: 2, location: "Dhanmonddi", open: "10-10-2021" , img:'https://raw.githubusercontent.com/mahmudul-11/assignment-10-image/main/hospital.jpeg' },
        { id: 3, location: "Farmgate", open: "12-10-2021" , img:'https://raw.githubusercontent.com/mahmudul-11/assignment-10-image/main/hospital2.jpg' },
        { id: 4, location: "Gulistan", open: "12-10-2021", img:'https://raw.githubusercontent.com/mahmudul-11/assignment-10-image/main/hospital2.jpg'  },
        { id: 5, location: "Puran Dhaka", open: "12-10-2021", img:'https://raw.githubusercontent.com/mahmudul-11/assignment-10-image/main/hopital1.jpg'},
        { id: 6, location: "Nilkhet", open: "12-10-2021", img:'https://raw.githubusercontent.com/mahmudul-11/assignment-10-image/main/hospital.jpeg' }

    ]
    return (
        <div>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 goal-banner" style={{ height: '90vh' }}
                            src={gbanner1}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h1 className=' google-fonts'>Our Goal is to increase your family Happiness</h1>
                            <p className='slider-p'>Take care of your health and lead a happy life.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 goal-banner" style={{ height: '90vh' }}
                            src={gbanner2}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1 className=' google-fonts' >We are commited to provide you the health support </h1>
                            <p className='slider-p'>Do regular body check-ups and stay away from the risk of major diseases.</p>
                        </Carousel.Caption>
                    </Carousel.Item>


                </Carousel>
            </div>
            <div className="my-5 text-center text-success"  >
                <h1 style={{fontWeight:'800'}} className="py-3">We Are Opening Some Branches For You</h1>
            </div>
            <Row className="mt-5">
                    
                    {
                        branches.map(branch =><Branch key={branch.id} branch={branch}></Branch>)
                    }
                    
                </Row>
        </div>
    );
};

export default Goal;