import React from 'react';
import thomas_close from '../assets/thomas_close.jpg'
import { baksteen } from '../style_constants'

function About(props) {
    const containerStyle = {
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: baksteen,
        height: 300
    }

    const captionStyle = {
        
    }
    
    const imgStyle = {
        height: "100%",
        marginBottom: 'none'
    }

    const contentStyle = {
        width: '50%',
        textAlign: "left",
        color: "white",
        fontSize: "12px"
    }

    return (
        
        <div style={containerStyle}>
            <div style={contentStyle}>
                <h1>About</h1>
                <p style={captionStyle}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
                <img src={thomas_close} style={imgStyle}/>

        </div> 
       
        
    )
}

export default About