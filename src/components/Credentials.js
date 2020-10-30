import React, { useState } from 'react';
import Pill from './Pill'
import { selectedString } from '../utility';

function Credentials( { credentials } ) {

    const [selected, setSelected] = useState(0);

    function onClick(tab) {
        return function setTab() {
            setSelected(() => tab)
        }
    }

    function renderTabs(names) {
        return names.map((e, i) => {
            return (
                <div onClick={onClick(i)} 
                    className={selectedString("tab_title", i === selected)}
                    key={e + i}><h5><strong>{e}</strong></h5></div>
            )
        })
    }

    return (
        <div className="complete_row">
            <div className="content_div">
                <h1 className="header_align_left credentials">CV </h1>
                <div className="tab_container">
                    <div className="tab_title_row">
                        {renderTabs(Object.keys(credentials))}
                    </div>
                    <div className="tab_content" >
                        <Pill data={credentials[Object.keys(credentials)[selected]]}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Credentials
