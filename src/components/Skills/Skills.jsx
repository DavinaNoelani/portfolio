import React from "react";
import './skills.css'
import SlideshowCarousel from "../SlideshowCarousel/SlideshowCarousel";
import Rep from '../Rep/Rep.jsx';


function Skills() {

    return (

        <div className="skills-container">
            <SlideshowCarousel />

            <Rep />
        </div>
    )
}

export default Skills