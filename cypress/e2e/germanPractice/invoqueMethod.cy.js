///<reference types="cypress" />


context('Practice on Invoque Method', () => { 

    it('Getting Text Samples', () => { 

          cy.visit("/");
          cy.contains("Forms").click();
          cy.contains("Form Layouts").click();
        
        // Sample 1
        cy.get('[for="inputEmail1"]').should('contain', 'Email');
        
        // Sample 2
        cy.get('[for="inputEmail1"]').then(label => { 
            expect(label.text()).to.equal('Email')
        });

        // Sample 3
        cy.get('[for="inputEmail1"]').invoke('text').then(text => { 
            expect(text).to.equal('Email')
        });

    })

    it.only('Show ckecked option', () => { 

        cy.visit("/");
        cy.contains("Forms").click();
        cy.contains("Form Layouts").click();

        cy.contains("nb-card", "Basic form")
            .find("nb-checkbox")
            .click()
            .find(".custom-checkbox")
            .invoke('attr', 'class')
            // .should('contain', 'checked');
            .then(classValue => { 
                expect(classValue).to.contain('checked')
            })
    })
})