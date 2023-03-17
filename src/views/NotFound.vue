<script setup lang="ts">
import { useHead } from '@vueuse/head';

import HomeLink from '@/components/HomeLink.vue';

useHead({
  title: 'My Motorcycles -- Not Found',
});
</script>

<template>
  <main class="not-found">
    <h1 class="not-found__header">Page Not Found!</h1>
    <HomeLink />
  </main>
</template>

<style lang="scss">
.not-found {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__header {
    font-weight: var(--font-weight-thin);
    margin-bottom: 2rem;
  }
}
</style>
