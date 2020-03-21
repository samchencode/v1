<template>
  <footer class="footer">
    <GithubStats class="footer__github" />
    <p class="footer__copyright">
      Made with
      <i class="fas fa-heart"></i>
      By Sam Chen
    </p>
  </footer>
</template>

<script>
import GithubStats from './GithubStats.vue';

export default {
  name: 'Footer',
  components: {
    GithubStats,
  },
};
</script>

<style scoped>
.footer {
  display: grid;
  grid-template-columns: var(--spacer) repeat(8, 1fr) var(--spacer);
  grid-template-rows: repeat(2, 1fr);
  justify-items: left;
  align-items: start;
}

.footer::before {
  grid-column: 2 / -4;
}

.footer__github,
.footer__copyright {
  grid-column: 2 / -2;
}

.footer::before,
.footer__copyright {
  grid-row: 1;
}

.footer::before {
  content: '';
  width: 100%;
  border-top: var(--border-width) solid var(--color-white);
}

.footer__github,
.footer__copyright {
  font-size: var(--font-size-6);
  line-height: 1.3;
}

.footer__copyright {
  align-self: end;
}

.footer__github {
  grid-row: 2;
}

@media screen and (min-width: 800px) {
  .footer {
    grid-template-columns: 1fr repeat(8, minmax(100px, 125px)) 1fr;
  }
}
</style>
