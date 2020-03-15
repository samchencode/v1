<template>
  <p class="github">
    <span class="github__stars">
      <i class="fas fa-star"></i>
      {{ stars }}
    </span>
    <span class="github__forks">
      <i class="fas fa-code-branch"></i>
      {{ forks }}
    </span>
  </p>
</template>

<script>
import github from '@/util/githubFacade';

export default {
  name: 'GithubStats',
  data() {
    return {
      stars: null,
      forks: null,
    };
  },
  mounted() {
    github.getStars().then(this.setStars);
    github.getForks().then(this.setForks);
  },
  methods: {
    setStars(stars) {
      this.stars = stars;
    },
    setForks(forks) {
      this.forks = forks;
    },
  },
};
</script>

<style>
.github span {
  margin-right: 1em;
}
</style>
