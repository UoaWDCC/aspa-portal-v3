describe("User Registration and Login", () => {
  it("should register a new user", () => {
    cy.visit("/register");

    // Handle codespace continue popup - happens everytime
    cy.document().then((doc) => {
      const btn = Array.from(doc.querySelectorAll("button")).find((b) =>
        b.textContent.trim().includes("Continue"),
      );
      if (btn) {
        btn.click();
      }
    });

    cy.get('input[name="username"]').type("testuser@example.com");
    cy.get('input[name="firstname"]').type("Testuser");
    cy.get('input[name="lastname"]').type("Testuser");
    cy.get('input[name="email"]').type("testuser@example.com");
    cy.get('input[name="password"]').type("TestPassword123!");
    cy.get('input[name="confirmPassword"]').type("TestPassword123!");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/profile");
  });

  it("should log in with the new user", () => {
    cy.visit("/login");

    // Handle codespace continue popup - happens everytime
    cy.document().then((doc) => {
      const btn = Array.from(doc.querySelectorAll("button")).find((b) =>
        b.textContent.trim().includes("Continue"),
      );
      if (btn) {
        btn.click();
      }
    });

    cy.get('input[name="email"]').type("testuser@example.com");
    cy.get('input[name="password"]').type("TestPassword123!");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/profile");
  });
});
