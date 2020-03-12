<template>
  <div id="app">
    <Hero :badges="badges" />
    <SociaList />
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import SociaList from '@/components/SociaList.vue';
import '@/main.css';

export default {
  name: 'App',
  components: { Hero, SociaList },
  data: () => ({
    badges: ['Full Stack App Development', 'Machine Learning'],
  }),
};
</script>

<style>
#app {
  margin: 0 auto;
  max-width: 1000px;
  position: relative;
}
</style>
