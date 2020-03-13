<template>
  <section id="spotlight" class="spotlight">
    <figure class="card spotlight__card">
      <div class="card__image" />
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
      <div class="card__image" />
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
      <div class="card__image" />
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
export default {
  name: 'Spotlight',
  props: {
    projects: Array,
  },
};
</script>

<style>
.card {
  display: grid;
  grid-template-rows: 1fr 60%;
  height: 80vh;
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
  background: url('//unsplash.it/600') no-repeat fixed center;
  background-size: cover;
}

.card:nth-child(odd) .card__image {
  background-color: var(--color-yellow);
}

.card:nth-child(even) .card__image {
  background-color: var(--color-light-blue);
}

.card__caption {
  grid-row-start: 2;
  display: grid;
  grid-template-columns: var(--spacer) auto var(--spacer);
  grid-template-rows: 2em auto var(--spacer-small) 1fr var(--spacer-small);
  align-content: start;
  align-items: center;
  background-color: var(--tint-dark-blue);
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
  overflow-y: scroll;
}
</style>
