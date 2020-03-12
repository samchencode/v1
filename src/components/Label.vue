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
  padding: 0.5rem;
  cursor: default;
  background-color: var(--color-primary);
  border-radius: var(--border-radius);
  margin: 0.5em;
  text-transform: uppercase;
  letter-spacing: 5px;
}
</style>
