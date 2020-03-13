<template>
  <section class="hero">
    <h3 class="hero__subtitle">Hi, I'm</h3>
    <h1 class="hero__title">Sam Chen.</h1>
    <Sash :badges="badges" />
    <h3 class="hero__subtitle">are what I do.</h3>
    <Button href="#" title="My Projects" class="hero__button" />
  </section>
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
  padding: 0 var(--spacer);
  display: grid;
  align-content: start;
  grid-template-rows: 40vh repeat(3, auto) 1fr;
}

.hero__title {
  letter-spacing: 4px;
  line-height: 1;
}

.hero__subtitle {
  color: var(--color-accent);
  margin-left: 0.3em;
}

.hero__subtitle:first-child {
  align-self: end;
}

.hero__button.button {
  display: grid;
  place-items: center;
  margin-right: auto;
  padding: .8em 2em;
  align-self: center;
}

@media screen and (min-width: 800px) {
  .hero {
    max-width: 1000px;
    min-width: 800px;
    margin: 0 auto;
  }

  .hero__title {
    letter-spacing: 5px;
  }

  .hero__subtitle {
    color: var(--color-accent);
  }
}
</style>
