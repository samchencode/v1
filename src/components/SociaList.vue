<template>
  <div :class="['socialist', modifierClassNames]">
    <a href="#" class="socialist__link">
      <i class="socialist__icon fas fa-envelope"></i>
    </a>
    <a href="#" class="socialist__link">
      <i class="socialist__icon fab fa-github"></i>
    </a>
    <a href="#" class="socialist__link">
      <i class="socialist__icon fab fa-codepen"></i>
    </a>
    <a href="#" class="socialist__link">
      <i class="socialist__icon fab fa-linkedin"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'SociaList',
  props: {
    scrollY: Number,
  },
  computed: {
    modifierClassNames() {
      const height = window.innerHeight;
      const classes = [];
      if (this.scrollY !== 0 && this.scrollY < height * 0.9) {
        classes.push('socialist--no-tail');
      }
      if (this.scrollY > height * 0.3 && this.scrollY < height * 0.7) {
        classes.push('socialist--invisible');
      }
      if (this.scrollY > height * 0.6) {
        classes.push('socialist--bottom');
      }
      return classes;
    },
  },
};
</script>

<style scoped>
.socialist {
  position: fixed;
  right: var(--spacer);
  top: var(--spacer);
  display: flex;
  flex-direction: row;
  opacity: 1;
  transition: opacity ease-out var(--duration-short);
}

.socialist--invisible {
  opacity: 0;
}

.socialist--bottom {
  display: none;
}

.socialist__link {
  font-size: 1.5rem;
  margin: 0 0.4em;
}

.socialist__icon {
  color: var(--color-white);
  transition: color var(--ease-primary) var(--duration-short);
}

.socialist__icon:hover,
.socialist__icon:hover {
  color: var(--color-accent);
}

@media screen and (min-width: 800px) {
  .socialist {
    flex-direction: column;
  }

  .socialist::before,
  .socialist::after {
    content: '';
    height: 50vh;
    margin: var(--spacer) 0;
    border-left: 2px solid var(--color-white);
    align-self: center;
    opacity: 1;
    transition: opacity ease-out var(--duration-short);
  }

  .socialist:not(.socialist--bottom)::before,
  .socialist--bottom::after {
    display: none;
  }

  .socialist--no-tail::before,
  .socialist--no-tail::after {
    opacity: 0;
  }

  .socialist--bottom {
    display: flex;
    top: auto;
    bottom: var(--spacer);
  }

  .socialist__link {
    font-size: 3em;
    margin-bottom: 0.1em;
  }
}
</style>
