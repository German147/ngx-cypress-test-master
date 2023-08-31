/// <reference types="cypress"/>

context('Identifying Locators', () => { 

    it('creating Cy locators', () => { 

        cy.visit('/')
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();

       //by tag name
        cy.get('input');

        //by id
        cy.get('#inputEmail1');

        //by class name => only works with only one value
        cy.get('.input-full-width');

        //by attribute name
        cy.get("[placeholder]");

        //by Atributte name and value
        cy.get('[placeholder="Email"]');

        //by Class value => only works with the entire values
        cy.get('[class="input-full-width size-medium shape-rectangle"]');

        //by Tag name , Atributte and Value
        cy.get('input[placeholder="Email"]');

        //by two different attributes
        cy.get('[placeholder="Email"][type="email"]');

        //by Tag name, Atributte with value, ID and Class name
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width');

        //The most recomended way is to create your own locator 
        cy.get('[data-cy="imputEmail1"]');
    
    })

})