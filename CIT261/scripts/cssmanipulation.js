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



function myMove() {
    var elem = document.getElementById("animate");
    var pos = 0;
    var id = setInterval(frame, 5);

    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}