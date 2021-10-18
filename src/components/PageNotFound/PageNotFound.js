import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/404.jpg'
import './PageNotFound.css'

const PageNotFound = () => {
    return (
        <div >
            <div  >
                <div className='not-Found mt-5'>
                    <img src={notFound} alt="" />

                </div>
                <Link to='/'><button className='btn btn-danger px-5 mt-3'>Go Back Home</button></Link>
            </div>
        </div>
    );
};

export default PageNotFound;