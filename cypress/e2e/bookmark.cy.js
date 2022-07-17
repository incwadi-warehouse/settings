describe('bookmark', () => {
  it('show bookmark', () => {
    cy.server()
    cy.route('GET', '**/api/me', {
      id: 1,
      username: 'admin',
      roles: ['ROLE_ADMIN', 'ROLE_USER'],
      branch: {
        id: 1,
      },
      isUser: true,
      isAdmin: true,
    })
    cy.route('GET', '**/api/reservation/list', {})
    cy.route('GET', '**/api/bookmark', {})
    cy.route('GET', '**/api/book/stats', {})

    cy.setCookie('token', 'token')
    cy.setCookie('refresh_token', 'refresh_token')

    cy.visit('/bookmark')
    cy.url().should('include', '/bookmark')
  })
})
