export class Distance1 {

    // instance method
    details = {
        address: {
            name: {
                firstname: 'dinesh'
            }
        }
    };
    protected avg: number;
    constructor(private maximum: number, private minimum: number) {
        this.avg = (this.maximum + this.minimum) / 2;
    }

    public findDistance(): number {
        // this.minimum = 5;
        return this.maximum - this.minimum;
    }

    // getter property
    get max(): number {
        console.log('getter called');
        return this.maximum;
    }
    // setter property
    set max(value: number) {
        // if (this.minimum < value) {
        console.log('setter called');
        this.maximum = value;
        // }
    }
    // getter propery
    get firstName(): string {
        return this.details.address.name.firstname;
    }
}

let dObj1 = new Distance1(55, 20);

console.log(dObj1.findDistance());

console.log(dObj1.max);
dObj1.max = 75;

console.log(dObj1.details.address.name.firstname);
console.log(dObj1.firstName);
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


