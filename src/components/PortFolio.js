import React from 'react';
import { useState } from 'react'
import { jasje } from '../style_constants'

import lys_video from '../assets/lys_video.mov'

function PortFolio() {

    function FolioCard( { title, caption, source }) {

        const [hover, setHover] = useState(false);

        const cardContainerStyle = {
            border: "1px solid",
            boxShadow: "2px 2px 5px 0px rgba(0,0,0,0.75)",
            width: "25vw",
            height: "30vw",
        }

        const cardTitleStyle = {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "20%",
            fontSize: "2vw"
        }

        const cardBodyStyle = {
            height: "80%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            overflow: "hidden",
            position: "relative"
        }

        const videoStyle = {
            position: "absolute",
            width: "100%",
            height: "auto",
            transform: hover ? "translate(100%)" : "translate(0)",
            transition: "transform .5s"
        }

        const captionStyle = {
            position: "absolute",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            transform: hover ? "translate(0)" : "translate(-100%)",
            transition: "transform .5s",
            fontSize: "2vw"
        }

        return (
            <div style={cardContainerStyle} onMouseEnter={()=>setHover(true)} onMouseLeave={() => setHover(false)}>
                <div style={cardTitleStyle}>{title}</div>

                <div style={cardBodyStyle}>
                    <p style={captionStyle}>{caption}</p>
                    <video autoPlay muted loop src={source} style={videoStyle}/>
                </div>
            </div>
        )
    }


    const folioRowStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginBottom: "40px"
    }

    return (
        <div className="complete_row">
            <div className="content_div">
                <h1 style={{color: jasje}}>portfolio</h1>
                <div style={folioRowStyle}>
                    <FolioCard title={"lys"} caption={"wat een verhaal"} source={lys_video}/>
                    <FolioCard title={"bezier"} caption={"mooie lijntjes"} source={lys_video}/>
                </div>
                <div style={folioRowStyle}>
                    <FolioCard title={"Linear Regression"} caption={"wat een verhaal"} source={lys_video}/>
                    <FolioCard title={"FishSing"} caption={"mooie lijntjes"} source={lys_video}/>
                </div>
            </div>
        </div>
    )
}

export default PortFolio