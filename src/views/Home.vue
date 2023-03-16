<script setup lang="ts">
import MotorcycleName from '@/types/MotorcycleName';
import MOTORCYCLES from '@/motorcycles';
import PreviewCard from '@/components/PreviewCard.vue';
import RouteName from '@/types/RouteName';

import type Motorcycle from '@/types/Motorcycle';

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
      <PreviewCard
        v-for="[
          routeName,
          {
            manufacturer,
            model,
            img: { alt, src },
          },
        ] in Object.entries(routeNameToMotorcycleMap)"
        :key="model"
        :img-alt="alt"
        :img-src="src"
        :title="`${manufacturer} ${model}`"
        :to="routeName as RouteName"
      />
    </div>
  </main>
</template>

<style lang="scss">
.home {
  max-width: 120rem;
  margin: 0 auto;
  min-height: 100vh;
  padding: 2.5rem;

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 30rem;
    gap: 4rem;
    align-items: start;
  }

  &__heading {
    font-weight: var(--font-weight-heading);
    text-align: center;
    margin-bottom: 4rem;
  }
}
</style>
