var Gearbox;
(function (Gearbox) {
    Gearbox[Gearbox["manual"] = 0] = "manual";
    Gearbox[Gearbox["automatic"] = 1] = "automatic";
    Gearbox[Gearbox["robotic"] = 2] = "robotic";
    Gearbox[Gearbox["variable"] = 3] = "variable";
})(Gearbox || (Gearbox = {}));
var myCar = {
    carName: 'Lada',
    model: '2106',
    color: 'green'
};
var myNewCar = {
    gearbox: Gearbox[1],
    carId: 1,
    carName: 'Volvo',
    model: 'S40',
    price: 9500
};
console.log(myCar);
console.log(myNewCar);
