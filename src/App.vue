<template>
  <div id="app" class="app">
    <Hero :badges="badges" />
    <SociaList :scrollY="scrollY" />
    <main class="content">
      <NavBar />
      <Spotlight class="content__section"/>
      <!-- for debug -->
      <section class="content__section" />
      <section class="content__section" />
      <section class="content__section" />
      <section class="content__section" />
    </main>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import SociaList from '@/components/SociaList.vue';
import NavBar from '@/components/NavBar.vue';
import Spotlight from '@/components/Spotlight.vue';
import '@/main.css';

export default {
  name: 'App',
  components: {
    Hero,
    SociaList,
    NavBar,
    Spotlight,
  },
  data: () => ({
    badges: ['Full Stack Web Development', 'Machine Learning'],
    scrollY: null,
  }),
  mounted() {
    this.scrollY = window.scrollY;
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;
    },
  },
};
</script>

<style>
.app {
  position: relative;
}

.content__section:not(:nth-child(2)) {
  height: 80vh; /* probably need to remove this later */
  display: grid;
}

.content__section:nth-child(odd) {
  background-color: var(--color-gray);
}

</style>
