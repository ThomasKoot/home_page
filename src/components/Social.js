import React from 'react';

function Social(props) {
    return (
        <a href={props.link} >
        <div className="social_row">
            
                <img className="social_icon" src={props.source} />
                <div className="social_text">{props.text}</div>
            
        </div>
        </a>
    )
}

export default Social;