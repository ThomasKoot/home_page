import React, { useState, useRef, useLayoutEffect } from 'react';

import { selectedString } from '../utility'
import { portfolio } from '../assets/data';

function FolioCard( { caption, source, key_skills }) {

    const [hover, setHover] = useState(false);
    const [height, setHeight] = useState(0);

    const widthRef = useRef();

    function onTouch(e) {
        if (!hover) {setHover(true)}
    }

    function onTouchEnd(e) {
        function cleanUp(e) {
            console.log("removing listener")
            setHover(false)
            window.removeEventListener("touchstart", cleanUp)
        }
        window.addEventListener("touchstart", cleanUp)
    }

    useLayoutEffect(() => {
        function adjustHeight() {
            setHeight(widthRef.current.clientWidth * 0.75);
        }
        adjustHeight();
        window.addEventListener('resize', adjustHeight);
        return () => window.removeEventListener('resize', adjustHeight);
    }, [])

    const pStyle = {
        fontSize: height/17,
        marginRight: "5%",
    }

    return (
        <div className="portfolio_card" 
                onMouseEnter={()=>setHover(true)} 
                onMouseLeave={() =>setHover(false)}
                onTouchStart={onTouch}
                onTouchEnd={hover ? onTouchEnd : null}
                style={{height}}
                ref={widthRef}>
            <div className={selectedString("portfolio_caption_container", hover)}>
                <p style={pStyle}>{caption}</p>
                <p style={pStyle}>{key_skills}</p>
            </div>

            <img src={source} className={selectedString("portfolio", hover)}/>
        </div>
    )
}

export default FolioCard;