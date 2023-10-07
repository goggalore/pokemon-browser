import PokeAPI from '../../utils/poke-api'
import type Pokedex from 'pokedex-promise-v2'


// TODO: Add JSDoc
export default defineEventHandler(async (event): Promise<Pokedex.Pokemon | void> => {
  const pokemonID = getRouterParam(event, 'id')

  if (!pokemonID) {
    // TODO: Error handling
    return
  }

  return await PokeAPI.getPokemonByName(pokemonID)
})

