import React from 'react'
import { useState, useEffect } from 'react'
import { generateRandomSegment, initGrid } from './pcbFunctions'
import LineRenderer from './LineRenderer'
import { getMousePos } from './getMousePos'

// segments are defined with the following object structure {x, y, direction, length}

function PCB(props) {

    const gridSize = 32;
    const radius = 1;

    const [lines, setLines] = useState([])
    const [grid, setGrid] = useState(initGrid(gridSize));
    const [isTracking, setIsTracking] = useState(false);
    const [mousePos, setMousePos] = useState();

    let timeoutId;
    
    useEffect(() => {

        if(!props.isViewed) return

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

        timeoutId = setTimeout(addLine, 10)
    }, [lines, props.isViewed])

    function initialize() {
        setLines([]);
        setGrid(initGrid(gridSize))
        clearTimeout(timeoutId)
    }

    function checkMouse(e) {
        setMousePos(getMousePos(e))
    }
    console.log(mousePos)


    return (
        <div className="pcb_section">
            <div className="pcb_container" 
                onMouseEnter={() => setIsTracking(true)}
                onMouseLeave={()=> setIsTracking(false)}
                onMouseMove={isTracking ? checkMouse : null}>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <LineRenderer mousePos={isTracking ? mousePos : undefined} gridSize={gridSize} lines={lines} radius={radius} />
                </svg>
            </div>
            <div className="pcb_reset" >
                <p onClick={initialize} className="pcb_reset"><strong>genereer</strong></p>
            </div>
        </div>
    )
}

export default PCB;