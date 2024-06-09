/*import { AccountListsPage } from "../Pages/AccountListsPage"
const accountListObj = new AccountListsPage()
import { $accountListElements } from "../Elements/accountListsElements"
*/



describe('Amazon Account & Lists hover', () => {

    it('should display the list of options when hovering over Account & Lists', () => {


        cy.visit("https://www.amazon.in/");
        cy.xpath("//span[text()='Account & Lists']").trigger('mouseover');
        //YourList
        cy.xpath("//div[@id='nav-al-wishlist']").should('be.visible');
        cy.xpath("//div[@id='nav-al-title']").should('contain.text', 'Your Lists');
        cy.xpath("//div[@id='nav-al-wishlist']").find('a').each(($el, index, $list) => {
            cy.log($el.text());
        })
        //AccountList
        cy.xpath("//div[@id='nav-al-your-account']").should('be.visible');
        cy.xpath("//div[text()='Your Account']").should('contain.text', 'Your Account');
        cy.xpath("//div[@id='nav-al-your-account']").find('a').each(($ele, index, $list) => {
            cy.log($ele.text());
        })


    })
})
