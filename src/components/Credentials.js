import React, { useState } from 'react';
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
            zIndex: 2,
            cursor: "pointer",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px"
        }  

        return names.map((e, i) => {

            const dynamicStyles = i === selected ? 
                {
                    backgroundColor: grayScale(240),
                    borderTop: "1px solid",
                    borderLeft: "1px solid",
                    borderRight: "1px solid",
                    borderBottom: "1px " + grayScale(240),
                } : {
                    borderBottom: "1px black",
                    borderTop: "1px white",
                    borderLeft: "1px white",
                    borderRight: "1px white",
                    top: "2px",
                }

            return (
                <div onClick={onClick(i)} style={{...tabStyle, ...dynamicStyles}} key={e + i}>{e}</div>
            )
        })
    }

    const containerStyle = {
        width: "75%",
        height: 400,
    }

    const tabRowStyle = {
        height: "15%",
        width: "100%",
        display: "flex",
        
    }

    const contentStyle = {
        height: "85%",
        width: "100%",
        border: "1px solid black",
        borderRadius: "5px",
        backgroundColor: grayScale(240)
    }


    return (
        <div style={containerStyle}>
            <div style={tabRowStyle}>
                {renderTabs(["titles", "coursera", "work"])}
            </div>
            <div style={contentStyle} >
                
            </div>

        </div>
    )
}

export default Credentials
