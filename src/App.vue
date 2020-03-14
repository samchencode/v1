<template>
  <div id="app" class="app">
    <Hero :badges="badges" />
    <SociaList :scrollY="scrollY" :windowHeight="windowHeight" />
    <main class="content">
      <NavBar :scrollY="scrollY" :windowHeight="windowHeight" />
      <Spotlight class="content__section" />
      <!-- for debug -->
      <Proficiencies
        class="content__section"
        :windowWidth="windowWidth"
        :windowHeight="windowHeight"
      />
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
import Proficiencies from '@/components/Proficiencies.vue';
import '@/main.css';

export default {
  name: 'App',
  components: {
    Hero,
    SociaList,
    NavBar,
    Spotlight,
    Proficiencies,
  },
  data: () => ({
    badges: ['Full Stack Web Development', 'Machine Learning'],
    scrollY: null,
    windowWidth: null,
    windowHeight: null,
  }),
  mounted() {
    this.setScroll();
    window.addEventListener('scroll', this.setScroll);

    this.setWindowSize();
    window.addEventListener('resize', this.setWindowSize);
  },
  methods: {
    setScroll() {
      this.scrollY = window.scrollY;
    },
    setWindowSize() {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
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
