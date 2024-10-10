
import modal from '../components/Modal'

class CreatePage {

    constructor(){
        this.modal = modal
    }

    form(foodtruck) {
        cy.setGeolocation(foodtruck.latitude, foodtruck.longitude)
        cy.get('input[name=name]').type(foodtruck.name)
        cy.get('textarea[name=details]').type(foodtruck.details)
        cy.get('input[name=opening-hours]').type(foodtruck.opening_hours)

        cy.contains('button', foodtruck.open_on_weekends ? 'Sim' : 'Não').click()  
    }

    submit() {
        cy.contains('button', 'Cadastrar').click()
    }
}

export default new CreatePage()