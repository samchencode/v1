<template>
  <section class="proficiencies">
    <h3 class="proficiencies__subtitle">Proficiencies</h3>
    <h2 class="proficiencies__title">Things I Use</h2>
    <PackDisplay class="proficiencies__pack" />
  </section>
</template>

<script>
import PackDisplay from './PackDisplay.vue';

export default {
  name: 'Proficiencies',
  components: { PackDisplay },
};
</script>

<style>
.proficiencies {
  height: calc(100vh - 5rem);
  overflow: hidden;
  display: grid;
  grid-template-columns: var(--spacer) 1fr var(--spacer);
  grid-template-rows: 1fr minmax(50%,100vw) repeat(2, auto) 1fr;
  background-color: var(--color-deep-blue);
}

.proficiencies__pack {
  grid-column: 1 / 4;
  grid-row: 2;
}

.proficiencies__title,
.proficiencies__subtitle {
  grid-column: 2;
}

.proficiencies__title {
  grid-row: -3;
  margin-bottom: 0.25em;
}

.proficiencies__subtitle {
  grid-row: -4;
}
</style>
