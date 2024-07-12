const { it } = require("mocha");
const { email, password } = require("../../fixtures/userme.json");
describe("reinitialiser pasword", () => {
    beforeEach(() => {
        cy.Cyr_GoLogin();
           
    });
  
    it("Login success", () => {
        //cy.url().should("contain","/register");
        cy.get("[data-qa='icon-avatar']").click();
        //cy.url().should('contain',"password-reset");
        cy.get("#email").type(email);
        cy.get('#submit-login').click();
        cy.get('#password').type(password);
        cy.get('#submit-login').click();
    });
});
