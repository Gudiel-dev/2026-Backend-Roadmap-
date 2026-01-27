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
console.log('---------------> Arrays I <----------------');
console.log('==========================================='+'\n');

// Here we are initializing an array with 10 items
// const arr1 = new Array(10);
// console.log(`This is an array with 10 itmes: ${arr1}`);

// While here, were are initializing an empty array
// const arr2 = [];
// console.log(`This is an empty array ${arr2}`);
// console.log(arr2);

let pokemons = ['Bulbasaur', 'Charmander', 'Squirtle', 'Pikachu'];
// To actually print the array we use brackets {}
console.log({pokemons});

// Priting the first element of the Array
console.log(`1st Pokemon of the list is: ${pokemons[0]}\n`);
// Being Bulbasaur the first one having the index 0

//Array of stuff
let arrayStuff = [
    true,
    123,
    'Charmander',
    2 + 2,
    function(){},
    ()=>{},
    { a: 1 },
    ['Ash', 'Misty', 'Team-Rocket',['Jessie','James','Meowth']]
]
console.log(`Array "arrayStuff" has ${arrayStuff.length} items: `);
console.log(arrayStuff);

// Exersices
console.log(`Let's defeat the Team-Rocket from the array, hurry up!`);
console.log(`The ${arrayStuff[7][2]} has been defeated again. Good job!\n`);
console.log(`Now, let's interview ${arrayStuff[7][3][3]} so he would tell us how he's learnt to speak`);
console.log('\n');


console.log('===========================================');
console.log('---------------> Arrays II <---------------');
console.log('==========================================='+'\n');
//Properties and basic arrays' methods

let pokemonsFire = ['Charmander', 'Charizard', 'Vulpix', 'Arcanine', 'Flareon', 'Typhlosion', 'Torchic', 'Infernape', 'Emboar'];
// Gotta Catch 'Em All
console.log(`I've captured: ${pokemonsFire.length} pokemons of fire!!`);
console.table(pokemonsFire);

//First pokemon of the array
let firstPokemon = pokemonsFire[0];
console.log(`The first pokemom is: ${firstPokemon}`);

// Last pokemon of the list
let lastPokemon = pokemonsFire[pokemonsFire.length-1];
console.log(`The last pokemom is: ${lastPokemon}`);

// Array and for-each 
pokemonsFire.forEach((Element, index, arr) => {
    console.log({Element, index, arr});
});

//Add an item to the array

let newFirePokemonList = pokemonsFire.push('Magmar');
console.log(`List of pokemons after the update are: ${pokemonsFire.length}`);
// console.table(console.table(pokemonsFire));
console.log({ newFirePokemonList, pokemonsFire});

newFirePokemonList = pokemonsFire.unshift('Moltres');
console.log({newFirePokemonList});
console.table(pokemonsFire);


// Arreglo Original
let items = ['Cuadrado', 'Esfera', 'Circulo'];

console.log(`Exagono was added to the last`);
let nuevaLongitud = items.push('Exagono');
// console.log(nuevaLongitud, items);
console.log(nuevaLongitud, items);

console.log('Octagon was added to the start');
nuevaLongitud = items.unshift('Octagon');
console.log(nuevaLongitud, items);

// Remove from end (pop)
console.log('\n--- Removing last Pokemon ---');
let removed = pokemonsFire.pop(); // quita 'Emboar'
console.log(`Removed: ${removed}`);
console.log(`New length: ${pokemonsFire.length}`);
console.table(pokemonsFire);

// Remove from start (shift)  
console.log('\n--- Removing first Pokemon ---');
removed = pokemonsFire.shift(); // quita 'Charmander'
console.log(`Removed: ${removed}`);
console.log(`New length: ${pokemonsFire.length}`);
console.table(pokemonsFire);

// splice() - remove by index
console.log('\n--- Remove Vulpix (index 1) ---');
let spliced = pokemonsFire.splice(1, 1); // quita 1 elemento en index 1
console.log(`Removed:`, spliced);
console.table(pokemonsFire);

// indexOf + includes
console.log('\n--- Search methods ---');
console.log(`Index of Arcanine: ${pokemonsFire.indexOf('Arcanine')}`);
console.log(`Has Pikachu?: ${pokemonsFire.includes('Pikachu')}`);

// ##################################
// ##################################
console.log('\n');
console.log('\n');

console.log('==========================');
console.log('=====> Object literals <=====');
console.log('==========================\n');


let character = {
    age: 17,
    height: 174,
    name: 'Vis',
    lastName: 'Catenicus',
    alive: true,
    friends: {
        friendName1: 'Aequa Claudius',
        friendName2: 'Callidus Ericius',
        friendName3: 'Emissa Corenius',
    },
    parents:['Ulciscor Telimus', 'Relucia Telimus'],
    items:['a', 'b', 'c', 'd', 'e', 'f'],
};
console.log( character );
//Picking up the name v1
console.log(`Character's name V1: ${character.name}`);
//Picking up the name v2
console.log(`Character's name V2: ${character['name']}`);
//Picking up the age
console.log(`Vis' Age: ${character.age}`);
//Friends
console.log(`Friends:   
            ${character.friends.friendName1}, 
            ${character.friends.friendName2}, 
            ${character.friends.friendName3},
                        `);
// Vis paretns
console.log(`Vis mother's name: ${character.parents[1]} `)

// items
console.log(`Last item: ${character.items[character.items.length-1]}`);

const x = 'alive';
console.log('Alive', character[x]);