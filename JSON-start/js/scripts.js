const weatherObject = new XMLHttpRequest();
weatherObject.open("GET", "http//api.openweathermap.org/data/2.5/weather?zip=83127,us&appid=d34d9f6fc8c50907471e335b2a10c60b&units=imperial", true);
weatherObject.send();
weatherObject.onload = function() {
    let weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    document.getElementById('place').innerHTML = weatherInfo.name;
}