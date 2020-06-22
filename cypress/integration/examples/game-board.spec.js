describe("", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("If gaming board is there.", () => {
    cy.get("div").should("have.class", "game-board-main-wrapper");
  });
  it("If has food to eat.", () => {
    cy.wait(1000);
    cy.get("div").should("have.class", "snake-food");
  });

  it("Start the game by pressing the button.", () => {
    cy.wait(2000);
    cy.focused().should('have.class','start-game').click();
    cy.wait(2000);
    cy.get('body').type('{downarrow}')
    cy.wait(1000);
    cy.get('body').type('{leftarrow}')
    cy.wait(1000);
    cy.get('body').type('{uparrow}')
    cy.wait(1000);
    cy.get('body').type('{rightarrow}')
  });
});
