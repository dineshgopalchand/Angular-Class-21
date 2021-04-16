const RED = '#ff0000';
const GREEN = '#00ff00';
const BLUE = '#0000ff';

const color = {
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
enum Color {
    'red' = '#ff0000',
    'green' = '#00ff00',
    'blue' = '#0000ff'
}

console.log(Color);
console.log(Color.blue);
// Color.blue = 'asdf';
// console.log(Color.blue);
