import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyOrder = (props) => {
    const {_id, img, name, price} = props.order;
    const {handleDelete} = props;
    return (
        <div className="col-md-4 mb-4">
            <Card className='shadow d-flex h-100 pb-4'>
                <Card.Img className='image' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <div className='d-flex justify-content-around'>
                        <h5>Price</h5>
                        <h5>${price}</h5>
                    </div>
                </Card.Body>
                <Link>
                    <button className='btn btn-danger mt-auto' onClick={ () => handleDelete(_id)}>Delete Booking</button>
                </Link>
            </Card>
        </div>
    );
};

export default MyOrder;