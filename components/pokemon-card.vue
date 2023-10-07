<script setup lang="ts">
import Pokedex from 'pokedex-promise-v2'

const { pokemon } = defineProps<{
    pokemon: Pokedex.NamedAPIResource,
  }>()

// TODO: Add actual env value: https://v2.nuxt.com/docs/configuration-glossary/configuration-env/
const spriteBasePath = process.env.SPRITE_URL || 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites'

// TODO: Add default sprite if one cannot be found.
const pokemonPathMatch = pokemon.url.match(/\/pokemon\/\d+/i) || [ '' ]
const pokemonPath = pokemonPathMatch[0]

const pokemonSpritePath = `${pokemonPath}.png`

const pokemonSpriteURL = `${spriteBasePath}${pokemonSpritePath}`
</script>

<template>
  <li>
    <NuxtLink :to="pokemonPath">
      <img
        :src="pokemonSpriteURL"
        :alt="`${pokemon.name} sprite`"
      >
      <h2>{{ pokemon.name }}</h2>
    </NuxtLink>
  </li>
</template>