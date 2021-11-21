import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner'>
            <Carousel>
                <Carousel.Item interval={2000}>
                    <div className="slider-img-container">
                        <img
                        className="d-block w-100"
                        src='https://i.ibb.co/F6Tbr9G/best-hotel.jpg'
                        alt="First slide"
                        />
                    </div>
                    <Carousel.Caption>
                    <div className='slider-caption'>
                        <h1>Best Hotels</h1>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <div className="slider-img-container">
                        <img
                        className="d-block w-100"
                        src='https://i.ibb.co/Y25Fm2m/last-minute.jpg'
                        alt="Second slide"
                        />
                    </div>
                    <Carousel.Caption>
                    <div className="slider-caption">
                        <h1>Thailand Last Minute</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <div className="slider-img-container">
                        <img
                        className="d-block w-100"
                        src='https://i.ibb.co/q7xYzyB/asia.jpg'
                        alt="Third slide"
                        />
                    </div>
                    <Carousel.Caption>
                    <div className="slider-caption">
                        <h1>Asia Islands</h1>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;