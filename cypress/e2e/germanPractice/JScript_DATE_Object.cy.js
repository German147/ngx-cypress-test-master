///<reference types="cypress"/>

context('Using JavaScriptDateObject', () => {


    it('should test a future date calendar', () => {

        function selectDayFormCurrent(day) {
            let date = new Date();
            date.setDate(date.getDate() + day);
            let futureDay = date.getDate();
            let futureMonth = date.toLocaleDateString("default", { month: "short" });
            let dateAssert = futureMonth + ' ' + futureDay + ', ' + date.getFullYear()
            cy.get("nb-calendar-navigation")
                .invoke("attr", "ng-reflect-date")
                .then((dateAttribute) => {
                    if (!dateAttribute.includes(futureMonth)) {
                        cy.get('[data-name="chevron-right"]').click();
                        cy.get(
                            'nb-calendar-day-picker'
                        )
                            .contains(futureDay)
                            .click();
                    } else {
                        cy.get(
                            'nb-calendar-day-picker'
                        )
                            .contains(futureDay)
                            .click();
                    }
                })
            return dateAssert;
        }
                
        cy.visit("/");
        cy.contains("Forms").click();
        cy.contains("Datepicker").click();
        // Here we call the then() to call JQuery commands
        cy.contains("nb-card", "Common Datepicker")
            .find("input")
            .then((input) => {
                // As Jquery do not have click(), we must wrap the variable to o back to Cy
                //  Cypress click() method.
                cy.wrap(input).click()
                let dateAssert= selectDayFormCurrent(300)
            })
        //   cy.wrap(input)
        //     .invoke("prop", "value")
        //     .should("contain", "Sep 17, 2023");
    })
})