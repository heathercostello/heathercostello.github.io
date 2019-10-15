// File: cssManipulation.js
function changeFontColor() {
    var colorValue = document.getElementById("fontColor").value;
    document.getElementById("text").style.color = colorValue;
}

function changeFontSize() {
    var fontSize = document.getElementById("fontSize").value;
    document.getElementById("text").style.fontSize = fontSize + 'px';
}

function adjustPixels(pixels) {
    document.getElementById("textSliderOutput").innerHTML = pixels + ' px';
}