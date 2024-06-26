// cypress/support/pages/bookingPage.js

import { bookingElements } from "../Elements/BookingTicketElements";

export class BookingPage {
  visit() {
    cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/');
  }

  fillBookingForm(firstName, lastName, fromCity, toCity, phoneNumber, email, countryname, hno, postalno, cityaddress) {
    cy.xpath(bookingElements.firstName).type(firstName);
    cy.xpath(bookingElements.lastName).type(lastName);
    cy.xpath(bookingElements.genderradiobutton).check().should('be.checked');
    cy.xpath(bookingElements.traveltype).check();
    cy.xpath(bookingElements.fromCity).type(fromCity);
    cy.xpath(bookingElements.toCity).type(toCity);
    cy.xpath(bookingElements.deliverytype).check();
    cy.xpath(bookingElements.phoneNumber).type(phoneNumber);
    cy.xpath(bookingElements.email).type(email);
    cy.xpath(bookingElements.country).click();
    cy.xpath(bookingElements.countryinput).type(countryname).type('{enter}')
    cy.xpath(bookingElements.country).should('have.text', countryname )
    cy.xpath(bookingElements.address).type(hno)
    cy.xpath(bookingElements.postal).type(postalno)
    cy.xpath(bookingElements.city).type(cityaddress)


    //cy.xpath(bookingElements.country).select('Australia');

    //cy.get("//input[@id='fromcity']").type(fromCity);
    //cy.get("//input[@id='tocity']'").type(toCity);
  };


 /* submitForm() {
    cy.get(bookingElements.submitButton).click();
  }

  verifyConfirmationMessage() {
    cy.get(bookingElements.confirmationMessage).should('be.visible');
  }*/
}
