require('dotenv').config();

module.exports = {
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
  env: {
    assetPrefix: process.env.CG_WEB_CLOUDFRONT_DOMAIN
      ? `https://${process.env.CG_WEB_CLOUDFRONT_DOMAIN}`
      : '',
  },
};
