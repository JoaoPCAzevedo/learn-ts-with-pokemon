/**
 * Generics
 */
// A reusable component should be flexible enough to be able to work with a variety of types instead of single one.

function addItemToBag_any(arg: any): any {
    return arg;
}
// Since this fucntion receives an argument of type any and return something also of type any, we could think that this is a generic due to the flexibility of be able to work with different types of data. But this is not right, because any is like something, and we want to capture and know the exactly type of our something.

function addItemToBag_type<Type>(arg: Type): Type {
    return arg;
}
// Usign <Type> and argument of type Type, we are telling TS to capture the type provided by the user and know that type, so we can use it latter, for instance in the return type of this function.

// Convention, the first Generic argument/variable is T and second is U. But in reallity could be whatever you want to call it.
// This function is not the best example of how handy could Generics be. Better examples latter, but a quick one: imagine a situation that you have a function that could receive and argument, and this argument could be as simple as a number or a very complex object. Than, inside the function this argument will be trasnformed in something that could, again, very simple or very complex. To type this scenario, generics could be vary useful, because we can capture a certain type so TS could learn it.

// Better example, a function that could receive different things and return them again, but what is returned, should know the is own type 
type TRAINER = {
    index: number | string;
    name: string;
    village: string;
}

type POKEMON = {
    index: number | string;
    name: string;
    attack: string;
}

type ITEM = {
    index: number | string;
    name: string;
    description: string;
}

const trainer: TRAINER = {index: 1, name: "Ash", village: "Pallet Town"};
const pokemon: POKEMON = {index: 25, name: "Pikachu", attack: "Thunderbolt"};
const item: ITEM = {index: 3, name: "Pokeball", description: "Used to catch Pokemons"};

function addItemToBag_type_extended<T>(arg: T): T {
    return arg;
}

const t = addItemToBag_type_extended(trainer); // Knows what inside of "t", t.village;
const p = addItemToBag_type_extended(pokemon); // Knows what inside of "p", p.attack;
const i = addItemToBag_type_extended(item); // Knows what inside of "i", i.description;

// Now, that we have our addItemToBag_type_extended function typed but flexible to work with different types, lets imagine that we want to create some constraints, like, we want to receive only pokemons or items, and not trainers. So flexible but not tottaly open. We can extend the generic type.
function addItemToBag_type_extended_with_constraints<T extends ITEM | POKEMON>(arg: T): T {
    return arg;
}

const tr = addItemToBag_type_extended_with_constraints(trainer); // Flexible enought to accept items and pokemons but not trainers
const pk = addItemToBag_type_extended_with_constraints(pokemon); // Knows what inside of "pk", p.attack;
const it = addItemToBag_type_extended_with_constraints(item); // Knows what inside of "it", t.village;

/**
 * keyof type operator
 */
// With explicit keys=(object type): Creates a union type with those keys
// In other words, it's the way to type a variable that correponds to a key of an object
function pokemonProperty(pokemon: POKEMON, property: keyof POKEMON) { // property: keyof POKEMON = It's a key that we don't know wich but that belongs to POKEMON object type
    return pokemon[property];
}
pokemonProperty(pokemon, "name");

// A very common use of generics. If we want to access to some key that we are know that exists in an object.
function getProperty<T extends object, U extends keyof T>(object: T, property: U): T[U] {
    return object[property];
}
