import PokeAPI, { totalPokemonInAPI } from '../../utils/poke-api'
import type Pokedex from 'pokedex-promise-v2'

interface SpeciesSummary {
  description: string,
  version: string,
}

interface PokemonWithSummaries extends Pokedex.Pokemon {
  summary?: SpeciesSummary
}

/**
  * Fetches the information of a pokemon with :id as well as additional species information
  * @param { string } - A string usually containing a numerical identifier of the pokemon
  * It also accepts names, i.e., "pikachu"
  */
export default defineEventHandler(async (event): Promise<PokemonWithSummaries | void> => {
  const pokemonID = getRouterParam(event, 'id')

  if (!pokemonID) {
    throw createError({ statusCode: 400, statusMessage: 'Required parameter :id is missing.' })
  }

  // get species info for a long text description too
  // because it's sore on the eyes with so little content an entire page
  const pokemon = await PokeAPI.getPokemonByName(pokemonID)
  const summary = await getSpeciesSummary(pokemonID)

  return summary ? { ...pokemon, summary } : pokemon

})

async function getSpeciesSummary(pokemonID: string): Promise<SpeciesSummary | null> {
  // Calling PokeAPI.getPokemonSpeciesByName is problematic for some pokemon,
  // so it needs to be wrapped
  try {
    // Known problematic data: All high range entries approximately greater than 1008
    // This greatly reduces the time needed to wait since the API is incredibly slow (several seconds) to respond
    // when asked for a non-existing resource.
    const maxID = 1008
    if (Number.parseInt(pokemonID) > maxID) {
      throw new Error(`Can't fetch summaries for pokemon with ID > ${maxID}`)
    }

    const species = await PokeAPI.getPokemonSpeciesByName(pokemonID)

    // discard all but english translations (internationalization is out of scope)
    const englishFlavorTexts =
      species.flavor_text_entries.filter(
        entry => entry.language.name === 'en'
      )

    // choose a description from a random version to keep it fresh.
    // note: sometimes species.flavor_text_entries is empty
    const randomDescription = englishFlavorTexts[
      Math.floor(Math.random() * (englishFlavorTexts.length - 1))
    ]

    return randomDescription ? {
      description: randomDescription.flavor_text,
      version: randomDescription.version.name
    } : null
  } catch (error) {
    console.log(error) // you could log something like this in server logs for error analysis
    return null
  }
}

