<script setup lang="ts">
// TODO: Add species information? https://pokeapi.co/api/v2/pokemon-species/654/
// TODO: Display type in a nice way
// TODO: Validate route https://nuxt.com/docs/getting-started/routing -> Route Validation
// TODO: Route level error page rendering, i.e. if a 404 response is received, route to and render a generic 404 page.
definePageMeta({
  layout: false
})

const route = useRoute()
const pokemonID = route.params.id

const { data: pokemon } = await useFetch(`/api/pokemon/${pokemonID}`)

// This is gross. Couldn't find another way to destructure without a TypeScript error.
// TODO: Finish formatting abilities
const pokemonNotReffed = unref(pokemon)

const abilities = pokemonNotReffed?.abilities
console.log(pokemonNotReffed)

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