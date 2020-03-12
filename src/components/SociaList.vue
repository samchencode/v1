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
  flex-direction: column;
}

.socialist::after {
  content: '';
  height: 50vh;
  margin-top: var(--spacer);
  width: 0;
  border-left: 2px solid var(--color-white);
  align-self: center;
}

.socialist__link {
  font-size: 2rem;
  margin-bottom: .1rem;
}

.socialist__icon {
  color: var(--color-white);
  transition: color ease-out 150ms;
}

.socialist__icon:hover,
.socialist__icon:hover {
  color: var(--color-accent);
}

@media (max-width: 800px) {
  .socialist {
    flex-direction: row;
  }

  .socialist::after {
    display: none;
  }

  .socialist__link {
    margin: 0 .4rem;
  }
}
</style>
