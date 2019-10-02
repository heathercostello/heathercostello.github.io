let weatherRequest = new XMLHttpRequest();
weatherRequest.open("GET", "http//api.openweathermap.org/data/2.5/weather?zip=83127,us&appid=d34d9f6fc8c50907471e335b2a10c60b&units=imperial", true);
weatherRequest.send();
weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherInfo);

    document.getElementById('place').innerHTML = weatherInfo.name;
    document.getElementById('currentTemp').innerHTML = weatherInfo.name;
}