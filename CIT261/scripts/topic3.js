var myJSON = '{"Fruit":"Blueberry", "Vegetable":"Carrot", "Grain":"Pasta"}';
var myObj = JSON.parse(myJSON);
document.getElementById("example").innerHTML = myObj.Fruit;

var myJSON2 = '{"Fruit":"Blueberry", "Vegetable":"Carrot", "Grain":"Pasta"}';
var myObj2 = JSON.stringify(myJSON2);
document.getElementById("example2").innerHTML = myJSON2;