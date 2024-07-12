const { firstName, lastName, password } = require("../../fixtures/user.json");

describe("Back Marcket", () => {
  beforeEach(() => {
    //cy.visit(`${Cypress.env("baseUrl")}/register`);
    //cy.get('[data-qa="accept-cta"]').click();
    cy.Cyr_GoLogin();
  });

  it("test d'inscription échouée (Email erroné)", () => {
    cy.signup(firstName, lastName, "totoDupont.yahoo.fr", password);
    
    cy.get("#signup-email")
      .should("have.prop", "validity")
      .and("have.property", "valid", false);
  });

  it("test d'inscription échouée (password erroné)", () => {
    cy.generateRandomEmail().then((email) => {
      cy.signup(firstName, lastName, email, "Password!");
      cy.contains(
        "Au moins 8 caractères, dont 1 majuscule, 1 minuscule et 1 chiffre. Parce qu'on sait jamais."
      );
    });
  });
});
