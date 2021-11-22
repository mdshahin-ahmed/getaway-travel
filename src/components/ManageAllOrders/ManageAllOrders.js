import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';

const ManageAllOrders = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([]);
    const email = user.email;

    useEffect( () => {
        fetch(`https://obscure-chamber-15764.herokuapp.com/myOrders`)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[]);
    if (orders.length < 1) {
        return <Spinner animation="border" variant="info" />; 
    }
    return (
        <div>
            <h1 className='my-4 text-info'>All Booking</h1>
            <div className="container">
                <div className="row">
                    {
                        orders.map( order => <MyOrder
                            key={order._id}
                            order={order}
                        ></MyOrder>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageAllOrders;