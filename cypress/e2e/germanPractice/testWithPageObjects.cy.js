import { navigateTo, onNavigationPage } from "../../support/page_objects/navigationPage"

context('Practice With Page Object', () => { 



    beforeEach('Open the locator on Web Page', () => {
        cy.visit('/')
    })

    it('Verify navigation acroos the pages', () => { 
        navigateTo.formLayoutsPage();
        navigateTo.datePickerPage();
        navigateTo.checkboxes();
        
    })

})