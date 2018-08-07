describe('Testing budget tracker app', () => {
  it('Should create a new category and a new expense and delete them', () => {
    expect(true).to.equal(true);
    
    cy.visit('http://localhost:8080');

    cy.get('form[data-cy=category-form] input[type=text]')
      .type('Test Category 1');
    
    cy.get('form[data-cy=category-form] input[type=number]')
      .clear()
      .type('100')
    
    cy.get('form[data-cy=category-form]')
      .submit();

    cy.get('[data-cy=category]')
      .then((categories) => {
        expect(categories).to.have.length(1);
      })

    cy.get('form[data-cy=expense-form] input[type=text]')
      .type('Test Expense 1');

    cy.get('form[data-cy=expense-form] input[type=number]')
      .clear()
      .type('50');

    cy.get('form[data-cy=expense-form]').submit();

    cy.get('[data-cy=expense]')
      .then((expense) => {
        expect(expense).to.have.length(1);
      })

    cy.get('[data-cy=category-delete-button]').click()
  });
});