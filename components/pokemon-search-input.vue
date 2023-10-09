<script setup lang="ts">
const inputQuery = ref('')

const navigateToSearch = async (): Promise<void> => {
  navigateTo({
    path: '/search',
    query: { name: inputQuery.value }
  })
}
</script>

<template>
  <div>
    <input
      v-model="inputQuery"
      placeholder="Search Pokemon..."
      @keyup.enter="navigateToSearch"
    >
    <button
      type="button"
      @click="navigateToSearch"
    >
      Search
    </button>
  </div>
</template>