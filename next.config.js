const isProd = process.env.NODE_ENV === 'production';
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  poweredByHeader: false,
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
  assetPrefix:
    isDev || isProd
      ? `https://${process.env.CG_WEB_S3_BUCKET_NAME}.s3.amazonaws.com`
      : '',
};
