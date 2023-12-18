<script setup lang="ts">
import Pokedex from 'pokedex-promise-v2'
import formatTitle from '../utils/string-utils'

const { pokemon } = defineProps<{
    pokemon: Pokedex.NamedAPIResource,
  }>()

const spriteBasePath = process.env.SPRITE_URL || 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites'

const pokemonPathMatch = pokemon.url.match(/\/pokemon\/\d+/i) || [ '' ]
const pokemonPath = pokemonPathMatch[0]

const pokemonSpritePath = `${pokemonPath}.png`

const pokemonSpriteURL = `${spriteBasePath}${pokemonSpritePath}`
</script>

<template>
  <li>
    <NuxtLink :to="pokemonPath">
      <div class="image-container">
        <img
          :src="pokemonSpriteURL"
          :alt="`${pokemon.name} sprite`"
          @error="$event.target.src = '/images/whats-that-pokemon.png'"
        >
      </div>
      <h2>{{ formatTitle(pokemon.name) }}</h2>
    </NuxtLink>
  </li>
</template>

<style scoped>
@import url('~/assets/css/pokemon-card.css');
</style>