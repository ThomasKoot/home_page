import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { pctString, grayScale } from '../utility'
import { baksteen } from '../style_constants'
import brains from '../assets/brains.png'

// the scrollbox component renders a scrollbox based on a data prop in the following format:
// {name: "example", value: "23%"}. The width of the sliders is set when the scrollbox comes in view.

const barHeight = .3;
const textWidth = 0.3;
const marginLR = 0.05;

function ScrollSlider( { name, n, width, index } ) {

    const containerStyle = {
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: pctString(1 / (n + (1-barHeight))),
    }
      
    const fillStyle = {
        backgroundColor: baksteen,
        height: "100%",
        width: width,
        transition: "width 1s",
        transitionDelay: "" + (index * 0.2) + "s",
    }
      
    const titleStyle = {
        width: pctString(textWidth - marginLR),
        marginLeft: pctString(marginLR),
        wordBreak: "break-all",
        color: "white"
    }
      
    const trackStyle = {
        display: "flex",
        alignItems: "center",
        width: pctString(1-textWidth-marginLR),
        height: pctString(barHeight),
        marginLeft: pctString(marginLR),
        backgroundColor: grayScale(220)
    }


    return (
        <div style={containerStyle}>
            <p className="scroll_slider_title" style={titleStyle}>{name}</p>
            <div style={trackStyle}>
                <div style={fillStyle}/>
            </div>
        </div>
    )
}

function ListRenderer ( {data, isViewed} ) {

    return data.map((e, i) => {
        return (
            <ScrollSlider width={isViewed ? e.value : "0%"} 
                name={e.name} 
                n={data.length} 
                key={e.name + i}
                index={i}/>
        )
    })
}

function ScrollBox ({ data }) {
    
    const [isViewed, setIsViewed] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const inView = () => ref.current.getBoundingClientRect().top < window.innerHeight;
        
        if (inView()) {
            setIsViewed(true);
            return
        }
        
        let cleanUp = () => window.removeEventListener('scroll', handleScroll);

        function handleScroll() {
            if (inView()) {
                setIsViewed(true);
                window.removeEventListener('scroll', handleScroll);
                cleanUp = undefined;
            }
        }

        window.addEventListener('scroll', handleScroll);
        return cleanUp;
    },[])

    const margin = pctString(1/(data.length + (1-barHeight)) * ((1-barHeight)/2))

    return (
        <div className="complete_row scroll_complete">
            <div className="content_div scroll_content">
                <h1 className="header_align_right">Vaardigheden</h1>
                <div className="scroll_icon_container" >
                    <img src={brains} className="scroll_icon" alt="brains"/>
                    <div className="scroll_box" ref={ref}>
                        <div style={{height: margin}}></div>
                        <ListRenderer data={data} isViewed={isViewed}/>
                        <div style={{height: margin}}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScrollBox