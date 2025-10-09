describe("User Registration and Login", () => {
  it("should register a new user", () => {
    cy.visit("/register");

    // Handle codespace continue popup - happens everytime
    cy.handleContinue();

    cy.get("#username")
      .type("testuser@example.com")
      .should("have.value", "testuser@example.com");
    cy.get("#firstname").type("Testuser").should("have.value", "Testuser");
    cy.get("#lastname").type("Testuser").should("have.value", "Testuser");
    cy.get("#email")
      .type("testuser@example.com")
      .should("have.value", "testuser@example.com");
    cy.get("#password")
      .type("TestPassword123!")
      .should("have.value", "TestPassword123!");
    cy.get("#confirmPassword")
      .type("TestPassword123!")
      .should("have.value", "TestPassword123!");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/profile");
  });

  it("should log in with the new user", () => {
    cy.visit("/login");

    // Handle codespace continue popup - happens everytime
    cy.handleContinue();

    cy.get('input[name="email"]').type("testuser@example.com");
    cy.get('input[name="password"]').type("TestPassword123!");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/profile");
  });
});
