import { HomePage } from "../Pages/HomePageAll";
const Hp = new HomePage


describe('Amazon All Dropdown List', () => {

    it('should display the list of options of All Dropdown', () => {
        
        Hp.OpenUrl();
        Hp.PrintAllDropdownList();
    })
})
