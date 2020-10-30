import React, { useState, useRef, useLayoutEffect } from 'react';
import { selectedString } from '../utility'
import PortFolioLink from './PortFolioLink';

function FolioCard( { data, selected, selectCallback, isMobile }) {

    const { title, text, src, key_skills, link } = data;

    const widthRef = useRef();
    const [height, setHeight] = useState(0)

    useLayoutEffect(() => {
        function adjustHeight() {
            setHeight(widthRef.current.clientWidth * 0.75);
        }
        adjustHeight();
        window.addEventListener('resize', adjustHeight);
        return () => window.removeEventListener('resize', adjustHeight);
    }, [])

    const pStyle = {
        fontSize: height/20,
        marginRight: "5%",
    }

    function RenderLink(link) {
        return link.startsWith("http") ? <PortFolioLink link={link} /> : <p style={{fontSize: height/25}} className="no_link">{link}</p>
    }

    return (
        <div className="portfolio_card" 
                onMouseEnter={isMobile ? undefined : selectCallback(title)} 
                onMouseLeave={isMobile ? undefined : selectCallback(undefined)}
                onClick={isMobile ? selectCallback(selected ? undefined : title) : undefined}
                style={{height}}
                ref={widthRef}>
            <div className={selectedString("portfolio_caption_container", selected)}>
                <p style={pStyle}>{text}</p>
                <p style={pStyle}>{key_skills}</p>
                {RenderLink(link)}
            </div>
            <img src={src} className={selectedString("portfolio", selected)}/>
        </div>
    )
}

export default FolioCard;