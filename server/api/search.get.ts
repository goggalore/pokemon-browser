import Pokedex from 'pokedex-promise-v2'
import { allPokemon as ap } from '../utils/poke-api'

export default defineEventHandler(async (event): Promise<Pokedex.NamedAPIResource[]> => {
  // Initialize PokeAPI for usage.
  const PokeAPI = new Pokedex()

  const query = getQuery(event)
  const name = query.name as string

  // PokeAPI (both package and REST API) provides no way to search...
  //
  // In a realistic case-scenario, you probably would want to build up some sort of indexed search map
  // that handles matching a user query to results.
  //
  // Because such a thing is out of scope (resources for an indexed DB are unavailable)
  // Just use a primitive strategy to store and filter results

  const allPokemon = await ap

  return allPokemon
    .filter((pokemon) => pokemon.name.includes(name))
})