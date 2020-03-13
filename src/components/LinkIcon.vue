<template>
  <a :href="href" class="linkicon">
    <i :class="['linkicon__icon', iconClass]"></i>
  </a>
</template>

<script>
export default {
  name: 'LinkIcon',
  props: {
    href: String,
    iconClass: String,
  },
};
</script>

<style>
.linkicon {
  font-size: 2rem;
  margin: 0 0.4em;
}

.linkicon__icon {
  color: var(--color-white);
  transition: color var(--ease-primary) var(--duration-short);
}

.linkicon__icon:hover,
.linkicon__icon:hover {
  color: var(--color-accent);
}

@media screen and (max-width: 350px) {
  .linkicon {
    font-size: 1.5em;
  }
}

@media screen and (min-width: 800px) {
  .linkicon {
    font-size: 3em;
    margin-bottom: 0.1em;
  }
}
</style>
