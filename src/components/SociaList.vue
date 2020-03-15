<template>
  <div class="socialist">
    <LinkIcon href="#" iconClass="fas fa-envelope" />
    <LinkIcon href="#" iconClass="fab fa-github" />
    <LinkIcon href="#" iconClass="fab fa-codepen" />
    <LinkIcon href="#" iconClass="fab fa-linkedin" />
  </div>
</template>

<script>
import LinkIcon from './LinkIcon.vue';

export default {
  name: 'SociaList',
  components: { LinkIcon },
};
</script>

<style>
.socialist {
  display: flex;
  flex-direction: row;
}

.socialist--invisible {
  opacity: 0;
}
</style>
