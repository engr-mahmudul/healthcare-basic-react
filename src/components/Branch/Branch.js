import React from 'react';
import { Col } from 'react-bootstrap';

const Branch = (props) => {
    const {location,open,img} = props.branch;
    return (
        <Col lg={4} md={6} sm={12} xs={12} >
            <div className='mx-1 my-2  card-style'>
                <div>
                    <img src={img} alt="" style={{ width: "100%", height: "250px", borderRadius: '10px', border: '1px solid green' }} />
                </div>
                <div>
                    <h4 style={{ textAlign: 'center', fontWeight: '700' }}>{location}</h4>
                    <div className='p-3'>
                    
                    </div>
                    <h6 style={{ textAlign: 'center', color: 'green' ,fontWeight:'800' }}>Will be open : {open}</h6>

                </div>
                
            </div>
        </Col>
    );
};

export default Branch;