import React from "react";
import desktop from '../../assets/desktop.jpg';
import './landing.css'
import Header from "../Header/Header";

function Landing() {

    

    return (
        <div className="landing-page">
            

            <div className="landing-img-container">
                <img alt='desktop' src={desktop} className="landing-img" />
            </div>

            <Header />
        </div>
    )
}

export default Landing 