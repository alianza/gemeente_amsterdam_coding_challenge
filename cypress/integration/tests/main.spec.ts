import { constants } from "../../constants"

describe('The main page', () => {
    beforeEach(() => {
        cy.visit('/') // Uses baseUrl defined in cypress.json config file, run project locally with npm run `build-prod` & `serve`
    })

    it('shows page title', () => {
        cy.contains('Coding Challenge gemeente Amsterdam').should('exist')
    })

    it('Shows page subtitle', () => {
        cy.contains('Nieuwe Melding:').should('exist')
    })

    it('Shows accordion title after expanding', () => {
        cy.contains(constants.accordionTitle).should('exist').should('be.not.visible')
        cy.get('#label-accordion').click()
        cy.contains(constants.accordionTitle).should('be.visible')
    })

    it('Collapses accordion with close button', () => {
        cy.get('#label-accordion').click()
        cy.contains(constants.accordionTitle).should('be.visible')
        cy.get('button[type="reset"]').click()
        cy.contains(constants.accordionTitle).should('not.be.visible')
    })
})
