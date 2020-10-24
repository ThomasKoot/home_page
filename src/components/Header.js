import React, { useLayoutEffect, useRef, useEffect, useState  } from 'react';
import main_foto from '../assets/header_thomas_code.jpg'

function Header() {

    const ref = useRef();
    const [headerHeight, setHeaderHeight] = useState()

    useEffect(() => {
        
        function resizeHeader() {
            setHeaderHeight(() => ref.current.clientHeight)
            console.log("resizing header with height " + ref.current.clientHeight)
        }
        resizeHeader()
        window.addEventListener('resize', resizeHeader)
        return () => window.removeEventListener('resize', resizeHeader)
    }, [])

    const linkBoxStyle = {
        width: "20%",
        height: "10%",
        backgroundColor: "rgba(0,0,0,0)",
        zIndex: "1",
        border: "4px solid white",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: "2vw",
        marginBottom: "20px"
    }

    const headerStyle = {
        width: "100%",
        position: "relative",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "flex-end",
        height: headerHeight
    }

    const imgStyle = {
        height: "auto",
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
    }

    return (
        
        <div className="header" style={headerStyle}>
           
            <img alt="main foto" src={main_foto} ref={ref} style={imgStyle}/>
        
            <div style={linkBoxStyle}>
                <p>tadaa</p>
            </div>
            <div style={linkBoxStyle}>
                <p>tadaa</p>
            </div>
            
        </div>
    )
}

export default Header;