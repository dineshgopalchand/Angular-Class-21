interface DistanceType {
    maximum: number;
    minimum: number;
    avarage?: number; // "?" to make some property optional

}

let findDistanceVal = (distanceDetails: DistanceType): number => {
    return distanceDetails.maximum - distanceDetails.minimum;
};

// let res1 = findDistanceVal({ maximum: 20, minimum: 10, avarage: 32 });
let res1 = findDistanceVal({ maximum: 20, minimum: 10});
console.log(res1);
