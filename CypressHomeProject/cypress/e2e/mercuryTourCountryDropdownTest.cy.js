import { RegisterPageMercuryTour } from "../Pages/MercuryCountryDropdownPage";
const RPMT = new RegisterPageMercuryTour
describe('Mercury Tour Dropdown List', () => {
    it('should display the selected list of options of country dropdown', () => {

        RPMT.Url();
        RPMT.PrintSelectCountryList();
})

    it('select all countries in country dropdown', () => {

        RPMT.Url();
        RPMT.SelectAllCountries();
})

    it.only('select one country and verify', () => {

    RPMT.Url();
    RPMT.SelecCountryandVerify();
})


})



//using custom command
//cy.PrintSelectedCountryList('HAITI');





        
        
    



    /*it.skip('should display the list of options of country dropdown', () => {


        cy.visit("https://demo.guru99.com/test/newtours/register.php");

        cy.xpath("//select[@name='country']").find('option').each(($e3) =>{

            cy.log($e3.text());

    })

        cy.xpath("//select[@name='country']").select('ARGENTINA',{force: true});
        cy.xpath("//select[@name='country']").should('have.value','ARGENTINA')
       
              /*if(i=='ARGENTINA')
                break;
            cy.log($e3.text());

            }
            
            
            
            
            /*cy.xpath("//select[@name='country']").find('option').then(($e3) =>{

        for(let i=0, i<$e3.length, i++){
             var countryNames = $e3.text());

           if($countryNames=='ARGENTINA')
                break;

        }
            /*if(i=='ARGENTINA')
                break;
            cy.log($e3.text());

            }*/
       // })
    
        
