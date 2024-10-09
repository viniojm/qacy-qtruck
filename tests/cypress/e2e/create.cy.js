
import mapPage from '../support/pages/Map'

describe('Recommendation', () => {

    it('must recommend a food truck', () => {

        const user = {
            name: 'Jerry',
            instagram: '@jerry',
            password: 'Aaaaaa1!'
        }

        const foodtruck = {
            latitude: '-23.62703872582536',
            longitude: '-46.566002368927',
            name: 'FoodTruck Marechal',
            description: 'O melhor lugar para tomar suco de limão.',
            opening_hours: 'das 14h as 20h'
        }

        cy.apiCreateUser(user)
        cy.uiLogin(user)

        mapPage.createLink()
        cy.setGeolocation(foodtruck.latitude, foodtruck.longitude)
    })
})