import React from 'react';
import gitHubLogo from '../assets/gitHubLogo.png';
import linkedInLogo from '../assets/linkedInLogo.png';
import Social from './Social';

const gitHubLink = "https://github.com/ThomasKoot/"
const linkedInLink = "https://linkedin.com/in/thomaskoot/"


function Footer() {
    return (
        <div className="complete_row footer_complete">
            <div className="content_div">
                <div className="footer_content">
                    <Social link={gitHubLink} source={gitHubLogo} text="bekijk mijn projecten op GitHub"/>
                    <Social link={linkedInLink} source={linkedInLogo} text="bekijk mijn volledige CV op LinkedIn"/>
                    <div className="footer_bottom">
                        <p onClick={() => window.scrollTo(0,0)}>© thomas code 2020</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;