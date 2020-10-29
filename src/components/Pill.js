import React, { useState, useLayoutEffect, useRef, useEffect } from 'react'
import { selectedString } from '../utility'
import DropDownIcon from './DropDownIcon.js';

function Pill ({data}) {

    const [selected, setSelected] = useState();
    const [subTextStyle, setSubTextStyle] = useState();
    const p = useRef();

    useLayoutEffect(() => {
        setSelected(undefined)
    }, [data])

    useEffect(() => {
        setSubTextStyle (() =>  ({ height: (selected !== undefined ? p.current.clientHeight + 40 : 0)}))
    }, [data, selected])

    function changeSelected(index) {
        return function () {
            setSelected(index)
        }
    }

    return (
        <>
        {data.map((e, i) => {
            const inView = i === selected;
            const onClick = changeSelected(inView ? undefined : i);
            return (
            <div className={"dropdown_item_container"}key={e.strong + i}>
                <div className="dropdown_item_head_container"> 
                    <DropDownIcon inView={inView} onClick={onClick}/>
                    <p className="dropdown_item_head" onClick={onClick}><strong>{e.strong}</strong><br></br>{e.p}</p>
                </div>
                <div className={selectedString("dropdown_item_body_container", inView)}
                    style={inView ? subTextStyle : {height:0}}>
                    <p className={selectedString("dropdown_item_body", inView)} ref={inView ? p : undefined}>
                        {e.caption}
                    </p>
                </div>
            </div>
            )
        })}
        </>
    )
}

export default Pill;