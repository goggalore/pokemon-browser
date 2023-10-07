import Pokedex from 'pokedex-promise-v2'


// TODO: Add JSDoc
// TODO: Remove hyphens from pokemon names
export default defineEventHandler(async (): Promise<Pokedex.NamedAPIResource[]> => {
  // Initialize PokeAPI for usage.
  const PokeAPI = new Pokedex()

  // Amount of Pokemon to fetch.
  const limit = 60

  // Don't fetch Pokemon that don't exist (supposedly there are 1,292 in the API)
  const maxPokemon = 1292
  const maxFetchOffset = maxPokemon - limit

  // Fetch a dynamic range of Pokemon, so it's different on landing/refresh (but it will still be chronological).
  // Just for fun.
  const offset = Math.floor(Math.random() * maxFetchOffset)

  // Get and return the list of pokemon
  return await PokeAPI.getPokemonsList({
    offset, limit
  }).then(nr => nr.results)
})

