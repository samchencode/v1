<template>
  <ul class="sash">
    <Label
      v-for="badge in badges"
      :key="badge"
      :title="badge"
    ></Label>
  </ul>
</template>

<script>
import Label from './Label.vue';

export default {
  name: 'Sash',
  components: { Label },
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
