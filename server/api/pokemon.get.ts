import { allPokemon, totalPokemonInAPI } from '../utils/poke-api'
import type Pokedex from 'pokedex-promise-v2'

/**
 * Fetches a list of 60 pokemon. The list is always random (but still chronological) just for fun.
 **/
export default defineEventHandler(async (): Promise<Pokedex.NamedAPIResource[]> => {
  const limit = 60
  const maxPokemon = (await totalPokemonInAPI) - limit

  const offset = Math.floor(Math.random() * maxPokemon)

  // Use the Pokemon list we have in server runtime (for search) instead of making a new request.
  return allPokemon.then((ap) => ap.slice(offset, offset + limit))
})

