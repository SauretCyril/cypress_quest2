/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress
const { firstName, lastName, password } = require("../../fixtures/users_quest2.json");
describe("quête 2 : register success", () => {
  beforeEach(() => {
  
    cy.visit(`${Cypress.env("baseUrl")}/register`);
    cy.get('[data-qa="accept-cta"]').click();
  });
  
  it("register", () => {
    //mettre dans commmandes.js function paramétrée
    const email = cy.generateRandomEmail();
    
    
    cy.signup(firstName, lastName, "erty@yaoo.fr", password);

    //signup - password;
    cy.url().should("include", "/dashboard/orders");
  });
 
});
