<template>
  <a :href="href" class="button">{{ title }}</a>
</template>

<script>
export default {
  name: 'Button',
  props: {
    href: String,
    title: String,
  },
};
</script>

<style>
.button {
  display: inline-block;
  background-color: none;
  border: 1px solid var(--color-accent);
  text-decoration: none;
  border-radius: var(--border-radius);
  transition:
    background-color var(--ease-primary) var(--duration-short),
    color var(--ease-primary) var(--duration-short);
}

.button:hover,
.button:focus {
  background-color: var(--color-accent);
  color: var(--color-black);
}
</style>
