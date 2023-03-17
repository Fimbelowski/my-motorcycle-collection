<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { RouterLink } from 'vue-router';

import RouteName from '@/types/RouteName';
</script>

<template>
  <RouterLink class="home-link" :to="{ name: RouteName.Home }">
    <FontAwesomeIcon class="home-link__icon" icon="fa-solid fa-arrow-left" />
    Home</RouterLink
  >
</template>

<style lang="scss">
.home-link {
  display: flex;
  align-items: center;

  text-decoration: none;
  font-size: 2.25rem;

  &:link,
  &:visited {
    color: var(--color-blue);
  }

  &__icon {
    margin-right: 0.75rem;
  }
}
</style>
