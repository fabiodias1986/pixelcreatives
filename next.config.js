module.exports = {
    webpack: (config) => {
      config.plugins.push(new (require('mini-css-extract-plugin'))());
      return config;
    },

};
