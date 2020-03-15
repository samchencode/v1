<template>
  <div id="app" class="app">
    <Hero :badges="badges" />
    <SociaListGlobal :scrollY="scrollY" :windowHeight="windowHeight" />
    <main class="content">
      <NavBar :scrollY="scrollY" :windowHeight="windowHeight" />
      <Spotlight class="content__section" />
      <Proficiencies class="content__section" />
      <Contact class="content__section" />
      <Footer class="content__footer" />
    </main>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import SociaListGlobal from '@/components/SociaListGlobal.vue';
import NavBar from '@/components/NavBar.vue';
import Spotlight from '@/components/Spotlight.vue';
import Proficiencies from '@/components/Proficiencies.vue';
import Contact from '@/components/Contact.vue';
import Footer from '@/components/Footer.vue';
import '@/main.css';

export default {
  name: 'App',
  components: {
    Hero,
    SociaListGlobal,
    NavBar,
    Spotlight,
    Proficiencies,
    Contact,
    Footer,
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

.content__footer {
  height: 10vh;
}
</style>
