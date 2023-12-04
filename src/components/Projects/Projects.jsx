import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import DrumMachinePhoto from '../../assets/drum.PNG';
import jsCalc from '../../assets/newJsCalc.png';
import lux from '../../assets/luxhotel.png';
import './projects.css';


function Projects() {

    const projectImg = {
        width: '100%',
        height: '400px'
    }

    return (

        <div className="projects-container">

            <Carousel fade >

                <Carousel.Item>

                    <div className="project-img-container">
                        <img src={DrumMachinePhoto} alt="Drum Machine" style={projectImg} />
                    </div>

                    {/* <Carousel.Caption className="caption">
                        <h3>Drum Machine</h3>
                        <p>Created with React & CSS</p>
                    </Carousel.Caption> */}

                </Carousel.Item>

                <Carousel.Item>

                    <div className="project-img-container">
                        <img src={jsCalc} alt="Drum Machine" style={projectImg} />
                    </div>

                    {/* <Carousel.Caption className="caption">
                        <h3>Calculator</h3>
                        <p>Using React & CSS</p>
                    </Carousel.Caption> */}

                </Carousel.Item>

                <Carousel.Item>

                    <div className="project-img-container">
                        <img src={lux} alt="Drum Machine" style={projectImg} />
                    </div>

                    {/* <Carousel.Caption>
                        <h3>Lux Hotel Booking</h3>
                        <p>
                            Created with HTML & CSS
                        </p>
                    </Carousel.Caption> */}

                </Carousel.Item>

            </Carousel>

        </div>
    )
}

export default Projects