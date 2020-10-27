import React, { useState, useRef, useLayoutEffect } from 'react';

import { selectedString } from '../utility'

function FolioCard( { caption, source }) {

    const [hover, setHover] = useState(false);
    const [height, setHeight] = useState(0);

    const widthRef = useRef();

    useLayoutEffect(() => {
        function adjustHeight() {
            setHeight(widthRef.current.clientWidth * 0.75);
        }
        adjustHeight();
        window.addEventListener('resize', adjustHeight);
        return () => window.removeEventListener('resize', adjustHeight);
    }, [])

    return (
        <div className="portfolio_card" 
                onMouseEnter={()=>setHover(true)} 
                onMouseLeave={() =>setHover(false)}
                style={{height}}
                ref={widthRef}>
            <p className={selectedString("portfolio", hover)}>{caption}</p>
            <img src={source} className={selectedString("portfolio", hover)}/>
        </div>
    )
}

export default FolioCard;