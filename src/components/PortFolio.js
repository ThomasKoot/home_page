import React from 'react';
import FolioCard from './FolioCard';
import { portfolio } from '../assets/data'

function PortFolio() {    

    return (
        <div className="complete_row">
            <div className="content_div" >
                <h1 className="portfolio">Portfolio</h1>
                <div className="portfolio_content">
                    {portfolio.map(e => {
                        return (
                            <FolioCard caption={e.text} source={e.src} key_skills={e.key_skills}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default PortFolio