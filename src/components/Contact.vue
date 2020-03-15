<template>
  <section id="contact" class="contact">
    <h3 class="contact__subtitle">Contact</h3>
    <h2 class="contact__title">Let's Chat Over Some Tea.</h2>
    <Button class="contact__button" title="Send an email" href="#" />
    <SociaList class="contact__socialist" />
  </section>
</template>

<script>
import Button from './Button.vue';
import SociaList from './SociaList.vue';

export default {
  name: 'Contact',
  components: {
    Button,
    SociaList,
  },
};
</script>

<style scoped>
.contact {
  display: grid;
  height: calc(90vh - 5em);
  grid-template-rows: 1fr repeat(3, auto) 2fr;
  padding: var(--spacer);
  row-gap: var(--spacer);
}

.contact__subtitle {
  grid-row: 2;
}

.contact__title {
  grid-row: 3;
}

.contact__button {
  grid-row: 4;
  justify-self: left;
}

.contact__socialist {
  grid-row: 5;
  align-self: start;
}
</style>
