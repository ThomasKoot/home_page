import React, { useState } from 'react'

function PortFolioLink( {link} ) {

    const [hover, setHover] = useState(false);

    return (
        <div className="portfolio_link_container" >
            <div className="portfolio_link">
                <a href={link} target="_blank">
                    <svg viewBox="0 0 140 140" 
                        className="link_icon" 
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}>
                        <polyline points="70,25 25,25 25,115 115,115 115,70" />
                        <g style={
                            {transform: "translate(" + (hover ? "10%,-10%" : "0%, 0%") + ")",
                            stroke: hover ? "rgb(20,220,20)" : "black"}
                            }>
                            <polyline points="70,70 115,25" />
                            <polyline points="90,25 115,25 115,50" />
                        </g>
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default PortFolioLink;

