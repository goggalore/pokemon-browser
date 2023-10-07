<script setup lang="ts">
import PokemonCardContainer from '../components/pokemon-card-container.vue'

const { data: pokemonList } = await useFetch(
  '/api/pokemon', { method: 'GET' }
)
</script>

<template>
  <div>
    <PokemonCardContainer :pokemon-list="pokemonList" />
  </div>
</template>