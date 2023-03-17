<script setup lang="ts">
import { computed } from 'vue';
import { useHead } from '@vueuse/head';

import getMotorcycleMakeModel from '@/utilities/getMotorcycleMakeModel';
import HomeLink from '@/components/HomeLink.vue';
import MotorcycleImage from '@/components/MotorcycleImage.vue';

import type Motorcycle from '@/types/Motorcycle';

const props = defineProps<{
  motorcycle: Motorcycle;
}>();

useHead({
  meta: [
    {
      content: props.motorcycle.description,
      name: 'description',
    },
  ],
  title: `My Motorcycles -- ${getMotorcycleMakeModel(props.motorcycle)}`,
});

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

const titleColorClass = computed(() => {
  const {
    motorcycle: { manufacturer },
  } = props;
  let suffix: string;

  if (manufacturer === 'BMW') {
    suffix = 'blue';
  } else if (manufacturer === 'Ducati') {
    suffix = 'red';
  } else {
    suffix = 'black';
  }

  return `base-motorcycle-view__title--${suffix}`;
});
</script>

<template>
  <header class="base-motorcycle-view__header">
    <HomeLink />
  </header>
  <main class="base-motorcycle-view">
    <h1 :class="['base-motorcycle-view__title', titleColorClass]">
      {{ getMotorcycleMakeModel(motorcycle) }}
    </h1>
    <div class="base-motorcycle-view__layout">
      <div class="base-motorcycle-view__image-container">
        <MotorcycleImage :motorcycle="motorcycle" />
      </div>
      <dl class="base-motorcycle-view__description-list">
        <div v-for="{ label, value } in descriptionListItems" :key="value">
          <dt class="base-motorcycle-view__description-term">{{ label }}:</dt>
          <dd class="base-motorcycle-view__description-details">{{ value }}</dd>
        </div>
      </dl>
      <p class="base-motorcycle-view__description">
        {{ motorcycle.description }}
      </p>
    </div>
  </main>
</template>

<style lang="scss">
.base-motorcycle-view {
  max-width: var(--page-max-width);
  margin: 0 auto;
  min-height: 100vh;

  @include respond(large) {
    max-width: none;
    padding: 0 var(--page-padding);
  }

  &__description {
    grid-column: 1 / -1;
    padding-top: 2rem;
    max-width: 100rem;
    font-size: 2.25rem;
    text-indent: 3rem;

    &-details {
      display: inline;
      font-weight: var(--font-weight-thin);

      &::before {
        content: ' ';
      }
    }

    &-list {
      font-size: 3rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding-left: 2rem;
    }

    &-term {
      display: inline;
    }
  }

  &__layout {
    display: grid;
    grid-template-columns: min-content 1fr;

    @include respond(medium) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  &__header {
    max-width: var(--page-max-width);
    margin: 0 auto;
    padding: var(--page-padding) 0;

    @include respond(large) {
      max-width: none;
      padding: var(--page-padding);
    }
  }

  &__image-container {
    justify-self: right;
  }

  &__title {
    text-align: center;
    font-weight: var(--font-weight-thin);
    margin-bottom: 2rem;

    &--black {
    }

    &--blue {
      color: var(--color-blue);
    }

    &--red {
      color: var(--color-red);
    }
  }
}
</style>
