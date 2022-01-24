/* eslint-disable testing-library/await-async-query,testing-library/prefer-screen-queries */

import { constants } from "../../constants";

describe('The form', () => {
    beforeEach(() => {
        cy.visit('/') // Uses baseUrl defined in cypress.json config file, run project locally with npm run `build` & `serve`
    })

    it('Validates valid user input', () => {
        cy.get('#label-accordion').click();

        fillInForm();

        cy.get('button[type="submit"]').click();

        cy.findByText("Ontvangen melding").should('exist').should('be.visible');

        cy.get('div[role="dialog"]').contains("testPicture.ico").should('exist').should('be.visible');

        cy.get('div[role="dialog"]').find('> p').should('have.length', 7);

        cy.wait(1000).then(() => {
            cy.get('div[role="dialog"]').contains("✕").click();
        });

        cy.findByText("Ontvangen melding").should('not.exist');
    })

    it('Validates invalid file upload', () => {
        cy.get('#label-accordion').click();

        fillInForm(undefined, undefined, true);

        cy.get('button[type="submit"]').click();

        cy.get("#bestanden").should('have.length', 1).should('have.a.class', 'invalid');
    })

    it('Validates invalid selected value', () => {
        cy.get('#label-accordion').click();

        fillInForm(undefined, undefined, undefined, true);

        cy.get('button[type="submit"]').click();

        cy.get("#type").should('have.length', 1).should('have.a.class', 'invalid');
    })

    it('Back button clears form', () => {
        cy.get('#label-accordion').click();

        fillInForm();

        cy.get('button[type="reset"]').click();

        cy.contains(constants.accordionTitle).should('not.be.visible')

        cy.get('#label-accordion').click();

        cy.get('#object').should('have.value', ''); // Validate form is empty
        cy.get('#locatie').should('have.value', '');
        cy.get('#beschrijving').should('have.value', '');
        cy.get('#urgentie').should('have.value', '4');
        cy.get('#toelichting').should('have.value', '');
        cy.get('#type').should('have.value', '1');
    })
})

const fillInForm = (
    value = "testValue",
    selectValue = 2,
    skipFileUpload = false,
    skipType = false) => {

    cy.get('#object').click().type('value');
    cy.get('#locatie').click().type('value');
    cy.get('#beschrijving').click().type('value');
    cy.get('#urgentie').select(selectValue);
    cy.get('#toelichting').click().type('value');

    !skipFileUpload && cy.fixture('testPicture.ico').then(fileContent => {
        cy.get('input[type="file"]').attachFile({
            fileContent: fileContent.toString(),
            fileName: 'testPicture.ico',
            mimeType: 'image/ico'
        });
    });

    !skipType && cy.get('#type').select(selectValue);
}
