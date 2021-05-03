describe("Visiting login page", () => {
  describe("as an unauthenticated user", () => {
    it("works", () => {
      cy.visit("/login");
      cy.findByTestId("AUTH_LAYOUT_HEADER").should("be.visible");
      cy.findByLabelText("Email *").type("not-a-real-user@gmail.com");
    });
    it("log in successfully", () => {
      cy.visit("/login");
      cy.findByTestId("LOGIN_EMAIL_INPUT").type(Cypress.env("email"));
      cy.findByTestId("LOGIN_PASSWORD_INPUT").type(Cypress.env("password"));
      cy.findByTestId("LOGIN_SUBMIT_BUTTON").click();
      cy.url().should("contain", "/home");
      cy.findByTestId("CURRENT_WORKSPACE_BUTTON")
        .should("contain", Cypress.env("workspace"))
        .should("be.visible")
        .should("be.enabled");
      cy.findByTestId("ACCOUNT_POPOVER_BUTTON")
        .should("be.visible")
        .should("be.enabled");
    });
  });
});
