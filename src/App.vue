<template>
  <div id="app">
    <header class="hero">
      <h3 class="hero__subtitle">Hi,</h3>
      <h1 class="hero__title">I'm Sam Chen.</h1>
      <ul class="sash">
        <li class="badge sash__badge">Full Stack Web Development</li>
        <li class="badge sash__badge">Machine Learning</li>
      </ul>
      <h3 class="hero__subtitle">are what I do.</h3>
      <a href="#" class="button hero__button">Projects</a>
    </header>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
};
</script>

<style>
/* Global Variables */

:root {
  /* Colors */
  --color-black: #272727;
  --color-orange: #ff6f59;
  --color-dark-red: #773344;
  --color-gray: #696d7d;
  --color-dark-gray: #474448;
  --color-light-green: #beef9e;
  --color-red: #f45b69;
  --color-green: #00a676;
  --color-yellow: #ffbc42;
  --color-white: #eff1ed;

  /* Meaningful Colors */
  --color-primary: #028090;
  --color-dark: #114b5f;
  --color-darker: #0b132b;
  --color-light: var(--color-white);
  --color-success: var(--color-green);
  --color-warning: var(--color-yellow);
  --color-danger: var(--color-red);
  --color-accent: var(--color-light-green);
  --color-background: var(--color-dark-gray);

  /* Spacing */
  --spacer: 1rem;
  --spacer-large: 3rem;
  --border-radius: .5rem;

  --shadow: 0 0 1em rgba(0,0,0,.25);
}

/* Global Styles */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--color-background);
  margin: 0 var(--spacer);
}

#app {
  margin: 0 auto;
  /* ! Might wanna make this auto later */
}

ul, li {
  list-style: none;
}

/* Typography */

* {
  font-family: 'Roboto Mono', monospace;
  color: var(--color-light);
}

a:hover,
a:focus {
  color: var(--color-accent);
}

/* Components */

.hero {
  height: 100vh;
  max-width: 1000px;
  min-width: 800px;
  /* ! Assuming display size <1000px+2em & >800px+2em */
  display: grid;
  align-content: start;
  grid-template-rows: 50vh repeat(3, auto) 1fr;
}

.hero__title {
  font-size: 5em;
  font-weight: 900;
  letter-spacing: 5px;
}

.hero__subtitle {
  color: var(--color-accent);
}

.hero__subtitle:first-child {
  align-self: end;
}

.hero__button.button {
  display: flex;
  width: 200px;
  height: 3em;
  align-items: center;
  justify-content: center;
  align-self: center;
}

.sash {
  display: flex;
  flex-wrap: wrap;
}

.badge {
  padding: .5rem;
  cursor: default;
  border: 1px solid var(--color-primary);
  border-radius: var(--border-radius);
  margin: .5em;
  text-transform: uppercase;
  letter-spacing: 5px;
}

.button {
  display: inline-block;
  background-color: var(--color-primary);
  text-decoration: none;
  border-radius: var(--border-radius);
  transition:
    background-color ease-out 150ms,
    color ease-out 150ms;
}

.button:hover,
.button:focus {
  background-color: var(--color-accent);
  color: var(--color-black);
}

</style>
