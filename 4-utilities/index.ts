enum POKEMON_TYPE {
    Fire = 'fire',
    Water = 'water',
    Grass = 'grass',
}

type POKEMON = {
    index: number | string;
    name: string;
    attack?: {name: string, power: number};
    type?: POKEMON_TYPE;
}

/**
 * Readonly
 */
const pokemon_1: POKEMON = {index: 1, name: 'Bulbasaur', attack: {name: 'Tackle', power: 13}}; 
const pokemon_2: POKEMON = {index: 4, name: 'Charmander', attack: {name: 'Scratch', power: 15}}; 
const pokemon_3: POKEMON = {index: 7, name: 'Squirtle', attack: {name: 'Tail Whip', power: 11}};

// const initialPokemons = [pokemon_1, pokemon_2, pokemon_3];
// const pokemon_4: POKEMON = {index: 150, name: 'Mewtwo', attack: 'Confusion'};
// initialPokemons.push(pokemon_4); // Push is something that JS allows to do to an array, but if we want an array to have a fixed length and don't allow to add more elements?

const initialPokemons: Readonly<POKEMON[]> = [pokemon_1, pokemon_2, pokemon_3]; // With readonly, we lock the property to his initial state. And we also can specify the type, in this case POKEMON array
initialPokemons.push(pokemon_4); // Now we have an error if we try to push into this array.

/**
 * Partial
 */
 // With Partial, we say to TS that this const is not an POKEMON yet, but it will be.
 function createPokemon(): POKEMON {
    //const pokemon: POKEMON = {}; // TS will mark pokemon with error because, when we create it, it doesn't have all the needed POKEMON properties.
    const pokemon: Partial<POKEMON> = {};
    pokemon.name = 'Mewtwo';
    pokemon.index = 150;
    pokemon.attack = {name: 'Confusion', power: 135};
    return pokemon as POKEMON;
}

/**
 * Required
 */
// If we have a scenario where an object with non required properties was created but a certain point, all the properties need to be fulfilled
 function createPokemonAPI(pokemon: Required<POKEMON>) {
    console.log("Saved...");
}

const pokemonToAPI: POKEMON = {index: 150, name: 'Mewtwo'};
createPokemonAPI(pokemonToAPI); // To create a POKEMON with just need to give him an index and a name, but since this function REQUIRES a full POKEMON, we need to create one with all the fields.
// Very used in React with Props.

/**
 * Record
 */
// When we want to create an object with the new keys, this key names came from another type object.
const pokemonsByType: Record<POKEMON_TYPE, POKEMON> = {
    "fire": {
        index: 4, name: 'Charmander', attack: {name: 'Scratch', power: 15}
    },
    "water": {
        index: 7, name: 'Squirtle', attack: {name: 'Tail Whip', power: 11}
    },
    "grass": {
        index: 1, name: 'Bulbasaur', attack: {name: 'Tackle', power: 13}
    }
};

/**
 * Pick
 */
// Grab a type from a property of an object type
function addNewAttackToPokemon(pokemon: POKEMON, newAttack: Pick<POKEMON, 'attack'>): POKEMON { // THis way we can specify the type that we need without need to extrack the attack type to outside of POKEMON type
    pokemon.attack = newAttack.attack;
    return pokemon;
}

const bulbasaur: POKEMON = {index: 1, name: 'Bulbasaur'}; 
addNewAttackToPokemon(bulbasaur, { attack: {name: 'Tackle', power: 13}});

/**
 * There is a bunch of utilities more, you can check them here https://www.typescriptlang.org/docs/handbook/utility-types.html
 */