import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([]);
    const email = user.email;

    useEffect( () => {
        fetch(`https://obscure-chamber-15764.herokuapp.com/myOrders/${email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[]);
    const handleDelete = id => {
        const url = `https://obscure-chamber-15764.herokuapp.com/myOrders/${email}/${id}`;
        console.log(url);
        fetch(url, {
            method: 'DELETE'
        })
        .then()
    }
    return (
        <div>
            <h1 className='my-4 text-info'>My Booking</h1>
            <div className="container">
                <div className="row">
                    {
                        orders.map( order => <MyOrder
                            key={order._id}
                            order={order}
                            handleDelete={handleDelete}
                        ></MyOrder>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyOrders;