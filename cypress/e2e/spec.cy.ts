describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.contains('Tour of Heroes');
  });

  it('when i click on heroes button, it should show all heroes', () => {
    cy.visit('/');
    cy.get('[routerlink="/heroes"').click();
    cy.get('.heroes > :nth-child(1)').should('exist');

    cy.get('[routerlink="/heroes"]').click();
    cy.get(':nth-child(1) > a').click();
    cy.get('label').click();
    cy.get('#hero-name').click();
    cy.contains('DR. NICE')
  });

  it('Should add a hero to the list when clicking on ass an hero button', () => {
    cy.visit('http://localhost:4200/');
    cy.get('[routerlink="/heroes"]').click();
    cy.get('.add-button').click();
    cy.get('#new-hero').type('TRUC');
    cy.get('.add-button').click();
  });

  it('its passes lighthouse test on homepage', () => {
    cy.visit('/');
    cy.lighthouse({
      performance: 80,
    });
  });
})





