require('dotenv').config();

module.exports = {
  poweredByHeader: false,
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
  env: {
    assetPrefix: process.env.CG_WEB_CLOUDFRONT_DOMAIN
      ? `https://${process.env.CG_WEB_CLOUDFRONT_DOMAIN}`
      : '',
  },
};
