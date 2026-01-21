/* Fundamentals.js */
console.log('===========================================');
console.log('----> Initializing variables & typeof <----');
console.log('==========================================='+'\n');
// Declaring / initializing the variable
let nombre = 'Vis Catenicus';
console.log( `Original Character's name: ${nombre}` );

// Reassigning the variable
nombre = 'Aequa Claudius';
// console.log( nombre );

// Reassigning + printing its type
console.log(`New character's name: ${nombre} and its typeof: ` + typeof nombre + "\n");
//prints a string. 

let num1 = 1;
console.log(`Type of variable: ${num1} is: ` + typeof num1);

let boolean = true;
console.log(`Type of variable: ${boolean} is: ` + typeof boolean);
let num2 = 1.2;
console.log(`Type of variable: ${num2} is: ` + typeof num2);

let iamNull = null; 
console.log('typeof iamNull');

let symbol1 = Symbol('a');
let symbol2 = Symbol('a');
console.log(`Are Symbol 1 and Symbol2 equals?: ${symbol1 === symbol2 }`);


console.log('\n');
console.log('===========================================');
console.log('------------> Reserved words <-------------');
console.log('===========================================' + '\n');


// let function = 123;
//SyntaxError: Unexpected token 'function'
console.log(`Using the reserved word 'function' to declare a variable would gives us an error`);
console.log(`SyntaxError: Unexpected token 'function'`);
// Examples of reserved words (do NOT use as variable names)
// let, const, var, if, else, for, while, function, return, class, etc.

// ❌ WRONG - SyntaxError
// let let = 5;
// let function = "test";

// ✅ CORRECT
let myVariable = 5;
let myFunction = "test";


console.log('\n');

console.log('===========================================');
console.log('----------------> Arrays <-----------------');
console.log('==========================================='+'\n');