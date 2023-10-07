import PokeAPI, { totalPokemonInAPI } from '../utils/poke-api'
import type Pokedex from 'pokedex-promise-v2'

// TODO: Add JSDoc
// TODO: Remove hyphens from pokemon names: Do this on front-end
export default defineEventHandler(async (): Promise<Pokedex.NamedAPIResource[]> => {
  // Amount of Pokemon to fetch.
  const limit = 60

  // Don't fetch Pokemon that don't exist
  const maxPokemon = await totalPokemonInAPI
  const maxFetchOffset = maxPokemon - limit

  // Fetch a dynamic range of Pokemon, so it's different on landing/refresh (but it will still be chronological).
  // Just for fun.
  const offset = Math.floor(Math.random() * maxFetchOffset)

  // Get and return the list of pokemon
  // TODO: Do not re-fetch when the entire pokemon list exists on the server anyway.
  return await PokeAPI.getPokemonsList({
    offset, limit
  }).then(nr => nr.results)
})

