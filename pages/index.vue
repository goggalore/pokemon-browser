<script setup lang="ts">
// TODO: Dark Mode
// TODO: Try using lazy fetch and display load icon? https://nuxt.com/docs/api/composables/use-lazy-fetch
// TODO: Add refresh button that allows a new generation of Pokemon examples?
const { data: pokemonList } = await useFetch('/api/pokemon')
</script>

<template>
  <div>
    <PokemonSearchInput />
    <PokemonCardContainer :pokemon-list="pokemonList" />
  </div>
</template>