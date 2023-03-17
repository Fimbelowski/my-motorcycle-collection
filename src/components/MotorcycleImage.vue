<script setup lang="ts">
import { computed } from 'vue';

import type Motorcycle from '@/types/Motorcycle';

interface Props {
  motorcycle: Motorcycle;
  showLabel?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  showLabel: false,
});

const label = computed(() => {
  const {
    motorcycle: { manufacturer, model },
  } = props;

  return `${manufacturer} ${model}`;
});
</script>

<template>
  <div class="motorcycle-image">
    <img
      :alt="motorcycle.img.alt"
      class="motorcycle-image__image"
      :src="motorcycle.img.src"
    />
    <h2 v-if="showLabel" class="motorcycle-image__label">{{ label }}</h2>
  </div>
</template>

<style lang="scss">
.motorcycle-image {
  width: 55rem;
  height: 30rem;
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

  &__label {
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
