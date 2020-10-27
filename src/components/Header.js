import React from 'react';
import main_foto from '../assets/header_thomas_code.jpg'
import header_mobile from '../assets/header_mobile.jpg'

function Header() {


    return (
        
        <div className="header">
            <img className="header big" alt="main foto" src={main_foto} />
            <img className="header mobile" alt="main foto" src={header_mobile} />
        </div>
    )
}

export default Header;