describe("control user json", () => {
  before(() => {
    cy.visit("http://localhost:3000");
    cy.fixture("user.json").as("data");
  });

  it("check object example", () => {
    cy.get("@data").then((data) => {
      cy.wrap(data).should("have.property", "firstname");
    });
    cy.get("@data").then(
      ({ firstname, lastname, email, birthday, password }) => {
        cy.visit("http://localhost:3000/signup");
        cy.log("firstname = " + firstname);
        cy.get("#firstname").type(firstname);
        cy.get("#lastname").type(lastname);
        cy.get("#birthday").type(birthday);
        cy.get("#email").type(email);
        cy.get("#password").type(password);
        cy.get("#confirmPassword").type(password);
        cy.get("input[type='checkbox']").check();
        cy.get('button[type="submit"]').click();
      }
    );
  });
});
