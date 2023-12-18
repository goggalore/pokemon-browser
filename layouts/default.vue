<template>
  <div class="with-padding">
    <slot />
  </div>
</template>
<style>
@media screen and (min-width:800px) {
  .with-padding {
    margin: 1rem 1.5rem;
  }
}

@media screen and (max-width:800px) {
  .with-padding {
    margin: 1rem 0.5rem;
  }
}
</style>