function sum(num1: number, num2: number): number {
    return num1 + num2;
}

let result = sum(1, 3);
console.log(result);


// function sqrt(num: number): number {
//     return Math.sqrt(num);
// }
const sqrt = (num: number): number => {
    return Math.sqrt(num);
};

console.log(sqrt(12));

type distanceType = {
    maximum: number,
    minimum: number
};

let findDistance = (distanceDetails: distanceType): number => {
    return distanceDetails.maximum - distanceDetails.minimum;
};

let distance: distanceType = {
    maximum: 6,
    minimum: 2
};
let r = findDistance(distance);
console.log(r);
// findDistance(6, 2);



