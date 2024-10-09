import loginPage from '../support/pages/Login'
import mapPage from '../support/pages/Map'


describe('Login', () => {
  it('must log in successfully', () => {
    const user = {
      name: 'Vinicius',
      instagram: '@vinipiu',
      password: 'Aaaaaa1!'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    mapPage.loggedUser(user.name)
  })

  it('should not log in with incorrect password', () => {
    const user = {
      instagram: '@vinipiu',
      password: '1345!'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')
  })

  it('should not log in with a non-existent instagram ', () => {
    const user = {
      instagram: '@vtest',
      password: 'Aaaaaa1!'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')
  })

  it('instagram must be mandatory', () => {
    const user = {
      instagram: '',
      password: 'pwd123'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal.haveText('Por favor, informe o seu código do Instagram!')
  })

  it('password must be mandatory', () => {
    const user = {
      instagram: '@test',
      password: ''
    }

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