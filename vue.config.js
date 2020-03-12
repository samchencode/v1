module.exports = {
  publicPath: process.env.NODE_ENV === 'development'
    ? ''
    : 'https://samchencode.github.io/v1',
  outputDir: 'docs',
  productionSourceMap: false,
};
