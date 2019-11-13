// Check browser support
if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("Fruit", "Blueberry");
    // Retrieve
    document.getElementById("local").innerHTML = localStorage.getItem("Fruit");
} else {
    document.getElementById("local").innerHTML = "Sorry, your browser does not support Web Storage...";
}


function clickCounter() {
    if (typeof(Storage) !== "undefined") {
        if (sessionStorage.clickcount) {
            sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
        } else {
            sessionStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "You have clicked the button " + sessionStorage.clickcount + " time(s) in this session.";
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}