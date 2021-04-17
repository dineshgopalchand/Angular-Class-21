function sum(num1, num2) {
    return num1 + num2;
}
var result = sum(1, 3);
console.log(result);
// function sqrt(num: number): number {
//     return Math.sqrt(num);
// }
var sqrt = function (num) {
    return Math.sqrt(num);
};
console.log(sqrt(12));
var findDistance = function (distanceDetails) {
    return distanceDetails.maximum - distanceDetails.minimum;
};
var distance = {
    maximum: 6,
    minimum: 2
};
var r = findDistance(distance);
console.log(r);
// findDistance(6, 2);
