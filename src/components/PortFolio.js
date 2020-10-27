import React from 'react';
import FolioCard from './FolioCard';
import linear_regression_demo from '../assets/linear_regression_demo.jpg'
import lys_demo from '../assets/lys_demo.jpg';
import fishsing_demo from '../assets/fishsing_demo.jpg'
import pastel_pies_demo from '../assets/pastel_pies_demo.jpg'

function PortFolio() {    

    return (
        <div className="complete_row">
            <div className="content_div" >
                <h1 className="portfolio">Portfolio</h1>
                <div className="portfolio_content">
                    <FolioCard caption={"wat een verhaal"} source={lys_demo}/>
                    <FolioCard caption={"mooie lijntjes"} source={linear_regression_demo}/>
                    <FolioCard caption={"wat een verhaal"} source={pastel_pies_demo}/>
                    <FolioCard caption={"mooie lijntjes"} source={fishsing_demo}/>
                </div>
            </div>
        </div>
    )
}

export default PortFolio