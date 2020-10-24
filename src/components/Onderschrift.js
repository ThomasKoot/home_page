import React from 'react';
import { baksteen } from '../style_constants'
import { grayScale } from '../utility'

function Onderschrift() {

    const spanStyle = {color: baksteen}
    const textStyle = {color: grayScale(0)}
    

    return (
        <div style={{marginBottom: "40px"}}>
        <h1 style={textStyle}>Ik ben thomas <span style={spanStyle}>koot</span> {":"} ik schrijf <span style={spanStyle}>code</span></h1>
             <h4 style={textStyle}>Ik ben goed met Javascript, React en Amazon Web Services</h4>
        <hr style={{height: "1px", backgroundColor: baksteen, border: "none", width: "80%"}}/>
        </div>
    )
}

export default Onderschrift;