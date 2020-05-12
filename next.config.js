require('dotenv').config();
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfig = {
  esModule: true,
  poweredByHeader: false,
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: 'file-loader',
      },
    });
    config.module.rules.push({
      test: /\.svg$/,
      loader: 'svg-inline-loader?classPrefix',
    });
    return config;
  },
};

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        handleImages: ['jpeg', 'png'],
        responsive: {
          sizes: [300, 650, 1200, 2000],
          placeholder: true,
          placeholderSize: 50,
        },
      },
    ],
  ],
  nextConfig,
);
