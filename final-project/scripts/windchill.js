function calculatewc() {
    let t = parseInt(document.getElementById('temp').textContent);
    let s = parseInt(document.getElementById('windspeed').textContent);

    let result = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, .16)) + (.4275 * t * Math.pow(s, .16));

    document.getElementById('output').innerHTML = "Wind Chill: <strong>" + result.toFixed(1) + "</strong>";
}