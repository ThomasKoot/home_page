import React, { useRef } from 'react'
import { useState, useEffect } from 'react'
import { generateRandomSegment, initGrid } from './pcbFunctions'
import LineRenderer from './LineRenderer'
import { getMousePos } from './getMousePos'

// segments are defined with the following object structure {x, y, direction, length}

function PCB(props) {

    const gridSize = 40;
    const radius = .5;

    const [lines, setLines] = useState([])
    const [grid, setGrid] = useState(initGrid(gridSize));
    const [isTracking, setIsTracking] = useState(false);
    const [mousePos, setMousePos] = useState();
    const [isMobile, setIsMobile] = useState(true)
    
    const timeoutId = useRef()

    useEffect(() => {
        function testMedia() {
            const testMobile = window.innerWidth < 650
            if (testMobile !== isMobile) {
                setIsMobile(testMobile)
                setLines([]);
                setGrid(initGrid(gridSize))
                clearTimeout(timeoutId.current)
            }
        }
        testMedia();
        window.addEventListener('resize', testMedia);
        return () => window.removeEventListener('resize', testMedia)
    },[isMobile])
    
    useEffect(() => {

        if(!props.isViewed || window.innerWidth < 650) return

        function addLine() {
            const trace = generateRandomSegment(grid).points
            if (!trace) return
            setGrid(prev => {
                    let newState = prev.map(e => [...e]);
                    trace.forEach((e) =>  newState[e[0]][e[1]] = 1 )
                    return newState
                })
            const [ endX, endY ]  = trace[trace.length - 1]
            setLines(lines => [...lines, {x: trace[0][0], y: trace[0][1], endX, endY}])
        }

        timeoutId.current = setTimeout(addLine, 20)
    }, [lines, props.isViewed, isMobile])

    function initialize() {
        setLines([]);
        setGrid(initGrid(gridSize))
        clearTimeout(timeoutId.current)
    }

    function checkMouse(e) {
        setMousePos(getMousePos(e))
    }

    return ( isMobile ? null : (
            <div className="pcb_section">
                <div className="pcb_fill" >

                </div>
                <div className="pcb_container" 
                    onMouseEnter={() => setIsTracking(true)}
                    onMouseLeave={()=> setIsTracking(false)}
                    onMouseMove={isTracking ? checkMouse : null}>
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <LineRenderer mousePos={isTracking ? mousePos : undefined} gridSize={gridSize} lines={lines} radius={radius} />
                    </svg>
                </div>
                <div className="pcb_fill" >
                    <p onClick={initialize} className="pcb_reset"><strong>genereer</strong></p>
                </div>
            </div>
        )
    )
}

export default PCB;