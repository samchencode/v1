<template>
  <section id="proficiencies" class="proficiencies">
    <header class="proficiencies__header">
      <h3 class="proficiencies__subtitle">Proficiencies</h3>
      <h2 class="proficiencies__title">Stuff I Use</h2>
    </header>
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
  grid-template-rows: 1fr minmax(50%, 100vw) auto 1fr;
  background-color: var(--color-deep-blue);
}

.proficiencies__pack {
  grid-column: 1 / 4;
  grid-row: 2;
}

.proficiencies__header {
  grid-column: 2 / -2;
  grid-row: -3;
}

@media screen and (min-width: 800px) {
  .proficiencies {
    grid-template-columns: 1fr repeat(8, minmax(100px, 125px)) 1fr;
    grid-template-rows: repeat(12, 1fr);
  }

  .proficiencies::before {
    content: '';
    border-left: 1px solid var(--color-white);
    border-right: 1px solid var(--color-white);
    grid-column: 3 / -2;
    grid-row: 2 / -2;
  }

  .proficiencies__pack {
    grid-row: 1 / span all;
    grid-column: 3 / -2;
    font-size: 1.5em;
  }

  .proficiencies__header {
    grid-column: 3 / -2;
    transform: rotate(-90deg);
    transform-origin: bottom left;
  }

  .proficiencies__subtitle {
    align-self: end;
  }
}
</style>
