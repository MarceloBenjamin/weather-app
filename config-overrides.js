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
    },
  };

  return config;
};
