<template>
  <ul class="sash">
    <Badge
      v-for="badge in badges"
      :key="badge"
      :title="badge"
    ></Badge>
  </ul>
</template>

<script>
import Badge from './Badge.vue';

export default {
  name: 'Sash',
  components: { Badge },
  props: {
    badges: Array,
  },
};
</script>

<style>
.sash {
  display: flex;
  flex-wrap: wrap;
}
</style>
