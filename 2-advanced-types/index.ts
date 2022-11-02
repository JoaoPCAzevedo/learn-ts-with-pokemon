/**
 * Intersection Types, TS ONLY
 */
// Allow us to combine multiple types
enum POKEMON_TYPE {
    Fire,
    Water,
    Grass,
    Electric
}

type COMMON = {
    index: number | string;
    name: string;
    generation: 'V1'
}

type TRAINER_ONLY = {
    age: number | 'who knows';
    sex: 'male' | 'female' | 'other';
    village: string;
}

type POKEMON_ONLY = {
    base_experience: number;
    type: POKEMON_TYPE;
    attack: {name: string, damage: number};
}

type TRAINER = COMMON & TRAINER_ONLY;
type POKEMON = COMMON & POKEMON_ONLY;

const trainer: TRAINER = {
    index: "t1",
    name: "Ash Ketchum",
    generation: "V1",
    age: "who knows",
    sex: "male",
    village: "Pallet Town"
}

const pokemon: POKEMON = {
    index: 25,
    name: "Pikachu",
    generation: "V1",
    base_experience: 32,
    type: POKEMON_TYPE.Electric,
    attack: {name: 'Thunderbolt', damage: 50}
}

/**
 * Type guards
 */
// It's just a name given to the verification of the existence of a certain property or method in an object 
function greaterIndex(index_1, index_2) {
    if (typeof index_1 === 'number' && typeof index_2 === 'number') { // Pokemons have index of type number, so we must garantee that we are compare to numbers (pokemons) since this attributes as an union type, number | string
        if(index_1 > index_2) {
            return index_1;
        }
        return index_2;
    }
    return "Can't compare trainers";
}

greaterIndex(1, 25);
greaterIndex(25, "t1");

// If we want compare something more complex like
function isPokemonOrTrainerBAD(someone) {
    if (typeof someone === 'POKEMON') { // Great idea but, since this is runtime, we are handling with JS only and we can use typeof only for JS native types
        return "Pokemon";
    }
    return "Trainer";
}

isPokemonOrTrainerBAD(pokemon);

// Solution, use the JS "in" keyword
function isPokemonOrTrainerGOOD(someone) {
    if ('type' in someone) { // The "in" keyword tell us if an specific key exists inside an object. So we can "search" for a certain property that we know that only exists in on type, like, only Pokemons have "type".
        return "Pokemon";
    }
    return "Trainer";
}

isPokemonOrTrainerGOOD(pokemon);

/**
 * Type casting
 */
// It's a type assertion mechanism
function getPokemonAttack(someone) { // Someone argument doesn't have a defined type, so typescript couldn't know if it's really a Pokemon or a Trainer
    return (someone as POKEMON).attack; // "Cast after", with the "as Type" we can explicit tell Typescript wich type is the argument 
    return (<POKEMON>someone).attack; // "Cast before", with the "<Type>" we can explicit tell Typescript wich type is the argument 
}

getPokemonAttack(pokemon);

/**
 * Index type
 */
// If we know that we will receive something with a specific structure but with an unknown key
function getPokemonIndex() {
    return Math.random() * (151 - 1) + 1;
}

function getItem() {
    const items = ['Pokeball', 'Pokeflute', 'Masterball', 'Potion', 'Supper Potion'];
    const randomItem = Math.random() * (items.length-1 - 0) + 0;

    return items[randomItem];
}

function winMisteryBox() {
    const value = Math.random() * (10 - 1) + 1;

    if(value >= 8) {
        return {Pokemon: getPokemonIndex()}
    }

    return {Item: getItem()}
}

type TRAINER_ONLY = {
    age: number | 'who knows';
    sex: 'male' | 'female' | 'other';
    village: string;
    bag: {
        [prop: string]: string | number; // In this "bag" node, we know that we can receive something, but we are not sure wich type this "something" is, but we can be open enough to receive things with dynamic key name but with some rules, in this case, the key must be a string and the value, a string or a number. In this case could Pokemon: 143 or Item: Pokeflute
    }
}

/**
 * Function Overloads
 */
// When typescript can not infer the return type, we can explicitly tell
function greaterIndex_UnknownReturnType(index_1: number | string, index_2: number | string) {
    if (typeof index_1 === 'number' && typeof index_2 === 'number') {
        if(index_1 > index_2) {
            return index_1;
        }
        return index_2;
    }
    return "Can't compare trainers";
}

const compare1 = greaterIndex_UnknownReturnType(1, 25); // We know that with this two values passed, we will receive a number as return
const compare2 = greaterIndex_UnknownReturnType("t2", "t1"); // We know that with this two values passed, we will receive a string as return
// But in both cases, Typescript doesn't know the return type, because we tell that each value could be of one of two types (could be of N types). So:
compare1.toFixed();
compare1.toExponential();
compare2.toUpperCase();
compare2.length;
// This lines are marked as errors by Typescript, even when we are sure that the value of each const are the right to use certain method.
// Solution, tell TS what to return in each situation;
type Comapre = number | string;
function greaterIndex_ReturnType(num1: number, num2: number) : number;
function greaterIndex_ReturnType(str1: string, str2: string) : string;
function greaterIndex_ReturnType(index_1: Comapre, index_2: Comapre) {
    if (typeof index_1 === 'number' && typeof index_2 === 'number') {
        if(index_1 > index_2) {
            return index_1;
        }
        return index_2;
    }
    return "Can't compare trainers";
}

const compareInt = greaterIndex_ReturnType(1, 25);
const compareStr = greaterIndex_ReturnType("t2", "t1");
compareInt.toFixed();
compareInt.toExponential();
compareStr.toUpperCase();
compareStr.length;