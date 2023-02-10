describe('Blog app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    const user = {
      name: 'joku',
      username: 'joku',
      password: 'salainen'
    }
    cy.request('POST', 'http://localhost:3003/api/users/', user)
    cy.visit('http://localhost:3000')
  })

  it('Login form is shown', function() {
    cy.contains('login')
  })
  it('Login form is shown after click', function() {
    cy.contains('login').click()
    cy.contains('cancel')
  })
})

  it('succeeds with correct credentials', function() {
    cy.contains('login').click()
    cy.get('#username').type('joku')
    cy.get('#password').type('salainen')
    cy.get('#login-button').click()
    cy.contains('joku logged in')
  })

  it('fails with wrong credentials', function() {
    cy.contains('login').click()
    cy.get('#username').type('mluukkai')
    cy.get('#password').type('wrong')
    cy.get('#login-button').click()

    cy.contains('wrong credentials')
  })
