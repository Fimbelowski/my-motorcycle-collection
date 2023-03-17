<script setup lang="ts">
import { computed } from 'vue';

import type Motorcycle from '@/types/Motorcycle';

const props = defineProps<{
  motorcycle: Motorcycle;
}>();

const displacement = computed(
  () => `${props.motorcycle.displacement.toLocaleString()}cc`
);

const power = computed(() => {
  const { horsePower } = props.motorcycle;
  const HP_TO_KW_COEFFICIENT = 0.746;
  const horsePowerAsKw = horsePower * HP_TO_KW_COEFFICIENT;

  return `${horsePower.toLocaleString()}hp (${horsePowerAsKw.toLocaleString()} kW)`;
});

const descriptionListItems = computed(() => {
  const {
    motorcycle: { color, manufacturer, model, year },
  } = props;

  const listItems: { label: string; value: string }[] = [
    {
      label: 'Manufacturer',
      value: manufacturer,
    },
    {
      label: 'Model',
      value: model,
    },
    {
      label: 'Model Year',
      value: year.toString(),
    },
    {
      label: 'Color',
      value: color,
    },
    {
      label: 'Displacement',
      value: displacement.value,
    },
    {
      label: 'Power',
      value: power.value,
    },
  ];

  return listItems;
});
</script>

<template>
  <main class="base-motorcycle-view">
    <img
      :alt="motorcycle.img.alt"
      class="base-motorcycle-view__image"
      :src="motorcycle.img.src"
    />
    <dl class="base-motorcycle-view__description-list">
      <div v-for="{ label, value } in descriptionListItems" :key="value">
        <dt class="base-motorcycle-view__description-term">{{ label }}:</dt>
        <dd class="base-motorcycle-view__description-details">{{ value }}</dd>
      </div>
    </dl>
  </main>
</template>

<style lang="scss">
.base-motorcycle-view {
  max-width: var(--page-max-width);
  margin: 0 auto;
  min-height: 100vh;
  padding-top: 4rem;

  background-color: gray;

  &__description {
    &-details {
      display: inline;
    }

    &-list {
      font-size: 3rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    &-term {
      display: inline;
    }
  }

  &__image {
    max-width: 60rem;
    float: left;
    margin-right: 2rem;
  }
}
</style>
