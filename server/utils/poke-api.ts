import Pokedex from 'pokedex-promise-v2'

// Initialize pokedex-promise-v2 for use
//
// This exists so that it is not reinitialized on every request, but rather only on
// a server restart.
const PokeAPI = new Pokedex()

export default PokeAPI

export const allPokemon = getAllPokemon()
export const totalPokemonInAPI = allPokemon.then(ap => ap.length)

// Needed for user searches of pokemon names, not supported by the API
// - see api/search.get.ts for more details
// Also enables the ability to provide the accurate amount of pokemon available in the API
async function getAllPokemon(): Promise<Pokedex.NamedAPIResource[]> {
  return await PokeAPI.getPokemonsList()
    .then(nr => nr.results)
}

