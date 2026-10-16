let penColor = "black"

function getColor(cell) {
    penColor = cell.style.backgroundColor
}

function setPixelColor(pixel) {
    pixel.style.backgroundColor = penColor
}