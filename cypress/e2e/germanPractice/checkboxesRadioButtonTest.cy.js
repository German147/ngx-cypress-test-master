///<reference types="cypress"/>

context('Ckeckboxes And Radiobuttons Test', () => { 

    it('Should Ckeck checkboxes', () => { 


        cy.visit('/')
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();

            //Using then() we create a JQuery object to manipulate elements
        cy.contains("nb-card", "Using the Grid").find('[type="radio"]').then(radioButtons => { 

            // When the input or element is visuallyHiden at the Dom, we must to put the flag {force:true}
            cy.wrap(radioButtons).first().check({ force: true }).should('be.checked');
            
            cy.wrap(radioButtons).eq(1).check({ force: true });
            
            cy.wrap(radioButtons).first().should('not.be.checked');

            cy.wrap(radioButtons).eq(2).should('be.disabled');

        });
    })

    it.only('Checkboxes method properties Test', () => { 
        // Check() only works for radio buttons and checkboxs.
        // Only work with input type. NO other ones.
        // Ckeck() can perform multiple check at once.
        // Can only check but NOT UNCHECK, for that purpose, we must use Click()
        cy.visit("/");
        cy.contains("Modal & Overlays").click();
        cy.contains("Toastr").click();

        // cy.get('[type="checkbox"]').check({ force: true });
        // cy.get('[type="checkbox"]').eq(0).click({ force: true });

        


    })


})