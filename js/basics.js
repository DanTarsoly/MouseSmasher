// -- Comments --

// This is a single line comment
/* This is 
a multiline comment*/

// -- Document Object Model --

// window.alert('This is an alert');
console.log('This is a console logging');
document.getElementById('text').innerHTML = 'Some new text';
document.getElementById('button').onclick = function() {
  console.log('CLICK!');
}

// -- VARIABLES --

// Const
const x = 10;
// x = 9;   Not allowed!
console.log(x);

// Let
let y = 11;
y = 12;
console.log(y);

// -- VARIABLE TYPES --

// Number
const number = 5;
console.log(number);

// String
const string = 'This is a string!'
console.log(string);

// Boolean
const boolean = true;
console.log(boolean);

// Array
const array = ['zero', 'one', 'two', 'three'];
console.log(array);
console.log(array[2]);

// Object
const person = {
  age: 20,
  name: 'John',
  married: false
}
console.log(person);
console.log(person.name);

// -- OPERATIONS --

// Arithmetic ops.
console.log(5 + 4);
console.log(5 - 4);
console.log(5 * 4);
console.log(5 / 4);
console.log(5 % 4);   //modulus
console.log(5 ** 4);  //exponentiation

// Comparison ops.
console.log(6 > 5);
console.log(6 < 5);
console.log(6 >= 5);
console.log(6 <= 6);
console.log(6 == 6);  //equals
console.log(6 != 6);  //not equals

// String ops.
const string1 = "I like";
const string2 = "pancakes!";
console.log(string1 + " " + string2);
console.log(string1.length);
console.log(string1.slice(2, string1.length));

// Logical ops.
const theSkyIsBlue = true;
const theGrassIsRed = false;
console.log(!theSkyIsBlue);  //not
console.log(theSkyIsBlue && theGrassIsRed); //and
console.log(theSkyIsBlue || theGrassIsRed); //or

// -- Functions --

// Declaration
function multiply(x, y) {
  return x * y;
}

// Call
console.log('3 * 4 = ' + multiply(3, 4));

// -- Conditions --

const number1 = 5;
const number2 = 4;
if ( number1 < number2) {
  console.log(number1 + " is smaller than " + number2);
} else {
  console.log(number1 + " is not smaller than " + number2);
}

// -- Switch case --

const seasonNum = 2;
switch (seasonNum) {
  case 1:
    console.log('Spring');
    break;
  case 2:
    console.log('Summer');
    break;
  case 3:
    console.log('Autumn');
    break;
  case 4:
    console.log('Winter');
    break;
  default:
    console.log('Not a season');
}

// -- Loops --

// For loop
for (i = 0; i < 10; i++) {
  console.log(i);
}

// While loop
let j = 0;
while (j < 10) {
  console.log(j);
  j = j + 1;
} 