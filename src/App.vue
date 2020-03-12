<template>
  <div id="app">
    <Hero :badges="badges" />
    <SociaList />
    <main class="content">
      <NavBar />
      <!-- for debug -->
      <section style="height:100vh" />
    </main>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import SociaList from '@/components/SociaList.vue';
import NavBar from '@/components/NavBar.vue';
import '@/main.css';

export default {
  name: 'App',
  components: { Hero, SociaList, NavBar },
  data: () => ({
    badges: ['Full Stack Web Development', 'Machine Learning'],
  }),
};
</script>

<style>
#app {
  position: relative;
}
</style>
