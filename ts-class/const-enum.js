var RED = '#ff0000';
var GREEN = '#00ff00';
var BLUE = '#0000ff';
var color = {
    RED: '#ff0000',
    GREEN: '#00ff00',
    BLUE: '#0000ff'
};
// color.BLUE = 'asdf'; // By using object property we can change value of object
// enum Color {
//     'red',
//     'green',
//     'blue'
// }
var Color;
(function (Color) {
    Color["red"] = "#ff0000";
    Color["green"] = "#00ff00";
    Color["blue"] = "#0000ff";
})(Color || (Color = {}));
console.log(Color);
console.log(Color.blue);
