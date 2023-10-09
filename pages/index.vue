<script setup lang="ts">
const { data: pokemonList } = await useFetch('/api/pokemon')
</script>

<template>
  <NuxtLayout name="searchable">
    <PokemonCardContainer :pokemon-list="pokemonList" />
  </NuxtLayout>
</template>