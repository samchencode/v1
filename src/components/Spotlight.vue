<template>
  <section id="spotlight" class="spotlight">
    <figure class="card spotlight__card">
      <div class="card__image">
        <div class="card__btn-group">
          <LinkIcon
            class="card__linkicon"
            href="#"
            iconClass="fas fa-link"
          />
          <LinkIcon
            class="card__linkicon"
            href="#"
            iconClass="fas fa-code"
          />
        </div>
      </div>
      <figcaption class="card__caption">
        <h3 class="card__subtitle">Project Spotlight</h3>
        <h2 class="card__title">My Awesome Project</h2>
        <p class="card__body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </figcaption>
    </figure>
    <figure class="card spotlight__card">
      <div class="card__image">
        <div class="card__btn-group">
          <LinkIcon
            class="card__linkicon"
            href="#"
            iconClass="fas fa-link"
          />
          <LinkIcon
            class="card__linkicon"
            href="#"
            iconClass="fas fa-code"
          />
        </div>
      </div>
      <figcaption class="card__caption">
        <h3 class="card__subtitle">Project Spotlight</h3>
        <h2 class="card__title">My Project</h2>
        <p class="card__body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          sollicitudin justo eros. Nam auctor, mauris eu finibus pharetra, justo
          felis.
        </p>
      </figcaption>
    </figure>
    <figure class="card spotlight__card">
      <div class="card__image">
        <div class="card__btn-group">
          <LinkIcon
            class="card__linkicon"
            href="#"
            iconClass="fas fa-link"
          />
          <LinkIcon
            class="card__linkicon"
            href="#"
            iconClass="fas fa-code"
          />
        </div>
      </div>
      <figcaption class="card__caption">
        <h3 class="card__subtitle">Project Spotlight</h3>
        <h2 class="card__title">My Project Overflows</h2>
        <p class="card__body">
          Quisque consectetur iaculis tellus eget eleifend. Fusce quis purus
          volutpat, interdum diam vitae, sagittis elit. Etiam posuere eros vel
          ultrices commodo. Quisque facilisis eu felis sit amet placerat.
          Quisque in lobortis eros, sit amet pretium lectus. Donec purus tellus,
          sodales quis tincidunt eu, porta sit amet mauris. Maecenas lacinia a
          magna nec placerat. Sed egestas mattis tempor. Sed pellentesque luctus
          semper. Phasellus congue magna massa, ac egestas nibh congue pulvinar.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          vulputate quam a nisi fermentum, suscipit consectetur lectus egestas.
          Aliquam ac commodo eros, nec condimentum nisl. Quisque pretium aliquam
          neque eget molestie. Donec in erat ac dolor efficitur elementum nec et
          lectus. Pellentesque in erat rutrum, sagittis elit nec, vestibulum
          nulla. Suspendisse feugiat bibendum suscipit. Nullam maximus quam quis
          cursus fermentum. Curabitur ornare nunc ac felis dictum laoreet.
          Suspendisse finibus venenatis leo, sit amet mattis turpis gravida nec.
          Nam urna enim, dapibus ac sodales id, dictum ac neque. Aenean bibendum
          dapibus odio a iaculis. Phasellus porta dolor sit amet leo tempor
          finibus. Sed vitae enim at purus efficitur vestibulum. Nam eget enim
          purus. Etiam lacus leo, fermentum at ullamcorper sit amet, viverra sit
          amet massa. Pellentesque ut fringilla urna, et suscipit metus. Quisque
          sagittis ante in velit elementum, id vestibulum libero tempor. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Duis semper lectus
          ut turpis scelerisque, sed sollicitudin libero imperdiet. Nunc
          ultricies molestie molestie. Etiam quis enim lacus. Vestibulum ac
          porta velit. Suspendisse magna libero, mollis auctor accumsan et,
          volutpat sed neque. Phasellus nec molestie eros, at interdum diam.
          Mauris posuere magna et mauris dictum, ut pharetra leo efficitur.
          Maecenas euismod ante in quam dictum hendrerit sit amet vel metus. Sed
          et tempus orci. Aenean posuere blandit lacus, vel aliquet neque
          gravida et. Aliquam condimentum pharetra mi. Sed pharetra suscipit
          eros.
        </p>
      </figcaption>
    </figure>
  </section>
</template>

<script>
import LinkIcon from './LinkIcon.vue';

export default {
  name: 'Spotlight',
  props: {
    projects: Array,
  },
  components: { LinkIcon },
};
</script>

<style>
.card {
  display: grid;
  grid-template-rows: minmax(40%, 1fr) auto;
  height: 80vh;
  --image-url: url('//unsplash.it/600');
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
  display: grid;
  grid-template-rows: subgrid;
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

.card__caption {
  grid-row: 2;
  display: grid;
  max-height: calc(80vh * 0.6);
  grid-template-columns: var(--spacer) 1fr var(--spacer);
  grid-template-rows: 2em auto var(--spacer-small) 1fr var(--spacer-small);
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
  overflow-y: auto;
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
  }

  .card__linkicon:nth-child(1) {
    transition-delay: 50ms;
  }

  .card__linkicon:nth-child(2) {
    transition-delay: 0ms;
  }
}
</style>
