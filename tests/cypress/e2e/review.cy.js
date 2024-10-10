
describe ('Reviews', ()=> {

    it('must send a new review', ()=>{

        const user = {
            name: 'Math Daniels',
            instagram: '@math',
            password: 'Aaaaaa1!'
        }

        const foodtruck = {
            latitude: '-23.632061492457712',
            longitude: '-46.71051979064942',
            name: 'Hot Dog do Claudio',
            details: 'Hot dog duplo com bastante purê.',
            opening_hours: 'das 14h as 20h',
            open_on_weekends: true
        }

        cy.apiCreateUser(user)
        cy.apiLogin(user)
        cy.apiCreateFoodTruck(foodtruck)
        cy.uiLogin(user)
    })
})