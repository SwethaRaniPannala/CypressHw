import { $ALE, $accountListsElements } from "../Elements/accountListsElements";


export class AccountListsPage{

UrlOpen(){
    cy.visit("https://www.amazon.com/");
}


hoverAccountAndLists() {
     cy.xpath($ALE.accountAndLists).trigger('mouseover');
     cy.wait(3000);
}

yourListsLinksDropdownbox() {
     cy.xpath($ALE.yourListsLinksDropdown).should('be.visible')
}

checkYourListsTitle(){
    cy.xpath($ALE.yourListsTitle).should('contain.text', 'Your Lists');

}

printYourListItems(){

cy.xpath($ALE.yourListsLinksDropdown).find('a').each(($el, index, $list) => {
    cy.log($el.text());
})
}

checkyourAccountsLinksDropdownVisible(){
    cy.xpath($ALE.yourAccountsLinksDropdown).should('be.visible');
}

checkYoursAccountTitle(){
    cy.xpath($ALE.yourAccountTitle).should('contain.text', 'Your Account');
}

printYourAccountListItems(){

    cy.xpath($ALE.yourAccountsLinksDropdown).find('a').each(($ele, index, $list) => {
        cy.log($ele.text());
    })
    }


}

