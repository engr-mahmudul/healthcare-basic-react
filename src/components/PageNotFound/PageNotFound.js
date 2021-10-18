import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/404.jpg'
import './PageNotFound.css'

const PageNotFound = () => {
    return (
        <div >
            <div>
                <img src={notFound} alt="" className='notfound-img' />
                <div className='notfound-button'>
                    <Link to='/'><button className='btn btn-danger px-5 mt-3'>Go Back Home</button></Link>
                </div>

            </div>
        </div>
    );
};

export default PageNotFound;