<template>
  <section id="spotlight" class="spotlight">
    <Card
      class="spotlight__card"
      v-for="({ title, description, imgUrl }, i) of projects"
      :key="i"
      :title="title"
      subtitle="Project Spotlight"
      :body="description"
      :imageUrl="imgUrl"
    />
  </section>
</template>

<script>
import Card from './Card.vue';
import placeholderData from '@/assets/projects.json';

export default {
  name: 'Spotlight',
  props: { projects: { type: Array, default: () => placeholderData } },
  components: { Card },
};
</script>
