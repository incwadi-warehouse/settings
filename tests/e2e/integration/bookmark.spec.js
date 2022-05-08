describe('bookmark', () => {
  it('show bookmark', () => {
    cy.server()
    cy.route('GET', '**/api/me', {})

    cy.setCookie('token', 'token')
    cy.setCookie('refresh_token', 'refresh_token')

    cy.visit('/bookmark')
    cy.url().should('include', '/bookmark')
  })
})
