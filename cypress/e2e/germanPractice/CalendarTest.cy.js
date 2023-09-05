/// <reference types="cypress"/>

context('Calendar Test', ()=> { 


    it('Test a chosen date', () => { 

        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Datepicker').click();

        // Here we call the then() to call JQuery commands
        cy.contains("nb-card", "Common Datepicker").find('input').then(input => {
          // As Jquery do not have click(), we must wrap the variable to o back to Cy
          //  Cypress click() method.
          cy.wrap(input).click();
          cy.get("nb-calendar-day-picker").contains("17").click();
          cy.wrap(input)
            .invoke("prop", "value")
            .should("contain", "Sep 17, 2023");
        });

    })

})