import React from 'react';
import thomas_close from '../assets/thomas_close.jpg'
import { about } from '../assets/data'


function About(props) {

    return (
        <div className="complete_row about_complete">
            <div className="content_div">
                <div className="about_container">
                    <div className="about_content">
                        <h1 className="header_align_left">Hoi,</h1>
                        <p>{about}</p>
                    </div>
                    <div className="about_img_container">
                        <img alt="thomas koot" src={thomas_close} className="about_img"/>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default About