var Distance = /** @class */ (function () {
    // constructor(value: Distance) {
    //     this.maximum = value.maximum;
    //     this.minimum = value.minimum;
    // }
    function Distance(value) {
        this.maximum = value.maximum;
        this.minimum = value.minimum;
    }
    // instance method
    Distance.prototype.findDistance = function () {
        return this.maximum - this.minimum;
    };
    Distance.prototype.showDistance = function () {
        var numberVal = 20;
        numberVal = 30;
        console.log(numberVal);
        return this.findDistance();
    };
    return Distance;
}());
var disObj = {
    maximum: 30,
    minimum: 15
};
var dObj = new Distance(disObj);
console.log(dObj.findDistance());
// dObj.minimum = 30;
// dObj.maximum = 60;
// console.log(dObj.findDistance());
