const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      SWAG_USERNAME: process.env.SWAG_USERNAME,
      SWAG_PASSWORD: process.env.SWAG_PASSWORD,
    },
  },
});
