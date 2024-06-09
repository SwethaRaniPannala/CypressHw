import { $HP } from "../Elements/AllDropdwnElements";


export class HomePage{

OpenUrl(){
    cy.visit("https://www.amazon.in/");
}

PrintAllDropdownList(){
cy.xpath($HP.allDropdownXpath).find('option').each(($e2) =>{
    cy.log($e2.text());
})
}
}

