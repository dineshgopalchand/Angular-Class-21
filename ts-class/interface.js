var findDistanceVal = function (distanceDetails) {
    return distanceDetails.maximum - distanceDetails.minimum;
};
var res1 = findDistanceVal({ maximum: 20, minimum: 30 });
console.log(res1);
