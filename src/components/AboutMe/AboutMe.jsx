import React from "react";
import './aboutMe.css'
import developerD from '../../assets/me.jpg'


function AboutMe() {

    return (
        <div className="aboutMe-container">

            <div className="introducing-container">
                <h1 className="intro-tag">
                    introducing
                </h1>

                <p className="intro-para">
                🚀 Software Developer | Passionate about crafting innovative solutions. 💻 Excels in MERN. 🌐 Committed to continuous learning. 
                <br/>
                Let's build the future together!
                </p>

            </div>

            <div className="photo-container">

                <img className="photo" src={developerD} alt="Davina Dacpano" />

                <h4 className="intro-name">
                    Davina Dacpano
                </h4>

                <p className="dev-name">
                    Web Developer
                </p>

            </div>
        </div>
    )
}


export default AboutMe
