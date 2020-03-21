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
  height: calc(90vh - var(--nav-height));
  grid-template-rows: 1fr repeat(3, auto) 2fr;
  padding: 0 var(--spacer);
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

@media screen and (min-width: 860px) {

  .contact {
    padding: 0;
    grid-template-columns: 1fr minmax(800px, 1000px) 1fr;
  }

  .contact__subtitle,
  .contact__title,
  .contact__button,
  .contact__socialist {
    grid-column: 2;
  }
}

</style>
