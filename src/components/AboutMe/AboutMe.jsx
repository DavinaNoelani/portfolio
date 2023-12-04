import React from "react";
import './aboutMe.css'
import developerD from '../../assets/me.jpg'


function AboutMe() {

    const nameFont = {
        fontFamily: 'Comforter Brush',
        fontSize: '2rem'
    }

    return (
        <div className="aboutMe-container">

            <div className="introducing-container">
                <h1 className="intro-tag">
                    introducing
                </h1>

                <p className="intro-para">
                    🚀 Hey there, I'm <span style={nameFont}>Davina </span>– a code whisperer by day and a tech explorer by night.
                    Turning caffeine into code, I thrive on turning wild ideas into digital reality.
                    When not in front of the screen, you'll find me chasing the latest tech trends or
                    plotting world domination through flawless algorithms. Ready to join me on this
                    byte-sized adventure? Let's code and conquer together! 💻
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
