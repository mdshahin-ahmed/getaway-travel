import React from 'react';
import './FreeBooking.css';

const FreeBooking = () => {
    return (
        <div>
            <h1 className="text-info mt-4">Hassle Free Bookings</h1>
            <div className="container mt-4">
                <div className="row">                    
                    <div className="col-md-4 d-md-flex justify-content-around mb-3">
                        <h4 className='align-self-center text-info me-2 number'>1.</h4>
                        <div>
                        <h4>Browse Package</h4>
                        <p>Visit our website and browse Holiday destination Packages.</p>
                        </div>
                    </div>
                    <div className="col-md-4 d-md-flex justify-content-around mb-3">
                        <h4 className='align-self-center text-info me-2 number'>2.</h4>
                        <div>
                        <h4>Fill Trip Details</h4>
                        <p>Fill the travel form details and purchase your package online.</p>
                        </div>
                    </div>
                    <div className="col-md-4 d-md-flex justify-content-around mb-3">
                        <h4 className='align-self-center text-info me-2 number'>3.</h4>
                        <div>
                        <h4>Ready for Departure</h4>
                        <p>Get ready with bagpacks, we will pick you from your Home.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FreeBooking;