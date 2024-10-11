import mapPage from '../support/pages/Map'
import foodTruckPage from '../support/pages/Foodtruck'
import reviews from '../fixtures/review.json'

describe('Reviews', () => {

    it('must send a new review', () => {
        const user = reviews.user
        const foodtruck = reviews.foodtruck
        const review = reviews.review

        cy.apiCreateUser(user)
        cy.apiLogin(user)
        cy.apiCreateFoodTruck(foodtruck)
        cy.uiLogin(user)
        mapPage.goToFoodtruck(foodtruck.name)
        foodTruckPage.addReview(review)
        foodTruckPage.reviewShouldBe(user, review)
    })
})