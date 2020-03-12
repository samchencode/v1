<template>
  <div id="app">
    <Hero :badges="badges" />
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import '@/main.css';

export default {
  name: 'App',
  components: { Hero },
  data: () => ({
    badges: ['Full Stack App Development', 'Machine Learning'],
  }),
};
</script>
