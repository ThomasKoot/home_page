import React, { useState, useLayoutEffect } from 'react';
import { grayScale } from '../utility';
import { baksteen } from '../style_constants'

function Credentials( props ) {

    const [selected, setSelected] = useState(0);

    function onClick(tab) {
        return function setTab() {
            setSelected(() => tab)
        }
    }

    function renderTabs(names) {
        const n = names.length

        const tabStyle = {
            width: "" + 60/n + "%",
            marginLeft: "4%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            top: "1px",
            cursor: "pointer",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px"
        }  

        return names.map((e, i) => {

            const dynamicStyles = i === selected ? 
                {
                    backgroundColor: grayScale(240),
                } : {

                }

            return (
                <div onClick={onClick(i)} style={{...tabStyle, ...dynamicStyles}} key={e + i}>{e}</div>
            )
        })
    }

    const containerStyle = {
        width: "80%",
        height: 400,
        marginBottom: 40,
        marginLeft: "10%"
    }

    const tabRowStyle = {
        height: "15%",
        width: "100%",
        display: "flex",
    }

    const contentStyle = {
        height: "85%",
        width: "100%",
        borderRadius: "5px",
        backgroundColor: grayScale(240)
    }


    return (
            <div className="App" style={{width: "100%", alignItems:"flex-start"}}>
            <h1 style={{color: baksteen, marginLeft:"10%"}}>kwalificaties </h1>
            <div style={containerStyle}>
                
                    <div style={tabRowStyle}>
                        {renderTabs(["titles", "coursera", "work"])}
                    </div>
                    <div style={contentStyle} >
                    </div>
            </div>
            </div>

    )
}

export default Credentials
