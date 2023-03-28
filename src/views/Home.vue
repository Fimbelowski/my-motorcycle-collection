<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { RouterLink } from 'vue-router';

import MotorcycleImage from '@/components/MotorcycleImage.vue';
import MOTORCYCLES from '@/motorcycles';
import type Motorcycle from '@/types/Motorcycle';
import MotorcycleName from '@/types/MotorcycleName';
import RouteName from '@/types/RouteName';

useHead({
  meta: [
    {
      content:
        'My personal collection of motorcycles; featuring bikes from BMW, Ducati and Indian.',
      name: 'description',
    },
  ],
  title: 'My Motorcycles',
});

const routeNameToMotorcycleMap: Record<string, Motorcycle> = {
  [RouteName.BmwF750GS]: MOTORCYCLES[MotorcycleName.BmwF750GS],
  [RouteName.DucatiMonster]: MOTORCYCLES[MotorcycleName.DucatiMonster],
  [RouteName.DucatiPanigaleV4]: MOTORCYCLES[MotorcycleName.DucatiPanigaleV4],
  [RouteName.indianScoutBobber]: MOTORCYCLES[MotorcycleName.indianScoutBobber],
};
</script>

<template>
  <main class="home">
    <h1 class="home__heading">My Motorcycle Collection</h1>
    <div class="home__grid">
      <RouterLink
        v-for="[routeName, motorcyle] in Object.entries(
          routeNameToMotorcycleMap
        )"
        :key="motorcyle.model"
        :to="{ name: routeName }"
      >
        <MotorcycleImage animate-on-hover :motorcycle="motorcyle" show-label />
      </RouterLink>
    </div>
  </main>
</template>

<style lang="scss">
.home {
  max-width: var(--page-max-width);
  margin: 0 auto;
  min-height: 100vh;
  padding: var(--page-padding);

  @include respond(large) {
    max-width: none;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
    align-items: start;

    @include respond(large) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  &__heading {
    font-weight: var(--font-weight-thin);
    text-align: center;
    margin-bottom: 4rem;
  }
}
</style>
