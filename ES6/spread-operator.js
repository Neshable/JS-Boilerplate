// Spread Operator Example Usage

// Easy way to combine two arrays into one with spread operator

let passed = ['Robert', 'Merry', 'Bob'];
let notpassed = ['John', 'Jully'];

let all = [...passed, ...notpassed]; // [ 'Robert', 'Merry', 'Bob', 'John', 'Jully' ]


// Push new array to existing one

let oldArr = ['Robert', 'Merry', 'Bob'];
let newArr = [...oldArr, 'John', 'Jully']; // [ 'Robert', 'Merry', 'Bob', 'John', 'Jully' ]

// Using spread in functions

let addNumbers = (x, y, z) => {
 return x * (y + z); // Some math formula
}

let exampleNum = [2, 7, 8];

console.log(addNumbers(...exampleNum)); // Using spread operator directly in function