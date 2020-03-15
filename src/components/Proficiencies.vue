<template>
  <section class="proficiencies" ref="container">
    <!-- <h3 class="proficiencies__subtitle">Proficiencies</h3> -->
    <!-- <h1>Stuff I've Used</h1> -->
    <svg
      class="proficiencies__svg"
      :transform="`rotate(45) translate(${svgContainerWidth * -0.07},0)`"
      overflow="visible"
    >
      <g>
        <g v-for="[height, circles] of layers" :key="'layer-' + height">
          <circle
            v-for="(c, i) of circles"
            :key="'circle-' + height + i"
            :cx="c.x"
            :cy="c.y"
            :r="c.r"
            :fill="scaleColor(height, c)"
          />
        </g>
      </g>
    </svg>
  </section>
</template>

<script>
import * as d3 from '@/lib/d3';
import colorScale from '@/util/colorScale';
import placeholderData from '@/assets/proficiencies.json';
// TODO: chunk and lazy-load dependencies

export default {
  name: 'Proficiencies',
  data() {
    return {
      svgContainerWidth: 0,
      container: null,
      proficiencyData: null,
      root: null,
      layers: null,
      scaleColor: null,
    };
  },
  mounted() {
    this.container = this.$refs.container;

    this.loadData();
    this.createPack();
    window.addEventListener('resize', this.handleResize);

    this.setScaleColor();
  },
  methods: {
    loadData() {
      const stratify = d3
        .stratify()
        .id((d) => d.name)
        .parentId((d) => d.type);

      this.proficiencyData = stratify(placeholderData)
        .sum((d) => (d.children ? d.children.length : 0) + 1)
        .sort((a, b) => (b.data.category > a.data.category) - 0.5)
        .sort((a, b) => b.value - a.value);
    },
    createPack() {
      this.svgContainerWidth = this.container.clientWidth;
      const width = this.container.clientWidth * 1.14;
      const height = this.container.clientHeight;

      this.root = d3
        .pack()
        .size([width, height])
        .call(null, this.proficiencyData);
      this.layers = d3.group(this.root.descendants(), (d) => d.height);
    },
    setScaleColor() {
      this.scaleColor = colorScale(this.root.descendants());
    },
    handleResize() {
      this.createPack();
    },
  },
};
</script>

<style>
.proficiencies {
  overflow: hidden;
}

.proficiencies__svg {
  width: 100%;
  height: 100%; /* change if dont want it centered */
}
</style>
