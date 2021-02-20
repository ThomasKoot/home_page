import React from 'react';
import awsBadge from '../assets/aws-dac-badge.png';

function Onderschrift() {  

    return (
        <div className="complete_row">
            <div className="content_div subtitle_content" >
                <h2>Ik ben thomas <span className={"red"}>koot</span> : ik schrijf <span className="red">code</span></h2>
                <h2 className="mobile">Ik ben thomas <span className={"red"}>koot</span></h2>
                <h2 className="mobile">ik schrijf <span className="red">code</span></h2>
                <h4 >Ik ben goed met JavaScript, React en Amazon Web Services</h4>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <a style={{cursor: 'pointer'}} href='https://www.youracclaim.com/badges/5b4da38f-3969-4996-926b-4ab4b3aad06b/public_url' target='_blank'>
                        <img className='badge' src={awsBadge} />
                    </a>
                </div>
                
            </div>
        </div>
    )
}

export default Onderschrift;