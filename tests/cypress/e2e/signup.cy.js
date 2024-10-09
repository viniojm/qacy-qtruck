import signupPage from '../support/pages/Signup'

describe('Signup', ()=>{
    it('must register a new user', ()=>{
        const user= {
            name: 'Steve Benqs',
            instagram: '@stevebenqs',
            password: 'Aaaaaa1!'
        }
        cy.apiResetUser(user.instagram)
        
        signupPage.go()
        signupPage.form(user)
        signupPage.submit()
        signupPage.modal.haveText('Agora você pode recomendar e/ou avaliar Food trucks.')
    })

    it('should not register with instagram duplicated', ()=>{
        const user= {
            name: 'Tony Alli',
            instagram: '@tonyalli',
            password: 'Aaaaaa1!'
        }
        cy.apiCreateUser(user)

        signupPage.go()
        signupPage.form(user)
        signupPage.submit()
        signupPage.modal.haveText('Instagram já cadastrado!')
    })
})

