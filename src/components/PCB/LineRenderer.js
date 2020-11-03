import React from 'react';

function LineRenderer({ gridSize, lines, radius, mousePos }) {

    function dist(a, b) {
        return Math.sqrt((a.x - b.x)**2 + (a.y-b.y)**2)
    }

    const mult = 100 / gridSize;
    return lines.map((e, i, a) => {
        const isLast = i === a.length - 1

        const x1 = e.x * mult
        const x2 = e.endX * mult
        const y1 = e.y * mult
        const y2 = e.endY * mult

        const mouseOver = mousePos ? 
                (dist(mousePos, {x: x1, y: y1}) < 10 || dist(mousePos, {x: x2, y: y2}) < 10 ?
                    true :
                    false) :
                false;


        const length = dist({x: x1, y: y1}, {x: x2, y: y2})
        const lineStyle = { strokeDashoffset: isLast ? length : 0,
                            strokeDasharray: length
                        }
        const circleStyle = {opacity: isLast ? 0 : 1}
        
        const gClassName = mouseOver ? "pcb pcb_hover" : "pcb"

        return (
            <g key={"" + e.x + e.endX + i} className={gClassName}>
                <line   className="pcb"
                        x1={x1} y1={y1} x2={x2} y2={y2}
                        style={lineStyle}
                        />
                <circle style={circleStyle} className="pcb start" cx={e.x * mult} cy={e.y * mult} r={radius}/> 
                <circle style={circleStyle} className="pcb end" cx={e.endX * mult} cy={e.endY * mult} r={radius}/> 
            </g>
        )
    })
}

export default LineRenderer;