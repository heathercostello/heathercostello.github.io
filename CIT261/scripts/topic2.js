function Car(type, make, model, year) {
    this.carType = type;
    this.carMake = make;
    this.carModel = model;
    this.carYear = year;
}

Car.prototype.color = "White";

var myCar = new Car("Truck", "Ford", "F150", "2015");
document.getElementById("example2").innerHTML =
    "The color of my car is " + myCar.color;