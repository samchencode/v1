<template>
  <nav :class="['sitenav', modifierClassNames]">
    <h2 class="sitenav__logo">
      <a href="#">Sam Chen</a>
    </h2>
    <input type="checkbox" id="sitenav__toggle" class="sitenav__toggle" />
    <ul class="sitenav__list">
      <li class="sitenav__item">
        <a href="#spotlight" class="sitenav__link">Projects</a>
      </li>
      <li class="sitenav__item">
        <a href="#proficiencies" class="sitenav__link">Proficiencies</a>
      </li>
      <li class="sitenav__item">
        <a href="#contact" class="sitenav__link">Contact</a>
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
  props: { windowHeight: Number, scrollY: Number },
  computed: {
    modifierClassNames() {
      const classes = [];
      if (this.scrollY > this.windowHeight) {
        classes.push('sitenav--liftoff');
      }
      return classes;
    },
  },
};
</script>

<style scoped>
.sitenav {
  position: sticky;
  top: 0;
  z-index: 100;
  height: var(--nav-height);
  display: flex;
  align-items: center;
  background-color: var(--color-primary);
}

.sitenav--liftoff {
  box-shadow: var(--shadow);
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
  cursor: default;
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
  transform: scale(1, 1);
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
  transform: scale(0, 1);
}

.sitenav__toggle:checked ~ .sitenav__toggle-label .sitenav__hamburger::after {
  transform: translateY(calc(-1 * (var(--font-size-2) / 4 + 0.1em)))
    rotate(-90deg);
}

.sitenav__list {
  position: absolute;
  top: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  transform: scale(1, 0);
  transform-origin: top;
  transition: transform var(--ease-primary) var(--duration-short);
}

.sitenav__toggle:checked ~ .sitenav__list {
  transform: scale(1, 1);
}

.sitenav__logo {
  display: none;
}

.sitenav__link {
  padding: 1em var(--spacer);
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
  }
}

@media screen and (min-width: 800px) {
  .sitenav {
    display: grid;
    grid-template-columns: 1fr minmax(800px, 1000px) 1fr;
    height: auto;
  }

  .sitenav__logo {
    display: block;
    grid-column: 2;
    grid-row: 1;
    justify-self: left;
    padding: 0 var(--spacer);
  }

  .sitenav__list {
    position: static;
    width: auto;
    transform: scale(1, 1);
    grid-column: 2;
    grid-row: 1;
    justify-self: right;
    display: grid;
    grid-template-columns: repeat(3, auto);
    column-gap: 1em;
    height: 100%;
  }

  .sitenav__toggle,
  .sitenav__toggle-label {
    display: none;
  }

  .sitenav__link {
    height: 100%;
    padding: 0 0.5em;
    border: 0;
    text-decoration: none;
    background-color: inherit;
    transition: background-color var(--ease-primary) var(--duration-short);
  }

  .sitenav__link:hover,
  .sitenav__link:focus {
    background-color: var(--color-accent);
    color: var(--color-black);
  }

  @supports (clip-path: polygon(0 0)) {
    .sitenav {
      box-sizing: content-box;
      padding-bottom: 3vw;
      clip-path: polygon(0 0, 100% 0, 100% calc(100% - 3vw), 0 100%);
      margin-bottom: -3vw;
    }

    .sitenav__logo {
      font-size: calc(var(--font-size-2) + 1.5vw);
      transform: translateY(1vw);
    }

    .sitenav__link {
      box-sizing: content-box;
      padding-bottom: 3vw;
    }

    .sitenav__item:last-child .sitenav__link {
      clip-path: none;
      padding-bottom: 3vw;
    }
  }
}
</style>
