<script setup lang="ts">
import getMotorcycleMakeModel from '@/utilities/getMotorcycleMakeModel';

import type Motorcycle from '@/types/Motorcycle';

interface Props {
  animateOnHover?: boolean;
  motorcycle: Motorcycle;
  showLabel?: boolean;
}

withDefaults(defineProps<Props>(), {
  animateOnHover: false,
  showLabel: false,
});
</script>

<template>
  <div
    :class="[
      'motorcycle-image',
      { 'motorcycle-image--animate-on-hover': animateOnHover },
    ]"
  >
    <img
      :alt="motorcycle.img.alt"
      class="motorcycle-image__image"
      :src="motorcycle.img.src"
    />
    <h2 v-if="showLabel" class="motorcycle-image__label">
      {{ getMotorcycleMakeModel(motorcycle) }}
    </h2>
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

  &--animate-on-hover {
    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
      transform: translateY(-1rem);
    }
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
    font-weight: var(--font-weight-thin);
  }
}
</style>
