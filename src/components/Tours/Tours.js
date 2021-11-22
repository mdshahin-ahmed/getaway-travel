import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Tour from '../Tour/Tour';

const Tours = () => {
    const [tours, setTours] = useState([]);
    const {user} = useAuth();
    // console.log(user);
    useEffect(() => {
        fetch('https://obscure-chamber-15764.herokuapp.com/tours')
            .then(res => res.json())
            .then(data => setTours(data))
    }, []);
    const handleBook = (index) => {
        const bookTour = tours[index];
        bookTour.email = user.email;
        bookTour.status = 'Pending';
        // console.log(bookTour);
        fetch('https://obscure-chamber-15764.herokuapp.com/bookTour',{
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(bookTour)
        })
        .then(res => res.json())
    }
    if (tours.length < 1) {
        return <Spinner animation="border" variant="info" />; 
    }
    return (
        <div>
            <h1 className='my-4 text-info'>Our Tours</h1>
            <div className="container">
                <div className="row">
                    {
                        tours.map( (tour, index) => <Tour
                            key={tour._id}
                            index={index}
                            tour={tour}
                            handleBook={handleBook}
                        ></Tour>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Tours;