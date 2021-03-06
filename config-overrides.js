const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@routes': path.resolve(__dirname, 'src/routes/index'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@api': path.resolve(__dirname, 'src/service/api.tsx'),
      '@theme': path.resolve(__dirname, 'src/theme/index'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@ducks': path.resolve(__dirname, 'src/store/ducks'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  };

  return config;
};
