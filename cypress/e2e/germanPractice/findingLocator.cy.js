/// <reference types="cypress"/>


context('Finding element', () => { 

    it('Get Sing in buttons', () => { 

        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();

        cy.get('[data-cy="SingInButtonGer"]');

        cy.contains('[status="primary"]', "Sign in");
        cy.contains('[ng-reflect-status="warning"]', 'Sign in');
        
       cy.get("#exampleInputPassword1")
          .parents("form")
          .find("nb-checkbox")
          .click();

     

    })

    it('should click checkbox in Sign in in Horizontal Form', () => { 

        cy.visit("/");
        cy.contains("Forms").click();
        cy.contains("Form Layouts").click();
        
        cy.get("#inputEmail3")
             .parents("form")
             .find("button")
             .should("contain", "Sign in")
             .parents("form")
             .find("nb-checkbox")
             .click();

    })

    it('Then and Wrap methods', () => { 

        // then() function calls JQuery method in order to reuse them and interact with them
        // wrap() method, when you wrap  the previous functions this brings you up with the Cy methods agains inside the THEN() function
        cy.visit("/");
        cy.contains("Forms").click();
        cy.contains("Form Layouts").click();

        // cy.contains("nb-card", "Using the Grid").find('[for="inputEmail1"]').should("contain", "Email");
        // cy.contains("nb-card", "Using the Grid").find('[for="inputPassword2"]').should('contain', 'Password');
        // cy.contains('nb-card', 'Basic form').find('[forexample=Email1]').should('contain', 'Email');

        
        cy.contains("nb-card", "Using the Grid").then(firstForm => {
            const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text();
            const passwordLabelFirst = firstForm.find('[for="inputPassword2"]').text();

            expect(emailLabelFirst).to.equal('Email');
            expect(passwordLabelFirst).to.equal('Password');


            cy.contains("nb-card", "Basic form").then((secondForm) => {
              const passwordSecondTExt = secondForm
                .find('[for="exampleInputPassword1"]')
                .text();

                expect(passwordLabelFirst).to.equal(passwordSecondTExt);
                
                cy.wrap(secondForm).find('[for="exampleInputPassword1"]').should('contain','Password');

            });

        });

    })
    it.only('Trying my Sample', () => { 
           cy.visit("/");
           cy.contains("Forms").click();
        cy.contains("Form Layouts").click();
        
        cy.contains("nb-card", "Inline form").then((labelName) => {
          const JaneDoeTExt = labelName.find('[placeholder="Jane Doe"]').text();

          expect(JaneDoeTExt).to.equal('');
        });

    })



})