<script setup lang="ts">
const { data: pokemonList } = await useFetch('/api/pokemon')
</script>

<template>
  <div>
    <PokemonSearchInput />
    <PokemonCardContainer :pokemon-list="pokemonList" />
  </div>
</template>