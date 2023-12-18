<script setup lang="ts">
// TODO: Validate route https://nuxt.com/docs/getting-started/routing -> Route Validation
const route = useRoute()
const fetchSearch = async () => {
  return useFetch('/api/search', {
    query: { name: route.query.name.toLowerCase()
    }})
}

const { data: pokemonList } = await fetchSearch()

// For some reason, Nuxt does not automatically re-fetch data when the
// route query changes (when changed by the search input),
// even though the route is supposedly automatically watched.
//
// The useFetch watch option does not work with deep watch either.
watch(() => route.query.name, async () => {
  const { data: newPl }= await fetchSearch()
  if (newPl) {
    pokemonList.value = newPl.value
  }
})

useSeoMeta({
  title: `${route.query.name} - Pokemon Browser`,
  description: `Search results for ${route.query.name}`
})
</script>

<template>
  <NuxtLayout name="searchable">
    <PokemonCardContainer
      v-if="pokemonList.length > 0"
      :pokemon-list="pokemonList"
    />
    <NoSearchResults v-else />
  </NuxtLayout>
</template>