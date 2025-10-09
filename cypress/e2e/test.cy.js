describe("test handleContinue", () => {
  it("visits the homepage and checks for the site title", () => {
    cy.visit("/");

    // Handle codespace continue popup - happens everytime
    cy.handleContinue();

    cy.contains("ASPA");
  });
});
