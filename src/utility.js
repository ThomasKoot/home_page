export function pctString(value) {
    return "" + value * 100 + "%"
}

export function grayScale(n) {
    return 'rgb(' + n + "," + n + "," + n + ")"
}

export function selectedString(className, predicate) {
    return className + (predicate ? " " + className + "_selected" : "")
}