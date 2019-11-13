var text = "";
var i = 0;
while (i < 20) {
    text += "<br>The number is " + i;
    i++;
}
document.getElementById("example").innerHTML = text;


function canDrive(age, permitTime) {
    var age = parseInt(document.getElementById("driverAge").value);
    var parmitTime = parseInt(document.getElementById("permit").value);
    var outcome = "";
    if (age >= 16 && parmitTime >= 6) {
        output = "You can get your license!";
    } else if (age >= 16) {
        output = "You are old enough to get your license, but have not had your permit for long enough";
    } else {
        output = "I am sorry, you must be at least 16 and have had your permit for 6 months to get your license.";
    }
    document.getElementById("outcome").innerHTML = output;
}