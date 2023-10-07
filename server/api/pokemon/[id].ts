import Pokedex from 'pokedex-promise-v2'


// TODO: Add JSDoc
export default defineEventHandler(async (event): Promise<Pokedex.Pokemon | void> => {
  // Initialize PokeAPI for usage.
  // TODO: Don't initialize on every request
  const PokeAPI = new Pokedex()

  const pokemonID = getRouterParam(event, 'id')

  if (!pokemonID) {
    // TODO: Error handling
    return
  }

  return await PokeAPI.getPokemonByName(pokemonID)
})

