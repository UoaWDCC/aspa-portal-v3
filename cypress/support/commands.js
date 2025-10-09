Cypress.Commands.add("handleContinue", () => {
  cy.document().then((doc) => {
    const btn = Array.from(doc.querySelectorAll("button")).find((b) =>
      b.textContent.trim().includes("Continue"),
    );
    if (btn) {
      btn.click();
    }
  });
});
