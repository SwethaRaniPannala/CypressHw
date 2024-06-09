// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

/*Cypress.Commands.add('PrintSelectedCountryList', (countryname) => {
    cy.xpath("//select[@name='country']").find('option').each(($e3, index, $list) => {
        cy.log($e3.text());
        if ($e3.text().includes(countryname)) {
            break;
        }
    });
});*/

//cy.xpath("//select[@id='searchDropdownBox']").find('option').each(($e2) =>{
//cy.log($e2.text());

// Custom command to print the text of all options in a dropdown
/*Cypress.Commands.add('printDropdownOptions', (dropdownxpath) => {
    cy.xpath(dropdownxpath).find('a').each(($el, index, $list) => {
        cy.log($el.text());
    })
});*/


//cy.xpath($ALE.yourListsLinksDropdown).find('a').each(($el, index, $list) => {
  //  cy.log($el.text());
//})
//}























//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })