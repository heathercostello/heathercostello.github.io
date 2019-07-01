constant weatherObject = new XMLHttpRequest();
weatherObject.open("GET", "//api.openweathermap.org/data/2.5/weather?zip=83127,us,us&appid=d34d9f6fc8c50907471e335b2a10c60b", true)
weatherObject.send();
weatherObject.onload = function() {
        let weatherInfo = JSON.parse(weatherObject.responseText);
        console.log(weatherInfo);
    } // end of onload