<script setup lang="ts">
const query = ref('')
const onClick = async (): Promise<void> => {
  navigateTo({
    path: '/search',
    query: { name: query.value }
  })
}
</script>

<template>
  <input
    v-model="query"
    placeholder="Search Pokemon..."
  >
  <button @click="onClick">
    Go
  </button>
</template>