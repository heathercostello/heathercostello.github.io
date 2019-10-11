function requestAPI() {
    var xhttp = new XMLHttpRequest();
    var results = document.getElementById('display');
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(xhttp.responseText);
            for (i = 0; i < 5; i++) {
                results.innerHTML += '<li>' + "kind: " + data.items[i].kind + ", " + "family: " + data.items[i].family + ", " +
                    "category: " + data.items[i].category + '</li>';
                console.log(data);
            }
        }
    }
    xhttp.open("GET", "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDGCSG48HaUElIeULsDvk5XyHfSh7gNGNM", true);
    xhttp.send();
};