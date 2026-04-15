const { createApp } = require('../src/app');

const appInstance = createApp();

module.exports = appInstance.app;
