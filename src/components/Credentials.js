import React, { useState } from 'react';
import { baksteen } from '../style_constants';
import Pill from './Pill'

function Credentials( { credentials } ) {

    const [selected, setSelected] = useState(0);

    function onClick(tab) {
        return function setTab() {
            setSelected(() => tab)
        }
    }

    function renderTabs(names) {
        const n = names.length

        return names.map((e, i) => {

            return (
                <div onClick={onClick(i)} 
                    className={"credential_tabs" + (i === selected ? " selected_tab" : "")}
                    key={e + i}>{e}</div>
            )
        })
    }

    return (
        <div className="complete_row">
            <div className="content_div">
                <h1 className="header_align_left" style={{color: baksteen}}>kwalificaties </h1>
                <div className="credential_container">
                        <div className="credential_tab_row">
                            {renderTabs(Object.keys(credentials))}
                        </div>
                        <div className="credential_content" >
                            <div className="credential_content_div">
                                <Pill data={credentials[Object.keys(credentials)[selected]]}/>
                            </div>
                        </div>
                </div>
            </div>
            </div>

    )
}

export default Credentials
