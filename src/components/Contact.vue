<template>
  <section id="contact" class="contact">
    <h3 class="contact__subtitle">Contact</h3>
    <h2 class="contact__title">Let's Talk Over Some Tea.</h2>
    <Button class="contact__button" title="Send a message" href="#" />
  </section>
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'Contact',
  components: {
    Button,
  },
};
</script>

<style scoped>
.contact {
  display: grid;
  height: calc(100vh - 5em);
  grid-template-rows: 1fr repeat(2, auto) 50%;
  padding: var(--spacer);
  row-gap: var(--spacer);
}

.contact__subtitle {
  grid-row: 2;
}

.contact__title {
  grid-row: 3;
}

.button {
  grid-row: 4;
  align-self: start;
  justify-self: left;
}
</style>
