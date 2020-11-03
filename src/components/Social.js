import React from 'react';

function Social(props) {
    return (  
        <a href={props.link} >    
            <div className="social_row">
                <img className="social_icon" src={props.source} alt={props.alt}/>
                <p className="social">{props.text}</p>
            </div>
        </a>
    )
}

export default Social;