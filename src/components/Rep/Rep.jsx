import React from "react";
import './rep.css';
import band from '../../assets/bandmember.jpg';
import girl from '../../assets/girl.jpg';


function Rep() {

    return (
        <div className="mt-5 rep-container">
            <h1 className="large text-center mt-5">My Rep</h1>

            <div className="testis mt-3">
                <img src={band} width="90px" alt='profile pic' />
                <p>
                    <span>Jim Flex.</span> CEO at Some Place.
                </p>
                <p>Davina saved us from a web disaster.</p>
            </div>

            <div className="testis">
                <img src={girl} width="90px" alt='profile pic' />
                <p>
                    <span>Simone Bocques.</span> CEO at Somewhere.
                </p>
                <p>No one is better than Davina.</p>
            </div>
        </div>
    )
}

export default Rep