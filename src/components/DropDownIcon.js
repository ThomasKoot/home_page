import React from 'react';
import { selectedString } from '../utility'

function DropDownIcon({inView, onClick}) {
    return (
        <svg className={selectedString("dropdown_icon", inView)} 
                viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
                onClick={onClick}>
                <polyline points="10,10 80,50 10,90" />
        </svg>
    )
}

export default DropDownIcon;