<script setup lang="ts">
import { RouterLink } from 'vue-router';

import type RouteName from '@/types/RouteName';

defineProps<{ imgAlt: string; imgSrc: string; title: string; to: RouteName }>();
</script>

<template>
  <RouterLink class="preview-card" :to="{ name: to }">
    <img :alt="imgAlt" class="preview-card__image" :src="imgSrc" />
    <h2 class="preview-card__title">{{ title }}</h2>
  </RouterLink>
</template>

<style lang="scss">
.preview-card {
  height: 100%;
  border: var(--border);
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    transform: translateY(-1rem);
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__link {
    display: block;
    height: 100%;
  }

  &__title {
    position: absolute;
    bottom: 0;
    background: linear-gradient(to right, #000000, #00000000 60%);
    width: 100%;
    color: var(--color-white);
    padding-left: 1rem;
    font-weight: var(--font-weight-heading);
  }
}
</style>
