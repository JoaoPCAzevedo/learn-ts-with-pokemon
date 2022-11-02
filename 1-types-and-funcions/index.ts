/**
 * Core types (same for JS and TS)
*/
// number -> 1 or 45.6 or -10
// string -> 'AAA' or "BBB" or `CCC`
// boolean -> true or false
// object
// array

// Important, doesn't change our runtime code, it only helps during the dev proccess, because browsers doesn't support TS

// Why are "Type safety" is useful and offer an advantage compare to vanilla JavaScript?
// Helps avoid errors, warning the developer to errors during the development time.

/**
 * INTERFACE, TS ONLY
 */
// A definition that can define a JS object with any kind of complexity.
interface POKEMON {
    id: number;
    name: string;
}

const pokemon: POKEMON = {
    id: 1,
    name: "bulbasaur"
}

console.log(pokemon.name); // Autocomplete
console.log(pokemon.type); // TS knows that type doesn't exist

/**
 * TUPLES, TS ONLY
 */
base_experience: [number, string]
// In this case is like an normal array, but we can see that, it has a special feature, we are saying that this array has a fixed length and specific type in each position

interface POKEMON {
    id: number;
    name: string;
    base_experience: [number, string]
}

const pokemon: POKEMON = {
    id: 1,
    name: "bulbasaur",
    base_experience: [64, '六十四']
}

// base_experience[0] = 64

/**
 * ENUMS, TS ONLY
 */
// Enumerated list with human readle keys

enum POKEMON_TYPE {
    // Fire,
    // Water,
    // Grass,
    Fire = '火',
    Water = 11,
    Grass = 12,
}
// We can set a value to an enum or not. If they have a value assigned, we can use it as a var value. const type = POKEMON_TYPE.Fire; //'火'.

interface POKEMON {
    id: number;
    name: string;
    base_experience: [number, string];
    type: POKEMON_TYPE;
}

const pokemon: POKEMON = {
    id: 1,
    name: "bulbasaur",
    base_experience: [64, '六十四'], // 64 in japanese
    type: POKEMON_TYPE.Grass // or type: 64 or type: POKEMON_TYPE[2] -> ENUM it's an enumerator
}

/**
 * ANY, TS ONLY
 */
// Favourite type for lazy developers
// Could be anything you want

function functionDoAny(any1: any, any2: any) {
    return "any";
}

const any1: any = 123;
const any2: any = "any value";
const any3: any = { a: 1, b: "2", c: any2, d: any1 };
const any4: any = (any3: any) => `${any2}-${any3}`;

functionDoAny(any1, any4);

/**
 * Union Types, TS ONLY
 */
// Could be one of multiple different and defined types

interface POKEMON {
    id: number;
    name: string;
    base_experience: [number, string];
    type: POKEMON_TYPE;
    attack: string | number | {name: string, damage: number};
}

const pokemon: POKEMON = {
    id: 1,
    name: "bulbasaur",
    base_experience: [64, '六十四'], 
    type: POKEMON_TYPE.Grass,
    attack: 'cut', // could be attack: 3 or attack: {name: 'cut', damage: 38}
}

/**
 * Literal Types, TS ONLY
 */
// When we define a specific value with a type

interface POKEMON {
    id: number;
    name: string;
    base_experience: [number, string];
    type: POKEMON_TYPE;
    attack: string | number | {name: string, damage: number};
    generation: 'V1'
}

const pokemon: POKEMON = {
    id: 1,
    name: "bulbasaur",
    base_experience: [64, '六十四'], 
    type: POKEMON_TYPE.Grass,
    attack: 'cut',
    generation: 'V1', // In this case, happens to be a string, but not a variable string, can  just be 'V1'
}

/**
 * Custom Types or type aliases, TS ONLY
 */
// Could have any configuration that we want, so could include any amount, deepness or complexy that we need. Could use any TS core type or custom type.

type Leagues =
    'Kanto' |
    'Johto' |
    'Hoenn' |
    'Sinnoh' |
    'Unova' |
    'Kalos' |
    'Alola' |
    'Galar'; // A custom type that uses literals

type Generation = {
    name: string;
    launchYear: number;
    leagueName: Leagues
}; // A custom type that defines a Generation type

interface POKEMON {
    id: number;
    name: string;
    base_experience: [number, string];
    type: POKEMON_TYPE;
    attack: string | number | {name: string, damage: number};
    generation: Generation;
}

const pokemon: POKEMON = {
    id: 1,
    name: "bulbasaur",
    base_experience: [64, '六十四'], 
    type: POKEMON_TYPE.Grass,
    attack: 'cut',
    generation: {
        name: 'v1',
        lauchYear: '1997',
        leagueName: 'Kanto'
    }
}

/**
 * Types in functions
 */
function stronger(pokemon1: POKEMON, pokemon2: POKEMON) { // Infer return number
    if(pokemon1.base_experience[0] > pokemon2.base_experience[0]) {
        return pokemon1;
    }
    return pokemon2;
}

function printPokemonName(pokemon: POKEMON): void // return type { // Void because not returns anything
    console.log('Result: ' + pokemon.name);
}

/**
 * Function Type, TS ONLY
 */
interface POKEMON {
    id: number;
    name: string;
    base_experience: [number, string];
    type: POKEMON_TYPE;
    attack: string | number | {name: string, damage: number};
    generation: Generation;
    weakness: (type: POKEMON_TYPE) => POKEMON_TYPE[];
}

/**
 * Unknown Type, TS ONLY
 */
// Is almost the same as any but needs to be type checked before be assigned
// EX:
let pName: string;
let pokemonName: any;
pName = 'Charmander';
pokemonName = pName;
// VS unknown
let pName: string;
let pokemonName: unknown;
pName = 'Charmander';
if (typeof pName === 'string') {
    pokemonName = pName;
}
// Basically, unknown is saffer because requires a type check

/**
 * Never Type, TS ONLY
 */
// Used rarely but in some functions like, infinite loops or throw error functions
// Void doesn't return anything
// Never, never returns anything
function throwError(errorMsg: string): never {
    throw new Error(errorMsg);
}

function keepProcessing(): never {
    while (true) {
        console.log('I always does something and never ends.')
    }
}

/**
 * Optional Properties, TS ONLY
 */
 // Properties with ? symbol, are not mandatory
 interface POKEMON {
    id: number;
    name: string;
    base_experience: [number, string];
    type: POKEMON_TYPE;
    attack?: string;
}

// Valide Pokemon
const pokemon: POKEMON = {
    id: 1,
    name: "bulbasaur",
    base_experience: [64, '六十四'], 
    type: POKEMON_TYPE.Grass,
}

// Valide Pokemon
const pokemon: POKEMON = {
    id: 1,
    name: "bulbasaur",
    base_experience: [64, '六十四'], 
    type: POKEMON_TYPE.Grass,
    attack: 'cut'
}

/**
 * Readonly Properties, TS ONLY
 */
 // Properties with readonly prefix can be initialized but not reassigned
 interface POKEMON {
    readonly id: number;
    readonly name: string;
    base_experience: number;
    type: POKEMON_TYPE;
}

const pokemon: POKEMON = {
    id: 1,
    name: "bulbasaur",
    base_experience: 64, 
    type: POKEMON_TYPE.Grass,
}

// Pokemon fight and gain experience

pokemon.base_experience = 86; // OK
pokemon.name = 'bulbasaurrrr' // Can't do. Readonly property
