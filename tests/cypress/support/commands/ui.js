import loginPage from '../pages/Login'
import mapPage from '../pages/Map'

Cypress.Commands.add('uiLogin', (user) => {
    loginPage.go('-23.632061492457712', '-46.71051979064942')
    loginPage.form(user)
    loginPage.submit()

    mapPage.loggedUser(user.name)
})

Cypress.Commands.add('setGeolocation', (lat, long) => {
    localStorage.setItem('qtruck:latitude', lat)
    localStorage.setItem('qtruck:longitude', long)
})