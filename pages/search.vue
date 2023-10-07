<script setup lang="ts">
// TODO: Implement cache?
// TODO: Validate route https://nuxt.com/docs/getting-started/routing -> Route Validation
const route = useRoute()
console.log(JSON.stringify(route.query))
const { data: pokemonList } = await useFetch(`/api/search?name=${route.query.name}`)
</script>

<template>
  <div>
    <PokemonCardContainer :pokemon-list="pokemonList" />
  </div>
</template>