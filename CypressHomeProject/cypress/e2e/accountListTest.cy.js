import { AccountListsPage } from "../Pages/AccountListsPage";
import { $ALE } from "../Elements/accountListsElements";

const Ao = new AccountListsPage




describe('Display Account & Lists Items', () => {

    it('should display the list of options when hovering over Account & Lists', () => {
        Ao.UrlOpen();
        Ao.hoverAccountAndLists();
       // Ao.yourListsLinksDropdownbox();
        //Ao.checkYourListsTitle();
        //Ao.printYourListItems();
        cy.printDropdownOptions("//a[@class='nav-link nav-item']");

        /*Ao.checkyourAccountsLinksDropdownVisible();
        Ao.checkYoursAccountTitle();
        Ao.printYourAccountListItems();*/
    })
})


