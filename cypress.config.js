const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    baseUrl: "https://preprod.backmarket.fr",
  },
  MAILSLURP_API_KEY:
    "42c393f654012472034e72496987d0101a9b195a52d959ec86ff00bb01d55d8d",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
