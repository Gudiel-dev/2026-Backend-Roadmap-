console.log('===========================================');
console.log('=====> Arrays II - Exercises <=====');
console.log('===========================================\n');

// Exercise 1: Pokedex Management
console.log('Exercise 1: Pokedex Management');
console.log('______________________________\n');

let pokedex = ['Bulbasaur', 'Ivysaur', 'Venusaur'];
// Add 'Charmander' and 'Charmeleon' to the end
// Print total Pokemon caught

console.log('Original pokemon list');
console.table(pokedex);
pokedex.push('Charmander','Charmeleon');

console.log('Charmander and Charmeleon captured');
console.table(pokedex);

//##########################################################################
//##########################################################################

console.log('\n');
console.log('Exercise 2: Battle Team');
console.log('_______________________\n');

let team = ['Pikachu', 'Eevee', 'Snorlax', 'Mewtwo'];
// Remove the first Pokemon (fainted)
// Add 'Dragonite' to the start (replacement)
// Print the removed Pokemon and new team
// YOUR CODE HERE
console.log('The original team is:');
console.table(team);

let pokemonDeleted = team.shift();
console.log(`The pokemon ${pokemonDeleted} is tired`);
console.table(team);
console.log('The pokemon Dragonite is added to the start!');
team.unshift('Dragonite');
let newPokemon = team[0];
console.table(team);

console.log(`New pokemon is: ${newPokemon} and deleted one: ${pokemonDeleted}`);
//##########################################################################
//##########################################################################

console.log('\n');
console.log('Exercise 3: Gym Badges');
console.log('_______________________\n');

let badges = ['Boulder', 'Cascade', 'Thunder', 'Rainbow'];

// YOUR CODE HERE
// Check if you have 'Soul' badge
console.log(badges.includes('Soul'));
// Add 'Marsh' badge to the end
badges.push('Marsh');
console.table(badges);
// Find the position of 'Thunder' badge
console.log(`Thunder's position is: ${badges.indexOf('Thunder')}`);

console.log('\n');
console.log('\n');

//##########################################################################
//##########################################################################

console.log('\n');
console.log('Exercise 4: Item Cleanup');
console.log('_______________________\n');
let bag = ['Potion', 'Antidote', 'Pokeball', 'Potion', 'Revive'];
let originalStock = bag.length;

// YOUR CODE HERE
// Remove the last item
console.table(bag)
let removeLastPokemon = bag.pop();
console.log(bag);

// Check how many items remain
console.log(`Original Stock: ${originalStock} New stock${bag.length}`);
// Find the index of the first 'Potion'
console.log(`Index 1st potion: ${bag.indexOf('Potion')}`);

console.log('\n');
console.log('\n');


// 
console.log('\n');
console.log('Exercise 5: Pokemon Evolution');
console.log('_______________________\n');
let pokemon = ['Charmander', 'Wartortle', 'Ivysaur'];



// Add 'Venusaur' to the end
// YOUR CODE HERE
console.log('Original elements');
console.table(pokemon);
// Replace 'Charmander' with 'Charmeleon' using splice(index, 1, 'new')
console.log('Replacing Charmander for Charmeleon');
// let newPokemonList = pokemon.splice(0,1, 'Charmeleon' );
console.log(pokemon.splice(0,1, 'Charmeleon' ));
// console.table(newPokemonList);
console.table(pokemon);

// Remove 'Wartortle' by index
let indexPokemon = pokemon.indexOf('Ivysaur');
// console.log(indexPokemon);
console.log(pokemon.splice(indexPokemon, 1));
console.log(pokemon);

// Add 'Venusaur' to the end
pokemon.push('Venusaur');
console.table(pokemon);






// 
console.log('\n');
console.log('Exercise 6: Nested Pokedex');
console.log('_______________________\n');
let regionPokedex = [
    ['Bulbasaur', 'Charmander', 'Squirtle'],
    ['Chikorita', 'Cyndaquil', 'Totodile']
];
// Print all Kanto starters (first array)
// Print the second Johto starter
// Add 'Pikachu' to Kanto starters
// YOUR CODE HERE

// Print all Kanto starters (first array)
console.log(`The Kanto starters are: ${regionPokedex[0]}`);
console.log(`The Johto starters are: ${regionPokedex[1]}`);

// Print the second Johto starter
console.log(`2nd Johto starter is: ${regionPokedex[1][1]}`);

// Add 'Pikachu' to Kanto starters
regionPokedex[0].push('Pikachu');
console.table(regionPokedex[0]);




// 
console.log('\n');
console.log('Exercise 7: forEach Practice');
console.log('_______________________\n');
let types = ['Fire', 'Water', 'Grass', 'Electric'];
// Use forEach to print: "Type #1: Fire", "Type #2: Water"...
// YOUR CODE HERE
types.forEach((type, index) => {
    console.log(`Type #${index + 1}: ${type}`)
});




console.log('\n');
console.log('Exercise 8: Combo Methods');
console.log('_______________________\n');
let caught = ['Pidgey', 'Rattata', 'Zubat'];
// Add 'Pikachu' to end
// Remove first Pokemon
// Check if 'Zubat' is still in the array
// Print final array with console.table()
// YOUR CODE HERE

// Add 'Pikachu' to end
caught.push('Pikachu');
console.log('Pikachu has been added');
console.table(caught);

// Remove first Pokemon
pokemonDeleted = caught.shift();
console.log(`The pokemon deleted has been ${pokemonDeleted}`);

// Check if 'Zubat' is still in the array
console.log(`Is Zubat still in the list? ${caught.includes('Zubat')}`);

// Print final array with console.table()
console.table(caught);



// 
console.log('\n');
console.log('Exercise 9: Legendary Hunt');
console.log('_______________________\n');
let legendaries = ['Articuno', 'Zapdos', 'Moltres'];


// Check if 'Mewtwo' exists (should be false)
// Add 'Mewtwo' to the end
// Remove 'Zapdos' using splice (it's at index 1)
// Print remaining legendaries
// YOUR CODE HERE

// Check if 'Mewtwo' exists (should be false)
console.log(`Does Mewtwo exist?: ${legendaries.includes('Mewtwo')}`);
// Add 'Mewtwo' to the end
legendaries.push('Mewtwo');
console.table(legendaries);

// Remove 'Zapdos' using splice (it's at index 1)
let indexDeletePokemon = legendaries.indexOf('Zapdos');
legendaries.splice(indexDeletePokemon,1);
// Remaining legendaries
console.table(legendaries);



// 
console.log('\n');
console.log('Exercise 10: Advanced - Create Pokemon Storage');
console.log('_______________________\n');
let box1 = [];
// Add 5 Pokemon using push (one by one)
// Remove the middle Pokemon using splice
// Print first and last Pokemon
// Print total Pokemon in box
// Use forEach to print each with index
// YOUR CODE HERE
box1.push('Mewtwo', 'Mew', 'Pikachu', 'Charmander', 'Charizard');
console.table(box1); // 5 elementos

// 1. Encuentra índice del medio
let middleIndex = Math.round(box1.length / 2); // 3 (Pikachu)
console.log(`Middle index: ${middleIndex}`);

// 2. ELIMINA el elemento del medio
box1.splice(middleIndex, 1); // quita 1 elemento en posición 3
console.table(box1); // ya no tiene Pikachu

// 3. Primer y último
console.log(`First: ${box1[0]}, Last: ${box1[box1.length - 1]}`);
// 4. Total
console.log(`Total: ${box1.length}`);


