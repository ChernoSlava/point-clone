// eslint-disable-next-line import/no-extraneous-dependencies, @typescript-eslint/no-var-requires
const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  return alias({
    "@components": "src/components",
    "@hooks": "src/hooks",
    "@utils": "src/utils",
    "@constants": "src/constants",
    "@containers": "./containers",
  })(config);
};
