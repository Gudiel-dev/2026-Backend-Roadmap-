console.log('===========================================');
console.log('=====> POKEDEX MANAGER v1.0 <=====');
console.log('===========================================\n');

let myTeam = [];
let pcStorage = ['Charizard', 'Blastoise', 'Venusaur', 'Pikachu', 'Snorlax', 'Dragonite'];

console.log('Initial PC storage:');
console.table(pcStorage);

// TASK 1: Transfer first 3 Pokémon from pcStorage to myTeam
// Usa shift() en pcStorage y push() en myTeam

//Deleting 'Charizard'
console.log(`Deleting Charizard from pcStorage and placing it to myTeam`);
pcStorage.shift()
myTeam.push('Charizard');
console.log('Verifying transaction');
console.table(myTeam);

//Deleting 'Blastoise'
console.log(`Deleting Blastoise from pcStorage and placing it to myTeam`);
pcStorage.shift();
myTeam.push('Blastoise');
console.log('Verifiying transaction');
console.table(myTeam);

//Deleting 'Venusaur'
console.log(`Deleting Venusaur from pcStorage and placing it to myTeam`);
pcStorage.shift();
myTeam.push('Venusaur');
console.log('Verifiying transaction\n');



// TASK 2: Imprime equipo y PC restante (console.table)
console.log('---> myTeam <---');
console.table(myTeam);
console.log('---> pcStorage <---');
console.table(pcStorage);

// TASK 3: Simula que el último de myTeam se cansa (pop)
let pokemonTired = myTeam.pop();
console.log(`Last pokemon: ${pokemonTired} is tired, back to the pokeball`);
console.log('Pokemon team:')
console.table(myTeam);

// Guárdalo en una variable y muestra un mensaje tipo:
// already done in the code above


// "El Pokémon X está cansado, vuelve a la Pokébola."
// already done in the code above 


// TASK 4: Mete un nuevo Pokémon desde pcStorage al inicio del team
// Usa shift() + unshift()
pcStorage.shift();
myTeam.unshift('Pikachu');

console.log('\n');
console.log('\n');
console.log('List of Pokémons on myTeam:');
console.table(myTeam);
console.log('List of Pokémons on pcStorage:');
console.table(pcStorage);


// TASK 5: Recorre myTeam con forEach y muestra:
// "Slot #1: Nombre", etc.

myTeam.forEach( (pokemon, index) => {
    console.log(`Slot #${index + 1}: ${pokemon}`);
})