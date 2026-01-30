console.log('===========================================');
console.log('=====> POKEMON TRAINER - OBJECTS ONLY <=====');
console.log('===========================================\n');

// ================ TASK 1: Trainer Object ================
const trainer = {
    name: 'Red',
    region: 'Kanto',
    badges: 8,
    age: 16,
    hometown: 'Pallet Town',
    catchRate: 0.85
};

// TASK 1a: Accede a name con dot notation


// TASK 1b: Accede a region con bracket notation
// TASK 1c: Imprime "Red from Kanto has 8 badges"

console.log('\n');

// ================ TASK 2: Pokemon Objects ================
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

// TASK 2a: Imprime el name y type de pikachu con template literal
// TASK 2b: Accede a baseStats.attack de charizard
// TASK 2c: Accede al segundo move de blastoise
// TASK 2d: Imprime "Pikachu (Electric) - Level 50 - HP: 95"

console.log('\n');

// ================ TASK 3: Team Array of Objects ================
const team = [pikachu, charizard, blastoise];

// TASK 3a: Imprime el nombre del primer Pokémon del equipo
// TASK 3b: Imprime el tipo del último Pokémon del equipo
// TASK 3c: Accede al tercer move del segundo Pokémon

console.log('\n');

// ================ TASK 4: Object.keys() y Object.values() ================
// TASK 4a: Object.keys(trainer) - imprime propiedades del trainer
// TASK 4b: Object.values(pikachu) - imprime valores de pikachu
// TASK 4c: Cuántas propiedades tiene charizard? (usa Object.keys().length)

console.log('\n');

// ================ TASK 5: Nested Access ================
// TASK 5a: Accede a 'defense' de baseStats de blastoise
// TASK 5b: Accede al primer move de pikachu
// TASK 5c: Crea una variable con el attack de charizard y úsala

console.log('\n');

// ================ TASK 6: Dynamic Property Access ================
const propertyToFind = 'level';
// TASK 6a: Usa bracket notation con la variable para acceder a pikachu.level
// TASK 6b: Crea un string 'baseStats' y accede a defense de charizard dinámicamente

console.log('\n');

// ================ TASK 7: Object.freeze() ================
// TASK 7a: Usa Object.freeze(trainer) para congelar el objeto
// TASK 7b: Intenta cambiar trainer.badges = 10 - ¿qué pasa?
// TASK 7c: Intenta agregar una propiedad nueva - ¿qué pasa?
// TASK 7d: Imprime trainer para ver si cambió

console.log('\n');

// ================ TASK 8: Delete Property ================
const tempPokemon = {
    name: 'Meowth',
    type: 'Normal',
    level: 20,
    hp: 40,
    caught: true
};

// TASK 8a: Imprime tempPokemon completo
// TASK 8b: Delete tempPokemon.caught
// TASK 8c: Imprime tempPokemon de nuevo - ¿desapareció caught?

console.log('\n');

// ================ TASK 9: Bracket Notation con Strings Especiales ================
const abilities = {
    'thunder-bolt': 'Thunderbolt (100 power)',
    'quick-attack': 'Quick Attack (40 power)',
    'dragon-claw': 'Dragon Claw (80 power)'
};

// TASK 9a: Accede a 'thunder-bolt' (NO puedes con dot notation - ¿por qué?)
// TASK 9b: Accede a 'quick-attack' dinámicamente con una variable

console.log('\n');

// ================ TASK 10: Object.entries() ================
// TASK 10a: Object.entries(pikachu) - imprime pares clave-valor
// TASK 10b: Cuántos pares tiene blastoise?

console.log('\n');

// ================ BONUS: Resumen Final ================
// BONUS 1: Crea un objeto 'trainerProfile' que combine:
//         name, region, team (array de nombres), totalBadges, topPokemon (objeto)

// BONUS 2: Accede a todas las propiedades de trainerProfile

// BONUS 3: Usa Object.keys() y Object.values() en trainerProfile
