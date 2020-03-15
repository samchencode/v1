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
  overflow: hidden;
  display: grid;
  grid-template-columns: var(--spacer) 1fr var(--spacer);
  grid-template-rows: var(--spacer) repeat(2, auto) minmax(60%, 100%) var(
      --spacer
    );
}

.proficiencies__pack {
  grid-column: 2;
  grid-row: 4;
}

.proficiencies__title,
.proficiencies__subtitle {
  grid-column: 2;
}

.proficiencies__title {
  grid-row: 3;
  font-size: 3em;
}

.proficiencies__subtitle {
  grid-row: 2;
}
</style>
