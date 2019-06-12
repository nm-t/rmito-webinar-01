console.log('Hello world');
console.warn('A warning!');

var variableName;
var variableInteger = 5;

var variableString = 'String';
console.log(variableString); // You can use console.log to print variables.

variableString = 10; // Javascript is not strongly typed - it doesn't mind if you change a variable from string to integer.
console.log(variableString);

let variable = '';
var myCat = 'Daisy';
const myDog = 'Rufus'; // This is a constant - you can't change its value.

myCat = 'Diego';
// myDog = 'Sabre'; // <-- You can't reassign a constant once it's been set!

if (myCat == 'Fran') {
    console.log('Hi Fran!');
}
else {
    console.log('The cat is not Fran.');
}

let names = ['Cam', 'Roland', 'Mitch', 'Nathalia', 'Sabre', 'Michael'];

// You could print everything manually...
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);

// Or you could use a for loop!
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// You can repeat a process manually...
let sumOne = 1 + 1;
console.log(sumOne);
let sumTwo = 4 + 2;
console.log(sumTwo);

// Or you can use a function!
console.log(add(1, 1));
console.log(add(4, 2));
console.log(add(7, 4));
console.log(add(1, 6));

function add(integerOne, integerTwo) {
    return integerOne + integerTwo;
}

// jQuery
$('body').addClass('hello');

$('img').hide();
