//current weather
var weatherObject = new XMLHttpRequest();
weatherObject.open('GET', 'HTTPS://api.openweathermap.org/data/2.5/weather?id=4903330&appid=882d3f3942f0a0f3cec4d5e5460d91c9&units=imperial', true);
weatherObject.send();
weatherObject.onload = function() {

    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    document.getElementById('value1').innerHTML = weatherInfo.weather[0].description;
    document.getElementById('temp').innerHTML = weatherInfo.main.temp;
    document.getElementById('humidity').innerHTML = weatherInfo.main.humidity;
    document.getElementById('windspeed').innerHTML = weatherInfo.wind.speed;
    document.getElementById('winddirection').innerHTML = Math.round(weatherInfo.wind.deg);

    calculatewc();
}

// JSON
function load() {
    var mydata = JSON.parse(data);
    var result = '';

    for (let i = 0; i < mydata.length; i++) {
        var item = mydata[i];

        item.templeNamesAndDates.forEach(function(namesAndDates) {
            if (namesAndDates.templeName === 'Nauvoo') {
                result += namesAndDates.dates.join('<br>') + '<hr>';
            }
        })

        document.getElementById('closedate').innerHTML = "Temple Closure Dates" + '<br>' + result;
    }
}