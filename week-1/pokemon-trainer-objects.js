console.log('===========================================');
console.log('=====> POKEMON TRAINER - OBJECTS ONLY <=====');
console.log('===========================================\n');

// ================ TASK 1: Trainer Object ================
console.log('================ TASK 1: Trainer Object ================');
const trainer = {
    name: 'Red',
    region: 'Kanto',
    badges: 8,
    age: 16,
    hometown: 'Pallet Town',
    catchRate: 0.85
};
console.table(trainer);
// TASK 1a: Access name using dot notation
console.log(`Trainer's name: ${trainer.name}`);
// TASK 1b: Access region using bracket notation
console.log(`Trainer's region: ${trainer.region}`);
// TASK 1c: Print "Red from Kanto has 8 badges"
console.log(`${trainer.name} from ${trainer.region} has 8 badges!`);
console.log('\n');

// ================ TASK 2: Pokemon Objects ================
console.log('// ================ TASK 2: Pokemon Objects ================');
const pikachu = {
    name: 'Pikachu',
    type: 'Electric',
    level: 50,
    hp: 95,
    experience: 5000,
    baseStats: {
        attack: 55,
        defense: 40,
        spAtk: 50
    },
    moves: ['Thunderbolt', 'Quick Attack', 'Iron Tail', 'Thunder Wave']
};

const charizard = {
    name: 'Charizard',
    type: 'Fire/Flying',
    level: 60,
    hp: 120,
    experience: 8000,
    baseStats: {
        attack: 84,
        defense: 78,
        spAtk: 109
    },
    moves: ['Flamethrower', 'Dragon Claw', 'Fly', 'Solar Beam']
};

const blastoise = {
    name: 'Blastoise',
    type: 'Water',
    level: 55,
    hp: 110,
    experience: 6500,
    baseStats: {
        attack: 80,
        defense: 100,
        spAtk: 85
    },
    moves: ['Hydro Pump', 'Ice Beam', 'Aqua Jet', 'Recover']
};
console.log(pikachu);
console.log(charizard);
console.log(blastoise)
// TASK 2a: Print the name and type of pikachu using template literal
console.log(`Pokémon name: ${pikachu.name} Type: ${pikachu.type}.`);
// TASK 2b: Access baseStats.attack of charizard
console.log(`
${charizard.name}'s Battlestats: 
Attack:     ${charizard.baseStats.attack}
Defense:    ${charizard.baseStats.defense}
spAtk:      ${charizard.baseStats.spAtk}`);
console.log('\n');
// TASK 2c: Access the second move of blastoise
console.log(`${blastoise.name}'s second move is: ${blastoise.moves[1]}`);
console.log('\n');
// TASK 2d: Print "Pikachu (Electric) - Level 50 - HP: 95"
console.log(`${pikachu.name} (${pikachu.type}) - Level ${pikachu.level} - HP: ${pikachu.hp}`);
console.log('\n');

// ================ TASK 3: Team Array of Objects ================
console.log('================ TASK 3: Team Array of Objects ================');
const team = [pikachu, charizard, blastoise];

// TASK 3a: Print the name of the first Pokemon in the team
console.log(`1st Pokemon is: ${team[0].name}.`);

// TASK 3b: Print the type of the last Pokemon in the team
console.log(`3rd Pokemon type is: ${team[2].type}.`);
// TASK 3c: Access the third move of the second Pokemon
console.log(`3rd move of 2nd Pokemon is: ${team[1].moves[2]}.`);
console.log('\n');

// ================ TASK 4: Object.keys() and Object.values() ================
console.log('================ TASK 4: Object.keys() and Object.values() ================');
console.log('\n');

// TASK 4a: Object.keys(trainer) - print trainer properties
console.log('Trainer properties');
const trainerProperties = Object.keys(trainer);
console.log(trainerProperties);
console.log('\n');
// TASK 4b: Object.values(pikachu) - print pikachu values
console.log('Pikachu object values');
const pikachuValues = Object.values(pikachu);
console.log(pikachuValues);
console.log('\n');
// TASK 4c: How many properties does charizard have? (use Object.keys().length)
console.log(`${charizard.name}'s properties are: `);
const propertiesLength = Object.keys(charizard).length;
console.log(propertiesLength);

console.log('\n');

