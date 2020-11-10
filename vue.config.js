const path = require('path');
const vueSrc = './src';

module.exports = {
  runtimeCompiler: true,
  publicPath: '/',
  css: {
    requireModuleExtension: true,
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, vueSrc),
      },
    },
  },
  chainWebpack: (config) => {
    let title = require('./package.json').title;
    config.plugin('html').tap((args) => {
      args[0].title = title;
      return args;
    });
  },
  lintOnSave: false,
  transpileDependencies: ['vuetify'],
};
