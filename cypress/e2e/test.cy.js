describe("test", () => {
  it("visits the homepage and checks for the site title", () => {
    cy.visit("/");

    // Handle codespace continue popup - happens everytime
    cy.document().then((doc) => {
      const btn = Array.from(doc.querySelectorAll("button")).find((b) =>
        b.textContent.trim().includes("Continue"),
      );
      if (btn) {
        btn.click();
      }
    });

    cy.contains("ASPA");
  });
});
