
interface DistanceType {
    maximum: number;
    minimum: number;
}

class Distance {

    // instance property
    // public maximum: number;
    // public minimum: number;
    private maximum: number;
    private minimum: number;

    // constructor(value: Distance) {
    //     this.maximum = value.maximum;
    //     this.minimum = value.minimum;
    // }
    constructor(value: DistanceType) {
        this.maximum = value.maximum;
        this.minimum = value.minimum;
    }
    // instance method
    findDistance(): number {
        // this.minimum = 5;
        return this.maximum - this.minimum;
    }
    showDistance(): number {
        let numberVal = 20;
        numberVal = 30;
        console.log(numberVal);
        return this.findDistance();
    }
}

let disObj: DistanceType = {
    maximum: 30,
    minimum: 15
};

let dObj = new Distance(disObj);

console.log(dObj.findDistance());
// dObj.minimum = 30;
// dObj.maximum = 60;
console.log(dObj.findDistance());

