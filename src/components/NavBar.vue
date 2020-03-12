<template>
  <header class="sitenav">
    <nav class="sitenav__nav">
      <h1 class="sitenav__logo">Sam Chen</h1>
      <ul class="sitenav__list">
        <li class="sitenav__item">
          <a href="#" class="sitenav__link">Projects</a>
        </li>
        <li class="sitenav__item">
          <a href="#" class="sitenav__link">Proficiencies</a>
        </li>
        <li class="sitenav__item">
          <a href="#" class="sitenav__link">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped>
.sitenav {
  position: sticky;
  top: 0;
  height: 5em;
  padding: 0 1em;
  background-color: var(--color-primary);
}

.sitenav__nav {
  display: grid;
  grid-template-columns: auto 1fr;
  max-width: 1000px;
  min-width: 800px;
  height: 100%;
  margin: 0 auto;
}

.sitenav__list {
  justify-self: end;
  display: grid;
  grid-template-columns: repeat(3, auto);
  column-gap: 1em;
  height: 100%;
}

.sitenav__logo,
.sitenav__link {
  height: 100%;
  padding: 0 0.5em;
  display: grid;
  place-items: center;
}

.sitenav__link {
  text-decoration: none;
}

.sitenav__link:hover,
.sitenav__link:focus {
  background-color: var(--color-accent);
  color: var(--color-black);
}

@supports (clip-path: polygon(0 0)) {
  .sitenav {
    height: calc(5em + 3vw);
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 3vw), 0 100%);
    overflow: hidden;
  }

  .sitenav__logo {
    font-size: calc(2em + 3vw / 2);
    margin-top: calc(-1vw / 2);
  }

  .sitenav__link {
    margin-top: -1vw;
  }
}
</style>
