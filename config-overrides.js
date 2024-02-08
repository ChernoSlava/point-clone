const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  return alias({
    '@components': 'src/components',
    '@hooks': 'src/hooks',
    '@utils': 'src/utils',
    '@constants': 'src/constants'
  })(config);
};
