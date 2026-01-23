console.log('==========================');
console.log('======> Solution I <======');
console.log('==========================');
// Exercise 1: Gym Leaders array
let gymLeaders = ['Brock', 'Misty', 'Lt. Surge'];
// Add 'Erika' to end
// Add 'Giovanni' to end
// Print total leaders
console.log('Adding Erika to the gym leaders list');
gymLeaders.push( 'Erika' );
console.table(gymLeaders);

console.log('Adding Giovanni to the gym leaders list');
gymLeaders.push( 'Giovanni' );
console.log('The new list with all the leaders')
console.table(gymLeaders);

console.log('\n')
console.log('\n')





// Exercise 2: Catch Pokemon
console.log('==========================');
console.log('======> Solution II <=====');
console.log('==========================');
let caught = ['Pidgey', 'Rattata'];
// Catch 'Pikachu' (add to end)
// Release first Pokemon (remove from start)
// Print final caught Pokemon
console.log('Original list');
console.table(caught);

caught.push('Pikachu');
console.log('After catching Pikachu');
console.table(caught);

console.log('Releasing first pokemon from start');
caught.shift();
console.table(caught);

console.log('\n')
console.log('\n')



// Exercise 3: Find Pokemon
console.log('==========================');
console.log('=====> Solution III <=====');
console.log('==========================');
let team = ['Charizard', 'Blastoise', 'Venusaur'];
// Check if 'Mewtwo' is in team[x]
// Find index of 'Blastoise'

console.log('Given the current table, we are gonna find if Mewtwo is in the team and the index of Blastoise');
console.table(team);
console.log(`Is Mewtwo in the list?: ${team.includes('Mewtwo')}`);
console.log(`The index of Blastoise is: ${team.indexOf('Blastoise')}`);


console.log('\n')
console.log('\n')


// Exercise 4: Items inventory
console.log('==========================');
console.log('=====> Solution IV <======');
console.log('==========================');
let items = ['Potion', 'Pokeball', 'Antidote', 'Pokeball'];
// Count total items
// Find first Pokeball position
// Check if 'Revive' exists
console.log(`Given the next table:`);
console.table(items);
console.log(`Total ammount of items: ${items.length}`);
console.log(`The position of the first pokeball is: ${ items.indexOf( 'Pokeball' ) }`);
console.log(`Is revive in the list?: ${items.includes('Revive')}`);


console.log('\n')
console.log('\n')

// Exercise 5: Nested arrays
console.log('==========================');
console.log('=====> Solution V <=======');
console.log('==========================');
let regions = [
    ['Kanto', 'Johto'],
    ['Hoenn', 'Sinnoh']
];
// Print 'Johto'
// Print 'Sinnoh'

console.log(regions[0][1]);
console.log(regions[1][1]);