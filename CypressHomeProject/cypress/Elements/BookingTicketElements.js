// cypress/support/pages/bookingPage.js

// cypress/support/elements/bookingElements.js

export const bookingElements = {
  firstName: "//input[@id='travname']",
  lastName: "//input[@id='travlastname']",
  genderradiobutton:"//input[@id='sex_2']",
  traveltype:"//input[@id='traveltype_1']",
  deliverytype:"//input[@id='deliverymethod_1']",
  email: "//input[@id='billing_email']",
  phoneNumber: "//input[@id='billing_phone']",
  fromCity: "//input[@id='fromcity']",
  toCity: "//input[@id='tocity']",
  country: "//span[@id='select2-billing_country-container']",
  countryinput:"//input[@class='select2-search__field']",
  countrylist:"//ul[@id='select2-billing_country-results']",
  address:"//input[@id='billing_address_1']",
  postal:"//input[@id='billing_postcode']",
  city:"//input[@id='billing_city']"

  //submitButton: 'button[type="submit"]',
  //confirmationMessage: '.confirmation-message'
};
