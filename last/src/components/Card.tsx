import { POKEMON, POKEMON_TYPE } from "../pages/App";
import { StyledCard } from "./CardStyle";

const getTypeColor = ((type: POKEMON_TYPE) => {
    switch (type) {
        case POKEMON_TYPE.Normal:
            return "type-normal-color";
        case POKEMON_TYPE.Fighting:
            return "type-fighting-color";
        case POKEMON_TYPE.Flying:
            return "type-flying-color";
        case POKEMON_TYPE.Poison:
            return "type-poison-color";
        case POKEMON_TYPE.Ground:
            return "type-ground-color";
        case POKEMON_TYPE.Rock:
            return "type-rock-color";
        case POKEMON_TYPE.Bug:
            return "type-bug-color";
        case POKEMON_TYPE.Ghost:
            return "type-ghost-color";
        case POKEMON_TYPE.Fire:
            return "type-fire-color";
        case POKEMON_TYPE.Water:
            return "type-water-color";
        case POKEMON_TYPE.Grass:
            return "type-grass-color";
        case POKEMON_TYPE.Electric:
            return "type-electric-color";
        case POKEMON_TYPE.Psychic:
            return "type-psychic-color"
        case POKEMON_TYPE.Ice:
            return "type-ice-color"
        case POKEMON_TYPE.Dragon:
            return "type-dragon-color"
        case POKEMON_TYPE.Fairy:
            return "type-fairy-color"
        default:
            break;
    }
})

const Card = ({ id, name, base_experience, pokemon_v2_pokemontypes }: POKEMON) =>
    <StyledCard>
        <p className='is-capitalized'>{name}</p>
        <p className='is-capitalized'>{base_experience}</p>
        <img loading="lazy" alt={name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`} />
        {/* <img loading="lazy" alt={name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/${id}.png`} /> */}
        {pokemon_v2_pokemontypes.map(type =>
            <div>
                <span key={`${id}-${type.pokemon_v2_type.id}`} className={`tag is-capitalized ${getTypeColor(type.pokemon_v2_type.id)}`}>{type.pokemon_v2_type.name}</span>
            </div>
        )}
    </StyledCard>;

export default Card;