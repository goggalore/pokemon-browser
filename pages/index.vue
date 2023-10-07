<script setup lang="ts">
import PokemonCardContainer from '../components/pokemon-card-container.vue'

const { data: pokemonList } = await useFetch(
  '/api/pokemon', { method: 'GET' }
)
const { data: pokemonList } = await useFetch('/api/pokemon')
</script>

<template>
  <div>
    <PokemonSearchInput />
    <PokemonCardContainer :pokemon-list="pokemonList" />
  </div>
</template>