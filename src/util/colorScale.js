import * as d3 from '@/lib/d3';

const types = ['library-framework', 'language', 'design-tool', 'dev-tool'];
const typeRange = ['#ff6f59', '#9d44b5', '#38aecc', '#f7b2b7'];
const categoryRanges = [
  ['#ffe2de', '#ff8978'],
  ['#dfd9e2', '#9b55ad'],
  ['#bde6f0', '#4ebdd9'],
  ['#fcf0f1', '#facacc'],
];

const colorScheme = (from, to, steps) => {
  const scale = d3
    .scaleSequential()
    .domain([0, steps - 1])
    .range([from, to]);
  return Array(steps)
    .fill(undefined)
    .map((v, i) => scale(i));
};

const colorScale = (data) => {
  const nameValue = (d) => d.data.name;
  const typeValue = (d) => d.data.type;
  const categoryValue = (d) => d.data.category;
  const heightFilter = (height) => (d) => d.height === height;

  const scaleFactory = (d, r, acc = (i) => i) => {
    const scale = d3
      .scaleOrdinal()
      .domain(d.map(acc))
      .range(r);
    return scale;
  };

  const scaleColorRangeFactory = (d, r, acc = (i) => i) => {
    if (r.length === 1) return () => r[0];

    const domain = Array.from(new Set(d.map(acc)));
    const colorRange = colorScheme(r[0], r[1], domain.length);
    return scaleFactory(domain, colorRange);
  };

  const typeScale = scaleFactory(types, typeRange);

  const scaleColorByType = (node) => typeScale(nameValue(node));

  const leaves = data.filter(heightFilter(0));
  const categoriesByType = d3.group(leaves, typeValue);
  const categoryScaleFactory = (type, r) =>
    scaleColorRangeFactory(categoriesByType.get(type), r, categoryValue);

  const categoryScalesByType = categoryRanges.reduce(
    (ag, range, i) => ({
      ...ag,
      [types[i]]: categoryScaleFactory(types[i], range),
    }),
    {},
  );

  const scaleColorByCategory = (node) =>
    categoryScalesByType[typeValue(node)](categoryValue(node));

  return function scaleColor(height, node) {
    if (height === 2) return 'rgba(0,0,0,0)';
    if (height === 1) return scaleColorByType(node);
    return scaleColorByCategory(node);
  };
};

export default colorScale;
