import React, { useState, useLayoutEffect } from 'react'

function Pill ({data}) {

    const [selected, setSelected] = useState()

    useLayoutEffect(() => {
        setSelected(undefined)
    }, [data])

    function changeSelected(index) {
        return function () {
            setSelected(index)
        }
    }

    return (
        data.map((e, i) => {
            return (
            <div className="pill_pane_container" key={e.strong + i}>
                <div className="pill_title_container"> 
                    <svg className={"pill_icon" + (i === selected ? " pill_icon_selected" : "")} 
                        viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
                        onClick={changeSelected(i === selected ? undefined : i)}>
                        <polyline points="10,10 80,50 10,90" />
                    </svg>
                    <p className="pill_title"><strong>{e.strong}</strong><br></br>{e.p}</p>
                </div>
                <div className={"pill_sub_text" + (i === selected ? " pill_sub_text_selected" : "")}>
                    <p className={"pill_paragraph" + (i === selected ? " pill_paragraph_selected" : "")}>{e.caption}</p>
                </div>
            </div>
            )
        })
    )
}

export default Pill;