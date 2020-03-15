<template>
  <section class="proficiencies">
    <h3 class="proficiencies__subtitle">Proficiencies</h3>
    <h2 class="proficiencies__title">Stuff I Use</h2>
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
  grid-template-rows: 1fr minmax(50%, 100vw) repeat(2, auto) 1fr;
  background-color: var(--color-deep-blue);
}

.proficiencies__pack {
  grid-column: 1 / 4;
  grid-row: 2;
}

.proficiencies__title,
.proficiencies__subtitle {
  grid-column: 2 / span all;
}

.proficiencies__title {
  grid-row: -3;
  margin-bottom: 0.25em;
}

.proficiencies__subtitle {
  grid-row: -4;
}

@media screen and (min-width: 800px) {
  .proficiencies {
    grid-template-columns: 1fr repeat(8, minmax(100px, 125px)) 1fr;
    column-gap: var(--spacer);
    grid-template-rows: repeat(12, 1fr);
  }

  .proficiencies::before {
    content: '';
    border-left: 1px solid var(--color-white);
    border-right: 1px solid var(--color-white);
    grid-column: 2 / 10;
    grid-row: 2 / -2;
  }

  .proficiencies__pack {
    grid-row: 1 / span all;
    grid-column: 4 / -2;
    font-size: 1.5em;
  }

  .proficiencies__title,
  .proficiencies__subtitle {
    margin-left: var(--spacer);
  }
}
</style>
