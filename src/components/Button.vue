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
  border: var(--border-width) solid var(--color-accent);
  border-radius: var(--border-radius);
  text-decoration: none;
  font-size: 1em;
  letter-spacing: 2px;
  transition:
    background-color var(--ease-primary) var(--duration-short),
    color var(--ease-primary) var(--duration-short);
}

.button:hover,
.button:focus {
  background-color: var(--color-accent);
  color: var(--color-black);
}

@media screen and (min-width: 800px) {
  .button {
    font-size: 1.5rem;
    letter-spacing: 5px;
  }
}
</style>
