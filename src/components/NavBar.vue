<template>
  <nav class="sitenav">
    <h2 class="sitenav__logo">Sam Chen</h2>
    <input type="checkbox" id="sitenav__toggle" class="sitenav__toggle"/>
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
    <label for="sitenav__toggle" class="sitenav__toggle-label">
      <div class="sitenav__hamburger"></div>
    </label>
  </nav>
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
  display: flex;
  align-items: center;
  box-shadow: var(--shadow);
  background-color: var(--color-primary);
}

.sitenav__toggle {
  visibility: hidden;
  position: absolute;
  z-index: -1;
}

.sitenav__toggle-label {
  display: grid;
  place-items: center;
  height: var(--font-size-2);
  width: var(--font-size-2);
  margin-left: var(--spacer);
  cursor: pointer;
}

.sitenav__hamburger {
  position: relative;
}

.sitenav__hamburger,
.sitenav__hamburger::before,
.sitenav__hamburger::after {
  width: 100%;
  height: 0;
  border-top: 2px solid var(--color-white);
  transition: transform var(--ease-primary) var(--duration-short);
}

.sitenav__hamburger::before,
.sitenav__hamburger::after {
  content: '';
  position: absolute;
}

.sitenav__hamburger::before {
  bottom: calc(var(--font-size-2) / 4 + 0.1em);
  transform: scale(1,1);
  transition: opacity var(--ease-primary) var(--duration-short);
}

.sitenav__hamburger::after {
  top: calc(var(--font-size-2) / 4);
}

.sitenav__toggle:checked ~ .sitenav__toggle-label .sitenav__hamburger {
  transform: rotate(45deg);
}

.sitenav__toggle:checked ~ .sitenav__toggle-label .sitenav__hamburger::before {
  opacity: 0;
  transform: scale(0,1);
}


.sitenav__toggle:checked ~ .sitenav__toggle-label .sitenav__hamburger::after {
  transform: translateY(calc(-1 * (var(--font-size-2) / 4 + 0.1em))) rotate(-90deg);
}

.sitenav__list {
  position: absolute;
  top: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  transform: scale(1,0);
  transform-origin: top;
  transition: transform var(--ease-primary) var(--duration-short);
}

.sitenav__toggle:checked ~ .sitenav__list {
  transform: scale(1,1);
}

.sitenav__logo {
  display: none;
}

.sitenav__link {
  padding: 1em;
  display: grid;
  place-items: center;
  border-top: var(--border-width) solid var(--color-dark);
  background-color: var(--color-primary);
  text-decoration: none;
  transition: background-color var(--ease-primary) var(--duration-short);
}

.sitenav__link:hover,
.sitenav__link:focus {
  background-color: var(--color-accent);
  color: var(--color-black);
}

@supports (clip-path: polygon(0 0)) {
  .sitenav__item:last-child .sitenav__link {
    padding-bottom: calc(1em + 4vw);
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 4vw), 0 100%);
    overflow: hidden;
  }
}

@media screen and (min-width: 800px) {
  /* .sitenav {
    padding: 0 1em;
  } */

  .sitenav {
    display: grid;
    grid-template-columns: auto 1fr;
    max-width: 1000px;
    min-width: 800px;
    height: 5em;
    margin: 0 auto;
  }

  .sitenav__list {
    justify-self: end;
    display: grid;
    grid-template-columns: repeat(3, auto);
    column-gap: 1em;
    height: 100%;
  }

  .sitenav__toggle-label,
  .sitenav__toggle-label {
    display: none;
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
    background-color: inherit;
    transition: background-color var(--ease-primary) var(--duration-short);
  }

  .sitenav__link:hover,
  .sitenav__link:focus {
    background-color: var(--color-accent);
    color: var(--color-black);
  }

  /* @supports (clip-path: polygon(0 0)) {
    .sitenav__list {
      height: calc(5em + 3vw);
      clip-path: polygon(0 0, 100% 0, 100% calc(100% - 3vw), 0 100%);
      overflow: hidden;
    }

    .sitenav__logo {
      font-size: calc(var(--font-size-2) + 3vw / 2);
      margin-top: calc(-1vw / 2);
    }

    .sitenav__link {
      margin-top: -1vw;
    }
  } */
}
</style>
