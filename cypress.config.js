const { defineConfig } = require("cypress");

module.exports = defineConfig({
  experimentalMemoryManagement: true,
  numTestsKeptInMemory: 1,
  video: false,

  e2e: {
    baseUrl: "https://animated-capybara-wrx4wqg4jxpc9j4q-3000.app.github.dev/", // change to your forwarded port
    specPattern: "cypress/e2e/**/*.cy.{js,ts}",
    supportFile: "cypress/support/e2e.js",
  },
});
