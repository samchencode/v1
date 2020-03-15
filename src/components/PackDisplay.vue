<template>
    <div ref="container" class="pack">
      <svg class="pack__svg" overflow="visible">
        <g text-anchor="middle">
          <g v-for="[height, nodes] of layers" :key="'layer-' + height">
            <g
              v-for="n of nodes"
              :key="'node-' + n.data.id"
              :transform="`translate(${n.x},${n.y})`"
            >
              <circle
                @mouseenter="handleMouseEnterCircle(n)"
                @mouseleave="handleMouseLeaveCircle(n)"
                :r="n.r"
                :fill="scaleColor(height, n)"
                :stroke="focusCircle === n.data.id && 'white'"
              />
              <text
                transform="rotate(-45)"
                v-if="n.height === 0"
                font-size=".48em"
                y=".5em"
              >
                <tspan
                  v-for="(word, i) of n.data.name.split(/[ \.]/)"
                  :key="i"
                  x="0"
                  :y="i + 'em'"
                  :dy="
                    i * 0.2 -
                      0.2 * (n.data.name.split(/[ \.]/).length - 1) +
                      'em'
                  "
                >
                  {{ word }}
                </tspan>
              </text>
            </g>
          </g>
          <path
            v-for="n of layers.get(1)"
            :key="'path-' + n.id"
            :id="'path-' + n.id"
            :d="generatePath(n)"
            fill="none"
            :transform="
              `translate(${n.x},${n.y}) rotate(${getPathMeta(n).rot})`
            "
          />
          <text v-for="n of layers.get(1)" :key="'text-' + n.data.id">
            <textPath :href="'#path-' + n.id" startOffset="50%" fill="#eff1ed">
              {{ n.data.name }}
            </textPath>
          </text>
        </g>
      </svg>
    </div>
</template>

<script>
import * as d3 from '@/lib/d3';
import colorScale from '@/util/colorScale';
import placeholderData from '@/assets/proficiencies.json';
// TODO: chunk and lazy-load dependencies

export default {
  name: 'PackDisplay',
  data() {
    return {
      mounted: false,
      container: null,
      svgContainerWidth: -1,
      svgContainerHeight: -1,
      focusCircle: null,
    };
  },
  mounted() {
    this.container = this.$refs.container;
    this.updateSvgContainerDims();
    window.addEventListener('resize', this.updateSvgContainerDims);
    this.mounted = true;
  },
  methods: {
    generatePath(node) {
      const { clockwise, radiusPaddingEm } = this.getPathMeta(node);
      const clockwiseMultiplier = clockwise ? 1 : -1;
      const radius = node.r + this.fontSize * radiusPaddingEm;
      const arcGenerator = d3
        .arc()
        .startAngle((clockwiseMultiplier * -Math.PI) / 2)
        .endAngle((clockwiseMultiplier * Math.PI) / 2);
      return arcGenerator({ outerRadius: radius });
    },
    getPathMeta(node) {
      const pathMeta = {
        2: { rot: 130, radiusPaddingEm: 0.9, clockwise: false },
        3: { rot: -50, radiusPaddingEm: 0.2, clockwise: true },
        4: { rot: 0, radiusPaddingEm: 0.2, clockwise: true },
        5: { rot: 180, radiusPaddingEm: 0.9, clockwise: false },
      };
      return pathMeta[node.data.id];
    },
    updateSvgContainerDims() {
      this.svgContainerWidth = this.container.clientWidth;
      this.svgContainerHeight = this.container.clientHeight;
    },
    handleMouseEnterCircle(node) {
      if (node.height !== 0) return;
      this.focusCircle = node.data.id;
    },
    handleMouseLeaveCircle(node) {
      if (node.height !== 0) return;
      this.focusCircle = null;
    },
  },
  computed: {
    fontSize() {
      if (!this.mounted) return -1;
      return parseFloat(getComputedStyle(this.container).fontSize);
    },
    proficiencyData() {
      return d3
        .stratify()
        .id((d) => d.name)
        .parentId((d) => d.type)
        .call(null, placeholderData)
        .sum((d) => (d.children ? d.children.length : 0) + 1)
        .sort((a, b) => (b.data.category < a.data.category) - 0.5)
        .sort((a, b) => b.value - a.value);
    },
    root() {
      return d3
        .pack()
        .size([this.svgContainerWidth * 1.14, this.svgContainerHeight])
        .call(null, this.proficiencyData);
    },
    layers() {
      return d3.group(this.root.descendants(), (d) => d.height);
    },
    scaleColor() {
      return colorScale(this.root.descendants());
    },
  },
};
</script>

<style>

.pack__svg {
  height: 100%;
  width: 114%;
  margin: 0 -7%;
  transform: rotate(45deg);
}
</style>
