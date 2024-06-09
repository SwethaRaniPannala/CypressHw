import { $RCD } from "../Elements/mercuryTourCountryDropdownElements";


export class RegisterPageMercuryTour{

Url(){
        cy.visit("https://demo.guru99.com/test/newtours/register.php");
}

SelecCountryandVerify(){
    cy.xpath($RCD.registerCountryDropdown).select('HAITI');
    //cy.xpath("//select[@name='country']").select('ARGENTINA',{force: true});
    cy.xpath($RCD.registerCountryDropdown).should('have.value','HAITI')
}


SelectAllCountries(){
    cy.xpath($RCD.registerCountryDropdown).find('option').each(($e2) =>{
        cy.log($e2.text());
        cy.xpath($RCD.registerCountryDropdown).select($e2.text(),{force: true});
    }
    )}


PrintSelectCountryList(){
    cy.xpath($RCD.registerCountryDropdown).find('option').each(($e2) =>{
    cy.log($e2.text());

})
}
}