// ================ TASK 5: Nested Access ================
console.log('================ TASK 5: Nested Access ================');
console.log('\n');
// TASK 5a: Access 'defense' from baseStats of blastoise
console.log(`${blastoise.name}'s Defense stat: ${blastoise.baseStats.defense}`);
// TASK 5b: Access the first move of pikachu
console.log(`${pikachu.name}'s 1st move: ${pikachu.moves[0]}`);
// TASK 5c: Create a variable with charizard's attack and use it
const charizardAttack = charizard.baseStats.attack;
console.log(`${charizard.name}'s Attack: ${charizardAttack} `);
// console.log(charizardAttack);
console.log('\n');

// ================ TASK 6: Dynamic Property Access ================
console.log('================ TASK 6: Dynamic Property Access ================');
console.log('\n');
const propertyToFind = 'level';
// TASK 6a: Use bracket notation with variable to access pikachu.level
console.log(`${pikachu.name}'s level: ${pikachu[propertyToFind]}`);
// TASK 6b: Create a string 'baseStats' and dynamically access charizard's defense
const baseStats = 'baseStats';
console.log(`${charizard.name}'s Stats ${charizard[baseStats].defense}`);

console.log('\n');

// ================ TASK 7: Object.freeze() ================
console.log('================ TASK 7: Object.freeze() ================');
// TASK 7a: Use Object.freeze(trainer) to freeze the object
Object.freeze(trainer);
// TASK 7b: Try to change trainer.badges = 10 - what happens?
trainer.badges = 50;
console.log(trainer.badges);
// TASK 7c: Try to add a new property - what happens?
trainer.sex = 'Male';

// TASK 7d: Print trainer to see if it changed
console.log(trainer);
console.log('\n');

// ================ TASK 8: Delete Property ================
console.log('================ TASK 8: Delete Property ================');
const tempPokemon = {
    name: 'Meowth',
    type: 'Normal',
    level: 20,
    hp: 40,
    caught: true
};

// TASK 8a: Print tempPokemon completely
console.table(tempPokemon);
// TASK 8b: Delete tempPokemon.caught'
delete tempPokemon.caught;

// TASK 8c: Print tempPokemon again - did caught disappear?
console.table(tempPokemon);
console.log('\n');

// ================ TASK 9: Bracket Notation with Special Strings ================
console.log('================ TASK 9: Bracket Notation with Special Strings ================');
const abilities = {
    'thunder-bolt': 'Thunderbolt (100 power)',
    'quick-attack': 'Quick Attack (40 power)',
    'dragon-claw': 'Dragon Claw (80 power)'
};

// TASK 9a: Access 'thunder-bolt' (you CANNOT use dot notation - why?)
// Method 1
// Direct access - use when accessing once
console.log('Direct access - use when accessing once');
console.log(abilities["thunder-bolt"]);
console.log('\n');


// Store in variable - use when reusing the value multiple times
console.log(`Store in variable - use when reusing the value multiple times`);
const thunderbolt = abilities["thunder-bolt"];
console.log(thunderbolt);
console.log('\n');


// TASK 9b: Access 'quick-attack' dynamically with a variable
console.log(`Access 'quick-attack' dynamically with a variable`);
const quickAttack = abilities["quick-attack"];
console.log(quickAttack);
console.log('\n');

// ================ TASK 10: Object.entries() ================
console.log('================ TASK 10: Object.entries() ================');
// TASK 10a: Object.entries(pikachu) - print key-value pairs
console.log('Entires Key-value pairs');
const entriesPares = Object.entries(pikachu);
console.log(entriesPares);
// TASK 10b: How many pairs does blastoise have?
const entriesParesBlastoise = Object.entries(blastoise);
console.log(`${blastoise.name}'s number of entries are: ${entriesParesBlastoise.length}`);

console.log('\n');

// ================ BONUS: Final Summary ================
// BONUS 1: Create a 'trainerProfile' object that combines:
//          name, region, team (array of names), totalBadges, topPokemon (object)
let trainerProfile = {
    trainerName: 'Helios',
    region: 'Kalos',
    team: ['Mew', 'Mewtwo', 'Charizard', 'Jynx', 'Lugia'],
    totalBadges: 15,
    topPokemon: {
        pokeName: 'Mewtwo',
        type: 'psychic',
        level: 10,
        defense: 90,
        spAtk:	154,
        spDef: 90,
        hp: 106,
        attack: 110,    
        speed: 130,
    }
}
// BONUS 2: Access all properties of trainerProfile
console.log('Access all properties of trainerProfile');
console.log(trainerProfile);

// BONUS 3: Use Object.keys() and Object.values() on trainerProfile
const keysTrainer = Object.keys(trainerProfile);
const valuesTrainer = Object.values( trainerProfile);

console.log('Keys & Values');
console.log( {keysTrainer,valuesTrainer} );
