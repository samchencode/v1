<template>
  <div :class="['socialist', modifierClassNames]">
    <LinkIcon href="#" iconClass="fas fa-envelope" />
    <LinkIcon href="#" iconClass="fab fa-github" />
    <LinkIcon href="#" iconClass="fab fa-codepen" />
    <LinkIcon href="#" iconClass="fab fa-linkedin" />
  </div>
</template>

<script>
import LinkIcon from './LinkIcon.vue';

export default {
  name: 'SociaList',
  props: {
    scrollY: Number,
    windowHeight: Number,
  },
  components: { LinkIcon },
  computed: {
    modifierClassNames() {
      const height = this.windowHeight;
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
  z-index: 100;
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
}

@media screen and (min-width: 1200px) {
  .socialist--bottom {
    display: flex;
    top: auto;
    bottom: var(--spacer);
    color: var(--tint-white);
  }

  .socialist--bottom::before {
    border-color: var(--tint-white);
  }

  .socialist--bottom /deep/ .linkicon__icon {
    color: var(--tint-white);
  }
}
</style>
