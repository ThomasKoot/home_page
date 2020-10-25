import React from 'react';
import { baksteen } from '../style_constants'


function Onderschrift() {

    const spanStyle = {color: baksteen}
    const textStyle = {
        fontSize: "4.5vw",
        color: "black"}
    

    return (
        <div className="complete_row">
            <div className="content_div">
            <h1 style={textStyle}>Ik ben thomas <span style={spanStyle}>koot</span> {":"} ik schrijf <span style={spanStyle}>code</span></h1>
                <h4 style={{fontSize: "2.0vw"}}>Ik ben goed met Javascript, React en Amazon Web Services</h4>
            </div>
        </div>
    )
}

export default Onderschrift;