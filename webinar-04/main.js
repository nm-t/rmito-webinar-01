// EVENT LISTENER
$('.pleaseListen').on("focus", function() {
    console.log('Print');
});

// EVENT LISTENER FOR MULTIPLE ELEMENTS OF THE SAME CLASS
$('.test').on("click", function() {
    console.log($(this));
});

// CALLBACKS
let doThisOnceDone = function() {
    console.log('Finished long stuff');
}
setTimeout(doThisOnceDone, 5000);

// SCOPE
let outerMost = 'Outermost string';

function scopeExample(myString) {
    let innerMost = 'I am inside a function';
    console.log(myString);

    console.log(outerMost);
    console.log(innerMost);

    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
    // console.log(i); // This results in an error - can't reach the i variable in the loop
}
scopeExample('Hello team');
// console.log(innerMost); // This results in an error - can't reach the innerMost variable in the function

// TEMPLATE LITERALS
function vanillaFunction(name) {
    console.log('Hello ' + name + ', how are you doing?');
}
vanillaFunction('Nathalia');

function templateLiterals(name) {
    console.log(`Hello ${name}, how are you doing?`);
}
templateLiterals('Nathalia');

// SETS/ARRAYS
let mySet = new Set(['Alice', 'Bob', 'Charlie', 'Alice', 'Bob']);
console.log(mySet);
console.log(mySet.size);
console.log(mySet.has('Bob'));

let myArray = ['Alice', 'Bob', 'Charlie', 'Alice', 'Bob'];
console.log(myArray);
console.log(myArray.length);
console.log(myArray.includes('Bob'));

// ARROW FUNCTIONS
function longhandFunction(x, y) {
    return x + y;
}
console.log(longhandFunction(3, 5));

let shorthandFunction = (x, y) => x + y;
console.log(shorthandFunction(3, 5));

// CLASSES AND OBJECTS
class Pet {
    name;
    friendly = true;
    sound;

    constructor(name) {
        this.name = name;
    }

    speak() {
        return this.sound + ' ' + this.sound.toLowerCase();
    }
}

class Cat extends Pet {
    sound = 'Meow';
    friendly = false;
}

let mrHuggles = new Cat('Huggles');
console.log(mrHuggles);

class Dog extends Pet {
    sound = 'Woof';
}

let woofers = new Dog('Woofers');
console.log(woofers);
console.log(woofers.speak());

// ZOMATO EXAMPLE
$.ajax({
    url: "https://developers.zomato.com/api/v2.1/categories",
    success: function(data) {
        console.log(data);
    },
    error: function() {
        console.log('Failed');
    }
});
