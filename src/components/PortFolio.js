import React, {useEffect} from 'react';
import FolioCard from './FolioCard';
import { portfolio } from '../assets/data'

function PortFolio() {   
    
    const [selected, setSelected] = React.useState();
    const [isMobile, setIsMobile] = React.useState(false);

    useEffect(() => {
        if (window.matchMedia("(pointer: coarse)").matches) {
            setIsMobile(true)
        }
    },[])

    function changeSelected(title) {
        return function inner(e) {
            setSelected(() => title)
        }
    }

    return (
        <div className="complete_row">
            <div className="content_div" >
                <h1 className="portfolio">Portfolio</h1>
                <div className="portfolio_content">
                    {portfolio.map(e => {
                        return (
                            <FolioCard  data={e}
                                        selectCallback={changeSelected}
                                        selected={selected === e.title}
                                        key={e.title}
                                        isMobile={isMobile}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default PortFolio