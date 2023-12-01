import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './slideshowCarousel.css';
import html from '../../assets/HTML5.png';
import css from '../../assets/CSS3.png';
import javascript from '../../assets/Javascript_badge.png';
import reactLogo from '../../assets/react.png';
import bootstrap from '../../assets/BootstrapO.png';
import mongo from '../../assets/mongo.png';
import nodeJS from '../../assets/node.png';
import express from '../../assets/express-js.png';
import sass from '../../assets/sass.png'

function SlideshowCarousel() {

    const icon = {
        width: '300px',
        height: '300px'
    }



    return (
        <div className="carousel-container">

            <Carousel>
                <Carousel.Item interval={1000}>

                    <div className="carousel-img-container">
                        <img style={icon} className="carousel-img" src={html} alt='HTML5' />
                    </div>

                </Carousel.Item>

                <Carousel.Item interval={750}>

                    <div className="carousel-img-container">
                        <img style={icon} className="carousel-img" src={css} alt='CSS3' />
                    </div>

                </Carousel.Item>

                <Carousel.Item interval={750}>

                    <div className="carousel-img-container">
                        <img style={icon} className="carousel-img" src={javascript} alt='JavaScript' />
                    </div>

                </Carousel.Item>

                <Carousel.Item interval={750}>

                    <div className="carousel-img-container">
                        <img style={icon} className="carousel-img" src={reactLogo} alt='React' />
                    </div>

                </Carousel.Item>

                <Carousel.Item interval={750}>

                    <div className="carousel-img-container">
                        <img style={icon} className="carousel-img" src={bootstrap} alt='Bootstrap' />
                    </div>

                </Carousel.Item>

                <Carousel.Item interval={750}>

                    <div className="carousel-img-container">
                        <img style={icon} className="carousel-img" src={mongo} alt='Mongo' />
                    </div>

                </Carousel.Item>

                <Carousel.Item interval={750}>

                    <div className="carousel-img-container">
                        <img style={icon} className="carousel-img" src={nodeJS} alt='Express' />
                    </div>

                </Carousel.Item>

                <Carousel.Item interval={750}>

                    <div className="carousel-img-container">
                        <img style={icon} className="carousel-img" src={express} alt='Express' />
                    </div>

                </Carousel.Item>

                <Carousel.Item interval={750}>

                    <div className="carousel-img-container">
                        <img style={icon} className="carousel-img" src={sass} alt='Sassy CSS' />
                    </div>

                </Carousel.Item>

            </Carousel>
        </div>
    )
}

export default SlideshowCarousel