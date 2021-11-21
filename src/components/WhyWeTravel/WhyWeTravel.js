import React from 'react';

const WhyWeTravel = () => {
    return (
        <div>
            <h1 className="text-info mt-4">Why WeTravel?</h1>
            <p>Six reasons to travel with us</p>
            <div className="container mt-4">
                <div className="row">                    
                    <div className="col-md-4 d-md-flex justify-content-around mb-3">
                        <h1 className='align-self-center text-info me-2 number'><i className="fas fa-bus"></i></h1>
                        <div>
                        <h4>Local Conveyance</h4>
                        <p>Mollis aliquam ut porttitor leo a diam sollicitudin tempor ipsum.</p>
                        </div>
                    </div>
                    <div className="col-md-4 d-md-flex justify-content-around mb-3">
                        <h1 className='align-self-center text-info me-2 number'><i className="fas fa-utensils"></i></h1>
                        <div>
                        <h4>Free Snacks & Meals</h4>
                        <p>Mauris sit amet massa vitae tortor condimentum lacinia quis montes.</p>
                        </div>
                    </div>
                    <div className="col-md-4 d-md-flex justify-content-around mb-3">
                        <h1 className='align-self-center text-info me-2 number'><i class="fas fa-ship"></i></h1>
                        <div>
                        <h4>Affordable Cruise</h4>
                        <p>Sed ullamcorper morbi tincidunt ornare massa sapien faucibus.</p>
                        </div>
                    </div>
                    <div className="col-md-4 d-md-flex justify-content-around mb-3">
                        <h1 className='align-self-center text-info me-2 number'><i class="fas fa-child"></i></h1>
                        <div>
                        <h4>50% Child Discount</h4>
                        <p>Mollis aliquam ut porttitor leo a diam sollicitudin tempor ipsum.</p>
                        </div>
                    </div>
                    <div className="col-md-4 d-md-flex justify-content-around mb-3">
                        <h1 className='align-self-center text-info me-2 number'><i class="fas fa-bed"></i></h1>
                        <div>
                        <h4>Premium Hotels</h4>
                        <p>Mauris sit amet massa vitae tortor condimentum lacinia quis montes</p>
                        </div>
                    </div>
                    <div className="col-md-4 d-md-flex justify-content-around mb-3">
                        <h1 className='align-self-center text-info me-2 number'><i class="fas fa-camera"></i></h1>
                        <div>
                        <h4>Sightseeing Guides</h4>
                        <p>Sed ullamcorper morbi tincidunt ornare massa sapien faucibus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyWeTravel;