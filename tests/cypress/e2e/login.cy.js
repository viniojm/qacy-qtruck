import loginPage from '../support/pages/Login'
import mapPage from '../support/pages/Map'
import users from '../fixtures/login-users.json'


describe('Login', () => {
  it('must log in successfully', () => {
    const user = users.success

    cy.apiCreateUser(user)
    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    mapPage.loggedUser(user.name)
  })

  it('should not log in with incorrect password', () => {
    const user = users.inv_pass

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')
  })

  it('should not log in with a non-existent instagram ', () => {
    const user = users.not_found

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')
  })

  it('instagram must be mandatory', () => {
    const user = users.require_insta

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal.haveText('Por favor, informe o seu código do Instagram!')
  })

  it('password must be mandatory', () => {
    const user = users.require_pass

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal.haveText('Por favor, informe a sua senha secreta!')
  })

  it('all fields must be mandatory', () => {
    const user = {
      instagram: '',
      password: ''
    }

    loginPage.go()
    loginPage.submit()
    loginPage.modal.haveText('Por favor, informe suas credenciais!')
  })
})