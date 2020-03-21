<template>
  <li class="label">{{ title }}</li>
</template>

<script>
export default {
  name: 'Label',
  props: {
    title: String,
  },
};
</script>

<style>
.label {
  font-size: 0.9rem;
  padding: 0.5em;
  cursor: default;
  background-color: var(--color-primary);
  border-radius: var(--border-radius);
  margin: 0.5em;
  text-transform: uppercase;
  letter-spacing: 2px;
}

@media screen and (max-width: 350px) {
  .label {
    font-size: 0.8rem;
  }
}

@media screen and (min-width: 860px) {
  .label {
    font-size: 1.3rem;
    letter-spacing: 5px;
  }
}
</style>
