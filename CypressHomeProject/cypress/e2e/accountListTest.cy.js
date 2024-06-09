import { AccountListsPage } from "../Pages/AccountListsPage";
import { $ALE } from "../Elements/accountListsElements";

const Ao = new AccountListsPage




describe('Amazon Account & Lists hover', () => {

    it('should display the list of options when hovering over Account & Lists', () => {
        Ao.UrlOpen();
        Ao.hoverAccountAndLists();
        Ao.yourListsLinksDropdownbox();
        Ao.checkYourListsTitle();
        Ao.printYourListItems();
        //cy.printDropdownOptions($ALE.yourListsLinksDropdown);

        /*Ao.checkyourAccountsLinksDropdownVisible();
        Ao.checkYoursAccountTitle();
        Ao.printYourAccountListItems();*/
    })
})


