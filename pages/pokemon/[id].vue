<script setup lang="ts">
import formatTitle from '../../utils/string-utils'
import '~/assets/css/pokemon-bio.css'
import { definePageMeta } from '~/.nuxt/imports'
import Default from '~/layouts/default.vue'

// TODO: Validate route https://nuxt.com/docs/getting-started/routing -> Route Validation
// TODO: Route level error page rendering, i.e. if a 404 response is received, route to and render a generic 404 page.
definePageMeta({
  layout: false
})

const route = useRoute()
const pokemonID = route.params.id

const { data: pokemon } = await useFetch(`/api/pokemon/${pokemonID}`)

const abilitiesFormatted = computed(() => {
  const abilities = pokemon.value?.abilities

  if (abilities) {
    return abilities.map((ability) => {
      return formatTitle(ability.ability.name)
    }).join(', ')
  }

  return null
})

if (pokemon.value) {
  const pokemonName = formatTitle(pokemon.value.name)

  useSeoMeta({
    title: `${pokemonName} - Biography`,
    description: `Read the stats and summary of ${pokemonName}`,
  })
}
</script>

<template>
  <div>
    <h1>INFO</h1>
    <default>
      <div
        v-if="pokemon"
        class="image-and-text-container"
      >
        <img
          :src="pokemon.sprites.other['official-artwork'].front_default"
          :alt="`${pokemon.name} sprite`"
        >
        <div class="text-container">
          <h2>{{ formatTitle(pokemon.name) }}</h2>
          <p>
            <span class="stat">WEIGHT:</span>
            <span>{{ `${pokemon.weight} hectograms` }}</span>
            <br>
            <span class="stat">HEIGHT:</span>
            <span>{{ `${pokemon.height} decimeters` }}</span>
          </p>
          <h3 v-if="abilitiesFormatted">
            Abilities:
          </h3>
          <p v-if="abilitiesFormatted">
            {{ abilitiesFormatted }}
          </p>
          <h3 v-if="pokemon.summary">
            Summary:
          </h3>
          <p v-if="pokemon.summary">
            <span>{{ pokemon.summary.description }}</span>
            <br>
            <span id="version">{{ `Version ${formatTitle(pokemon.summary.version)}` }}</span>
          </p>
        </div>
      </div>
      <p v-else>
        Pokemon Not Found
      </p>
    </default>
  </div>
</template>

<style>
@import url('~/assets/css/pokemon-bio.css');
</style>