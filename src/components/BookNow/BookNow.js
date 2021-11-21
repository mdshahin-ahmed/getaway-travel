/* import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const BookNow = () => {
    const {tourId} = useParams();
    const [tour, setTour] = useState({});

    useEffect( () => {
        fetch(`http://localhost:5000/tours/${tourId}`)
        .then(res => res.json())
        .then(data => setTour(data))
    },[])
    const {img, name, price, description} = tour;
    return (
        <div>
            <div className="container  mt-5 pt-5">
                <div className="card">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={img} className="w-100 h-100 rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h4 className="card-title">{name}</h4>
                                <h6>Price: {price}</h6>                  
                                <p>{description}</p> 
                            </div>
                        </div>
                    </div>
                </div>
                <Link to='/orderPlace'>
                    <button className='btn btn-primary d-flex mt-5 m-auto'>Place Order</button>
                </Link>
            </div>
        </div>
    );
};

export default BookNow; */