<script setup lang="ts">
import Pokedex from 'pokedex-promise-v2'

const route = useRoute()
const pokemonID = route.params.id

const { data: pokemon } = await useFetch(
  `/api/pokemon/${pokemonID}`, { method: 'GET' }
)

// This is gross. Couldn't find another way to destructure without a TypeScript error.
const pokemonNotReffed = unref(pokemon)

const abilities = pokemonNotReffed?.abilities
console.log(JSON.stringify(abilities))

// const abilities = pokemon.abilities.map((ability) => ability.name).join(', ')

</script>

<template>
  <div>
    <img
      :src="pokemon.sprites.other['official-artwork'].front_default"
      :alt="`${pokemon.name} sprite`"
    >
    <h1>{{ pokemon.name }}</h1>
    <p>{{ `Weight: ${pokemon.weight}` }}</p>
    <p>{{ `Height: ${pokemon.height}` }}</p>
    <p>{{ pokemon.abilities }}</p>
  </div>
</template>