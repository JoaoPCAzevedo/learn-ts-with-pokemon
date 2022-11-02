import Card from './../components/Card';
import { useQuery, gql } from "@apollo/client";
import { StyledWrapper } from "../components/GeneralStyle"

export interface POKEMON {
  id: number
  name: string
  base_experience: number
  pokemon_v2_pokemontypes: {
    pokemon_v2_type: {
      id: POKEMON_TYPE
      name: string
    }
  }[]
}

type POKEMONS = {
  pokemon_v2_pokemon: POKEMON[]
}

export enum POKEMON_TYPE {
  Normal = 1,
  Fighting = 2,
  Flying = 3,
  Poison = 4,
  Ground = 5,
  Rock = 6,
  Bug = 7,
  Ghost = 8,
  Fire = 10,
  Water = 11,
  Grass = 12,
  Electric = 13,
  Psychic = 14,
  Ice = 15,
  Dragon = 16,
  Fairy = 18
}

function App() {
  const GET_FIRST_GEN_POKEMONS = gql`
  query firstGenPokemonsQuery {
    pokemon_v2_pokemon(limit: 151) {
      id
      name
      base_experience
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          id
          name
        }
      }
    }
  }`;

  const { data, loading, error } = useQuery<POKEMONS>(GET_FIRST_GEN_POKEMONS);

  if (loading) {
    return <div>loading</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <StyledWrapper>
      {data?.pokemon_v2_pokemon.map((pokemon) =>
        <Card key={pokemon.name} {...pokemon} />
      )}
    </StyledWrapper >
  )
}

export default App
