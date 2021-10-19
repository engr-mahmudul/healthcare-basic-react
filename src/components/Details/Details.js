import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Details = () => {
    const { detailsId } = useParams();
    return (

        <div>
            This is details page{detailsId}
            <Link to='/'><button className='btn px-5 mt-3'>Go Back Home</button></Link>
        </div>
    );
};

export default Details;