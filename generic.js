var OneMoreCar = /** @class */ (function () {
    function OneMoreCar(carMileage, carModel) {
        this.carMileage = carMileage;
        this.carModel = carModel;
    }
    OneMoreCar.prototype.printCar = function () {
        console.log("".concat(this.carMileage, " - car mileage, ").concat(this.carModel, " - car model"));
    };
    return OneMoreCar;
}());
var moskvich = new OneMoreCar(150000, '2141');
moskvich.printCar();
var ford = new OneMoreCar('many miles', 'Skorpio');
ford.printCar();
