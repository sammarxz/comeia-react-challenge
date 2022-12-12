describe('Get Weather Forecast', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('select "Caruaru" city and then back to the home', () => {
    cy.get('[data-test-id="Caruaru"]').click()

    cy.wait(3000)
    cy.get('h1').should('contain', 'Caruaru')
    cy.get('h4').first().should('contain', 'dawn')

    cy.get('a[href*="/"]').click()

    cy.get('h1').contains('Weather')
  })
})
