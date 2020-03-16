<template>
  <figure
    class="card"
    :style="`--image-url: url(${imageUrl});`"
  >
    <div class="card__image">
      <div class="card__btn-group">
        <LinkIcon class="card__linkicon" href="#" iconClass="fas fa-link" />
        <LinkIcon class="card__linkicon" href="#" iconClass="fas fa-code" />
      </div>
    </div>
    <figcaption class="card__caption">
      <h3 class="card__subtitle">{{ subtitle }}</h3>
      <h2 class="card__title">{{ title }}</h2>
      <p class="card__body">{{ body }}</p>
    </figcaption>
  </figure>
</template>

<script>
import LinkIcon from './LinkIcon.vue';

export default {
  name: 'Card',
  components: { LinkIcon },
  props: {
    title: String,
    subtitle: String,
    body: String,
    imageUrl: String,
  },
};
</script>

<style>
.card {
  display: grid;
  grid-template-rows: minmax(40%, 1fr) auto;
  height: calc(90vh - 5em);
}

.card__image,
.card__caption {
  grid-column: 1;
}

.card__image {
  height: 100%;
  width: 100%;
  grid-row: 1 / 3;
  background-blend-mode: multiply;
  background: var(--image-url) no-repeat fixed center/cover;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 1em 0.5em;
}

.card:nth-child(odd) .card__image {
  background-color: var(--color-yellow);
}

.card:nth-child(even) .card__image {
  background-color: var(--color-red);
}

.card__btn-group {
  grid-row: 1;
  grid-column: 1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.card__linkicon {
  font-size: 2.5em;
}

.card__caption {
  grid-row: 2;
  display: grid;
  max-height: calc(80vh * 0.6);
  grid-template-columns: var(--spacer) 1fr var(--spacer);
  grid-template-rows: var(--font-size-3) auto var(--spacer-small) 1fr var(
      --spacer-small
    );
  align-content: start;
  align-items: center;
  background-color: var(--tint-black);
}

.card__title,
.card__body,
.card__subtitle {
  grid-column: 2;
}

.card__title {
  line-height: 0.9;
}

.card__body {
  grid-row: 4;
  align-self: start;
  height: 100%;
  /* Calculated from grid template sizes so update this if those change */
  max-height: calc(
    48vh - 2 * var(--spacer-small) - var(--font-size-1) - var(--font-size-3)
  );
  overflow-y: auto;
}

@supports (grid-template-rows: subgrid) {
  .card__image {
    grid-template-rows: subgrid;
    display: grid;
    align-items: center;
  }
}

@media screen and (min-width: 800px) {
  .card {
    grid-template-columns: 1fr repeat(8, minmax(100px, 125px)) 1fr;
    grid-template-rows: repeat(8, 1fr);
    padding: 0 var(--spacer);
  }

  .card:nth-child(odd) {
    background-color: var(--color-purple);
  }

  .card:nth-child(odd) .card__image {
    grid-column: 2 / 8;
  }

  .card:nth-child(odd) .card__caption {
    grid-column: 6 / 10;
  }

  .card:nth-child(even) {
    background-color: var(--color-dark-blue);
  }

  .card:nth-child(even) .card__image {
    grid-column: 4 / 10;
  }

  .card:nth-child(even) .card__caption {
    grid-column: 2 / 6;
  }

  .card__image {
    display: grid;
    padding: 0;
    background-attachment: scroll;
    grid-row: 1 / 9;
    position: relative;
    z-index: 1;
    overflow: hidden;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(8, 1fr);
  }

  .card__image::before {
    content: '';
    position: absolute;
    background-color: var(--tint-black);
    height: 120%;
    width: 45%;
    bottom: 0;
    transform: rotate(0deg);
    transition: transform var(--duration-medium) var(--ease-primary);
  }

  .card:nth-child(odd) .card__image::before {
    right: 100%;
    transform-origin: bottom right;
  }

  .card:nth-child(even) .card__image::before {
    left: 100%;
    transform-origin: bottom left;
  }

  .card:nth-child(odd) .card__image:hover::before {
    transform: rotate(14deg);
  }

  .card:nth-child(even) .card__image:hover::before {
    transform: scale(1, 1) rotate(-14deg);
  }

  .card__image:hover .card__btn-group {
    display: flex;
  }

  .card__image:hover .card__btn-group .card__linkicon {
    opacity: 1;
  }

  .card__image:hover .card__btn-group .card__linkicon:nth-child(1) {
    transition-delay: 100ms;
  }

  .card__image:hover .card__btn-group .card__linkicon:nth-child(2) {
    transition-delay: 150ms;
  }

  .card__caption {
    z-index: 2;
    height: min-content;
    grid-row: 4 / 8;
    grid-template-rows: 2em auto var(--spacer) 1fr var(--spacer);
  }

  .card__subtitle {
    font-size: 1.2em;
  }

  .card__btn-group {
    grid-row: 1 / 4;
    flex-direction: column;
    z-index: 2;
    height: 100%;
  }

  .card:nth-child(odd) .card__btn-group {
    grid-column: 1;
  }

  .card:nth-child(even) .card__btn-group {
    grid-column: 6;
  }

  .card__linkicon {
    opacity: 0;
    transition: opacity var(--duration-short) var(--ease-primary);
    font-size: 4em;
  }

  .card__linkicon:nth-child(1) {
    transition-delay: 50ms;
  }

  .card__linkicon:nth-child(2) {
    transition-delay: 0ms;
  }
}
</style>
