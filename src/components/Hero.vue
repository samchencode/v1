<template>
  <header class="hero">
    <h3 class="hero__subtitle">Hi,</h3>
    <h1 class="hero__title">I'm Sam Chen.</h1>
    <Sash :badges="badges" />
    <h3 class="hero__subtitle">are what I do.</h3>
    <Button href="#" title="My Projects" class="hero__button" />
  </header>
</template>

<script>
import Sash from './Sash.vue';
import Button from './Button.vue';

export default {
  name: 'Hero',
  components: { Sash, Button },
  props: {
    badges: Array,
  },
};
</script>

<style scoped>
.hero {
  height: 100vh;
  max-width: 1000px;
  min-width: 800px;
  /* ! Assuming display size <1000px+2em & >800px+2em */
  display: grid;
  align-content: start;
  grid-template-rows: 50vh repeat(3, auto) 1fr;
}

.hero__title {
  font-size: 5em;
  font-weight: 900;
  letter-spacing: 5px;
}

.hero__subtitle {
  color: var(--color-accent);
}

.hero__subtitle:first-child {
  align-self: end;
}

.hero__button.button {
  display: flex;
  width: 200px;
  height: 3em;
  align-items: center;
  justify-content: center;
  align-self: center;
}
</style>
