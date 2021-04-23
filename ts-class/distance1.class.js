class Distance1 {

    constructor(maximum, minimum) {
        this.maximum = maximum;
        this.minimum = minimum;
        this.avg = (this.maximum + this.minimum) / 2;
    }
    findDistance() {
        // this.minimum = 5;
        return this.maximum - this.minimum;
    }
    get max() {
        console.log('getter called');
        return this.maximum;
    }
    set max(value) {
        // if (this.minimum < value) {
        console.log('setter called');
        this.maximum = value;
        // }
    }
}
let dObj1 = new Distance1(55, 20);
console.log(dObj1.findDistance());
console.log(dObj1.max);
dObj1.max = 75;

console.log(dObj1.findDistance());
// class DistanceDetails extends Distance1 {
//     constructor(min: number, max: number) {
//         super(max, min);
//     }
//     showAvg(): number {
//         return this.avg;
//     }
// }
// let ddObject = new DistanceDetails(20, 60);
// ddObject.showAvg();