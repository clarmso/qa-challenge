describe("Account settings notifications page", () => {
  beforeEach(() => {
    // TODO: I could've login using an access token instead of relying on the login page.
    cy.visit("/login");
    cy.findByTestId("LOGIN_EMAIL_INPUT").type(Cypress.env("email"));
    cy.findByTestId("LOGIN_PASSWORD_INPUT").type(Cypress.env("password"));
    cy.findByTestId("LOGIN_SUBMIT_BUTTON").click();
    cy.url().should("contain", "/home");
    cy.intercept("PATCH", "*/members/updateSettings").as("updateSettings");
    cy.visit("/account/my-account");
  });
  it("email notifications setting persists", () => {
    cy.findByText("Notifications").click();
    cy.get("input#discussion-notifications").check();
    cy.wait("@updateSettings");
    cy.findByTestId("ACCOUNT_POPOVER_HOME_LINK").click();
    cy.url().should("contain", "/home");
    cy.findByTestId("ACCOUNT_POPOVER_BUTTON").click();
    cy.findByTestId("ACCOUNT_SETTINGS_LINK").click();
    cy.findByText("Notifications").click();
    cy.get("input#discussion-notifications").should("not.be.checked");
  });
});
