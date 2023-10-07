<script setup lang="ts">
import Pokedex from 'pokedex-promise-v2'

const { pokemonList } = defineProps<{
  pokemonList: Pokedex.NamedAPIResource[]
}>()

</script>

<template>
  <ul>
    <PokemonCard
      v-for="(pokemon, index) in pokemonList"
      :key="pokemon.name"
      :pokemon="pokemon"
      :index="index"
    />
  </ul>
</template>