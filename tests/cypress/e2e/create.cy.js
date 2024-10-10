import createPage from '../support/pages/Create'
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
            details: 'O melhor lugar para tomar suco de limão.',
            opening_hours: 'das 14h as 20h',
            open_on_weekends: false
        }

        cy.apiCreateUser(user)
        cy.uiLogin(user)

        mapPage.createLink()
        createPage.form(foodtruck)
        createPage.submit()
        createPage.modal.haveText('Food truck cadastrado com sucesso!')
    })

    it('should not register a food truck with duplicate name', () => {
        const user = {
            name: 'Isabela',
            instagram: '@isa',
            password: 'Aaaaaa1!'
        }

        const foodtruck = {
            latitude: '-23.633535849219005',
            longitude: '-46.70527338981629',
            name: 'Pastel do Alan',
            details: 'O melhor pastel de São Paulo',
            opening_hours: 'das 8h as 23h',
            open_on_weekends: false
        }

        cy.apiCreateUser(user)
        cy.apiLogin(user)
        cy.apiCreateFoodTruck(foodtruck)
        cy.uiLogin(user)

        cy.visit('/map')

        mapPage.createLink()
        createPage.form(foodtruck)
        createPage.submit()
        createPage.modal.haveText('Esse food truck já foi cadastrado!')
    })

    it('all fields are required', () => {
        const user = {
            name: 'Albert',
            instagram: '@albert',
            password: 'Aaaaaa1!'
        }

        const foodtruck = {
            latitude: '-23.633535849219005',
            longitude: '-46.70527338981629',
        }

        cy.apiCreateUser(user)
        cy.uiLogin(user)

        mapPage.createLink()
        cy.setGeolocation(foodtruck.latitude, foodtruck.longitude)
        createPage.submit()
        const message = 'Os campos nome, descrição e horário de funcionamento devem ser informados para recomendar um food truck!'
        createPage.modal.haveText(message)
    })
})