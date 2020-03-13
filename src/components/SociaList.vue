<template>
  <div class="socialist">
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
};
</script>

<style scoped>
.socialist {
  position: absolute;
  right: var(--spacer);
  top: var(--spacer);
  display: flex;
  flex-direction: row;
}

.socialist__link {
  font-size: 1.5rem;
  margin: 0 .4em;
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

  .socialist::after {
    content: '';
    height: 50vh;
    margin-top: var(--spacer);
    border-left: 2px solid var(--color-white);
    align-self: center;
  }

  .socialist__link {
    font-size: 3em;
    margin-bottom: .1em;
  }
}
</style>
