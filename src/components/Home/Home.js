import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import FreeBooking from '../FreeBooking/FreeBooking';
import Tours from '../Tours/Tours';
import WhyWeTravel from '../WhyWeTravel/WhyWeTravel';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tours></Tours>
            <FreeBooking></FreeBooking>
            <WhyWeTravel></WhyWeTravel>
            <Footer></Footer>
        </div>
    );
};

export default Home;