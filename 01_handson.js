//Classes
var Car = /** @class */ (function () {
    function Car(color, model) {
        this.color = color;
        this.model = model;
    }
    Car.prototype.startengine = function () {
        console.log("".concat(this.model, " engine started"));
    };
    return Car;
}());
var maruti = new Car("White", "Suzuki");
maruti.startengine();
