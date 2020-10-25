import React from 'react';
import thomas_close from '../assets/thomas_close.jpg'
import { baksteen } from '../style_constants'

function About(props) {

    return (
        
        <div className="complete_row about_complete">
            <div className="content_div">
                <div className="about_container">
                    <div>
                        <h1 className="header_align_left">About</h1>
                        <p className="about_content">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                    <img src={thomas_close} className="about_img"/>
                </div>
            </div>
        </div> 
       
        
    )
}

export default About