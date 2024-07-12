const { email, password } = require("../../fixtures/userme.json");
describe("reinitialiser pasword", () => {
    beforeEach(() => {
        cy.Cyr_GoLogin();
           
    });
  
    it("Login success", () => {
        //cy.url().should("contain","/register");
        cy.get("[data-qa='icon-avatar']").click();
        //cy.url().should('contain',"password-reset");
        cy.pause();
        cy.get("#email").type(email);
        cy.get('#submit-login').click().then(function   () {     
            cy.get("#login-form");
            cy.get('.mb-7').contains("Mot de passe oublié ?").click().then(function () {
                cy.get('#email').invoke("contents").then(function (contents) 
                { 
                    cy.log(contents);
                    //cy.get('[data-qa="password-reset-submit-button"]').suclick(function () {

                   // });
               
            });
        });
        //cy.get('#password').type("password");
        //cy.get('#submit-login').click();
        });
    });
});