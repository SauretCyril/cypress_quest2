const { firstName, lastName, password } = require("../../fixtures/user.json");


describe("Back Marcket", () => {
  beforeEach(() => {
    cy.Cyr_GoLogin();
  });

  it.only("test d'inscription réussie", () => {
    cy.generateRandomEmail().then((email) => {
      cy.signup(firstName, lastName, email, password);
      cy.url().should("include", "/dashboard/orders");
      
    });
  });
});
