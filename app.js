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
