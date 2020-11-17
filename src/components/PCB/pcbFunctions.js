export const switchDirection = {
    N: (x, y, length = 1) => ({endX: x, endY: y - length}),
    NE: (x, y, length = 1) => ({endX: x + length, endY: y - length}),
    E: (x, y, length = 1) => ({endX: x + length, endY: y }),
    SE: (x, y, length = 1) => ({endX: x + length, endY: y + length}),
    S: (x, y, length = 1) => ({endX: x, endY: y + length}),
    SW: (x, y, length = 1) => ({endX: x - length, endY: y + length}),
    W: (x, y, length = 1) => ({endX: x - length, endY: y}),
    NW: (x, y, length = 1) => ({endX: x - length, endY: y - length}),
}

export function testSegment(segment, grid) {
    //checks if a segment does not intersect with a point on the grid and if the segment stays
    //within a circle with r = 1/2 gridsize.
    //returns false if the segment fails, returns the trace of the segment if it succeeded

    function testArea(segment, grid) {
        const gridSize = grid.length;
        const { endX, endY } = switchDirection[segment.direction](segment.x, segment.y, segment.length)
        return Math.sqrt((endX - .5 * gridSize)**2 + (endY - .5 * gridSize)**2) < .5 * gridSize
    }

    function testGrid(segment, grid) {
        const { x, y, direction, length } = segment;
        if (grid[x][y] === 1) return false;
        if (length === 0) return true;
        const nextStep = switchDirection[direction](x,y);
        return testGrid({ x: nextStep.endX, y: nextStep.endY, direction, length : length -1}, grid)
    }

    function calculateTrace(segment, trace = []) {
        const { x, y, direction, length } = segment;
        if (/\w\w/.test(direction) && trace[0] !== undefined) {
            const lastStep = trace[trace.length - 1];
            trace.push([x, lastStep[1]]);
            trace.push([lastStep[0], y]);
        }
        trace.push([x,y])
        if (length === 0) return {points: trace, direction};
        const nextStep = switchDirection[direction](x,y);
        return calculateTrace({ x: nextStep.endX, y: nextStep.endY, direction, length : length -1}, trace)
    }
 
    return testArea(segment, grid) === false ? false :
                testGrid(segment, grid) === false ? false :
                    calculateTrace(segment)
}

export function generateRandomSegment(grid, trace) {

    let segment = false;
    let count = 0;

    while(count < 10000 && (!segment)) {
        let x;
        let y;

        if (trace) {
            x = trace.points[trace.points.length-1][0];
            y = trace.points[trace.points.length-1][1];
        } else {
            const gridSize = grid.length;
            const angle = Math.random() * 2 * Math.PI;
            const magnitude = Math.random()
            x = Math.floor(Math.sin(angle) * magnitude * (.5 * (gridSize -2)) + .5 * gridSize)
            y = Math.floor(Math.cos(angle) * magnitude * (.5 * (gridSize -2)) + .5 * gridSize)
        }

        const direction = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"][randomN(8)];
        const length = randomN(8) + 2;
        segment = testSegment({x,y,direction,length}, grid)
        count += 1
    }

    return segment ? segment : false
}

export function initGrid(n) {
    function createArray(l, init = 0, arr = []) {
        while (arr.length < l) { arr.push(init) }
        return arr;
    }
    return createArray(n, createArray(n))
}

export function randomN(max) {
    return Math.floor(Math.random() * max)
}


