var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Drive;
(function (Drive) {
    var Cars = /** @class */ (function () {
        function Cars(name) {
            this.name = name;
        }
        return Cars;
    }());
    Drive.Cars = Cars;
    var Motorbike = /** @class */ (function () {
        function Motorbike(name) {
            this.name = name;
        }
        return Motorbike;
    }());
    Drive.Motorbike = Motorbike;
})(Drive || (Drive = {}));
/// <reference path="app.ts" />
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.setSerialNumber = function (num) {
        this.serialNumber = num;
    };
    Car.prototype.getSerialNumber = function () {
        return this.serialNumber;
    };
    return Car;
}());
var NewCar = /** @class */ (function (_super) {
    __extends(NewCar, _super);
    function NewCar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewCar.prototype.setCarName = function (name) {
        this.carName = name;
    };
    NewCar.prototype.setWeight = function (weight) {
        this.weight = weight;
    };
    NewCar.prototype.setBodyType = function (bodyType) {
        this.bodyType = bodyType;
    };
    NewCar.prototype.setColor = function (color) {
        this.color = color;
    };
    NewCar.prototype.printCar = function () {
        console.log("Car name - ".concat(this.carName, ",\ncar weight - ").concat(this.weight, " kg,\ncar body type - ").concat(this.bodyType, ",\ncar color - ").concat(this.color, ",")
        //car serian number - ${this.serialNumber} - do not working 
        );
    };
    return NewCar;
}(Car));
var CarMileage = /** @class */ (function (_super) {
    __extends(CarMileage, _super);
    function CarMileage(carFuel, carSpeed, carDistance) {
        var _this = _super.call(this) || this;
        _this.fuel = carFuel;
        _this.speed = carSpeed;
        _this.distance = carDistance;
        return _this;
    }
    CarMileage.prototype.setCarConsumption = function (distance, fuel) {
        this.consumption = (fuel / distance) * 100;
    };
    CarMileage.prototype.getCarConsumption = function () {
        return this.consumption;
    };
    return CarMileage;
}(Car));
var testCar = new CarMileage(20, 65, 270);
testCar.setCarConsumption(testCar.distance, testCar.fuel);
console.log("Car consumption is - ".concat(testCar.getCarConsumption().toFixed(2)));
var AnotherCar = /** @class */ (function (_super) {
    __extends(AnotherCar, _super);
    function AnotherCar(model) {
        var _this = _super.call(this) || this;
        _this.carModel = model;
        return _this;
    }
    AnotherCar.prototype.getCarModel = function () {
        console.log(this.carModel);
    };
    return AnotherCar;
}(Car));
var nissan = new NewCar;
nissan.setCarName('Nissan');
nissan.setBodyType('Sedan');
nissan.setColor('red');
nissan.setWeight(1500);
nissan.setSerialNumber(22300005556777);
nissan.printCar();
console.log(nissan.getSerialNumber());
var kia = new AnotherCar('Kia');
kia.getCarModel();
var audi = new Drive.Cars('Audi');
console.log(audi.name);
var suzuki = new Drive.Motorbike('Suzuki');
console.log(suzuki.name);
