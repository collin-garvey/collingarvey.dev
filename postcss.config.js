module.exports = {
  plugins: [
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 0,
        features: {
          'custom-properties': true,
          'custom-media-queries': true,
          'nesting-rules': true,
        },
      },
    ],
  ],
};
