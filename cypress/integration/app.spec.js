describe('Testing app', () => {
  it('Should create a new category and create a new expense and delete them', () => {
    cy.visit('/');

    const testCategory = 'Test Category 1';
    cy.get('form[data-cy=category-input]')
      .type(testCategory);
    
    cy.get('form[data-cy=category-form]').submit();
    // using a "then" block to protect against possible async issues where we might not get the section rendered in time for Cypress to know it exists

    cy.get('[data-cy=section]')
      .then((category) => {
        const testExpense = 'test expense 1';
        expect(category).to.have.length(1);

        cy.get('[data-cy=expense-form] input').type(testExpense);
        cy.get('[data-cy=expense-form]').submit();

        cy.get('[data-cy=expense]')
          .then((expenses) => {
            expect(expenses).to.have.length(1);

            // I need this as a then block because we must wait for the click to happen first to make the expect assertions, otherwise they fail because the cards and section did not get deleted fast enough

            // These block lines will not work in the right order
            // cy.get('[data-cy=delete-btn]').click()
            // expect(cards).to.have.length(0);
            // expect(sections).to.have.length(0);
            cy.get('[data-cy=delete-btn]').click()
              .then(() => {
                expect(expenses).to.have.length(0);
                expect(categories).to.have.length(0);
              });
          });
      });
  });
});
