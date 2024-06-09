describe('Flight destination Search', () => {

    it('flight search', () => {


    
       /* cy.visit("https://www.makemytrip.com/");
       
        cy.xpath("//input[@id='fromCity']").click();
        cy.xpath("//input[@class='react-autosuggest__input react-autosuggest__input--open']").type('mumbai')
*/

cy.visit("https://www.expedia.com/Flights")
cy.xpath("(//button[@class='uitk-fake-input uitk-form-field-trigger'])[1]").click();
cy.xpath("//input[@id='origin_select']").type('delhi').type({enter});



        })
    })

