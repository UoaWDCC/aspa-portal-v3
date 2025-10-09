const { defineConfig } = require("cypress");

module.exports = defineConfig({
  experimentalMemoryManagement: true,
  numTestsKeptInMemory: 1,
  video: false,

  e2e: {
    baseUrl:
      "https://congenial-carnival-g4x44jx69jgqfppxg-3000.app.github.dev/", // change to your forwarded port
    specPattern: "cypress/e2e/**/*.cy.{js,ts}",
    supportFile: "cypress/support/e2e.js",
  },
});
