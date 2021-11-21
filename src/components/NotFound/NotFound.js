import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className='mt-5'>
                <img src="https://i.ibb.co/4dVXQqP/404.jpg" alt="" />

            </div>
            <div>
                <Link to='/home'>
                    <button className="btn btn-primary mt-4">Go to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;